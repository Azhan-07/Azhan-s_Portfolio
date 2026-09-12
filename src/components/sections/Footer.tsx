import { siteConfig } from '../../data/site';
import { socials } from '../../data/socials';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <h3 className="footer__name">{siteConfig.author.toUpperCase()}</h3>
            <p className="footer__role">Software Engineer · Developer · AI Explorer</p>
          </div>

          <div className="footer__links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                data-cursor="hover"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="footer__right">
            <div className="footer__status mono">
              <span className="footer__status-dot" />
              {siteConfig.systemStatus}
            </div>
            <p className="footer__copy">© 2026 {siteConfig.author}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
