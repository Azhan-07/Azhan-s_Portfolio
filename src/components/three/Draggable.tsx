import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const draggableRoots = new Set<THREE.Object3D>();

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const plane = new THREE.Plane();
const planeNormal = new THREE.Vector3();
const planePoint = new THREE.Vector3();
const worldPos = new THREE.Vector3();

let camera: THREE.Camera | null = null;
let viewportWidth = 1;
let viewportHeight = 1;
let dragging: THREE.Object3D | null = null;
let hovering: THREE.Object3D | null = null;
let listenersAttached = false;

function setCursorFeedback(state: 'grab' | 'grabbing' | '') {
  const body = document.body;
  if (state === 'grab') {
    body.style.cursor = 'grab';
    body.dataset.sceneDrag = 'grab';
  } else if (state === 'grabbing') {
    body.style.cursor = 'grabbing';
    body.dataset.sceneDrag = 'grabbing';
  } else {
    body.style.cursor = '';
    delete body.dataset.sceneDrag;
  }
}

function pick(clientX: number, clientY: number): THREE.Object3D | null {
  if (!camera || draggableRoots.size === 0) return null;
  ndc.set((clientX / viewportWidth) * 2 - 1, -(clientY / viewportHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(Array.from(draggableRoots), true);
  if (hits.length === 0) return null;
  let obj: THREE.Object3D | null = hits[0].object;
  while (obj && !draggableRoots.has(obj)) obj = obj.parent;
  return obj;
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return !!target.closest('a, button, input, textarea, select, [data-cursor], [data-drag-disabled]');
}

function onPointerDown(e: PointerEvent) {
  if (e.pointerType === 'touch') return;
  if (isInteractiveTarget(e.target)) return;
  const obj = pick(e.clientX, e.clientY);
  if (!obj || !camera) return;
  e.preventDefault();

  obj.getWorldPosition(worldPos);
  planeNormal.copy(worldPos).sub(camera.position).normalize();
  plane.setFromNormalAndCoplanarPoint(planeNormal, worldPos);

  dragging = obj;
  setCursorFeedback('grabbing');
  document.body.classList.add('scene-dragging');
}

function onPointerMove(e: PointerEvent) {
  if (e.pointerType === 'touch' || !camera) return;

  if (dragging) {
    ndc.set((e.clientX / viewportWidth) * 2 - 1, -(e.clientY / viewportHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    if (raycaster.ray.intersectPlane(plane, planePoint)) {
      dragging.position.copy(planePoint);
    }
    return;
  }

  const next = isInteractiveTarget(e.target) ? null : pick(e.clientX, e.clientY);
  if (next !== hovering) {
    hovering = next;
    setCursorFeedback(hovering ? 'grab' : '');
  }
}

function onPointerUp() {
  if (dragging) {
    dragging = null;
    document.body.classList.remove('scene-dragging');
    setCursorFeedback(hovering ? 'grab' : '');
  }
}

function attachListeners() {
  if (listenersAttached) return;
  listenersAttached = true;
  window.addEventListener('pointerdown', onPointerDown, { passive: false });
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
}

export function Draggable({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { camera: sceneCamera, size } = useThree();

  useEffect(() => {
    camera = sceneCamera;
    viewportWidth = size.width;
    viewportHeight = size.height;
    attachListeners();

    const group = groupRef.current;
    if (group) {
      draggableRoots.add(group);
      return () => {
        draggableRoots.delete(group);
        if (dragging === group) dragging = null;
        if (hovering === group) {
          hovering = null;
          setCursorFeedback('');
        }
      };
    }
  }, [sceneCamera, size]);

  return <group ref={groupRef}>{children}</group>;
}