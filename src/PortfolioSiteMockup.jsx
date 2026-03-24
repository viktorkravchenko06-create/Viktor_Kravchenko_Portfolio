import React from 'react';
import avatarImage from '../res/avatar.png';

export default function PortfolioSiteMockup() {
  const [activeSection, setActiveSection] = React.useState('home');

  const styles = `
    :root {
      --bg-light: #dde4ea;
      --card-bg: #e7edf2;
      --accent: #7f73f4;
      --accent-dark: #6754ee;
      --text-main: #505962;
      --hero-start: #433d91;
      --hero-end: #4c4299;
      --shadow-dark: rgba(183, 194, 203, 0.85);
      --shadow-light: rgba(245, 249, 252, 0.95);
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg-light);
      color: var(--text-main);
    }

    .portfolio-site {
      background: var(--bg-light);
      color: var(--text-main);
      min-height: 100vh;
    }

    .container {
      width: min(1140px, calc(100% - 32px));
      margin: 0 auto;
    }

    .top-bar {
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 14px 0 24px;
      background: linear-gradient(180deg, #4a4096 0%, #4d4298 100%);
      box-shadow: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .nav-shell {
      position: relative;
      max-width: 560px;
      margin: 0 auto;
      padding: 12px;
      border-radius: 999px;
      background: rgba(231, 237, 242, 0.88);
      box-shadow: 0 0 38px rgba(255, 255, 255, 0.76);
      backdrop-filter: blur(12px);
    }

    .nav-shell::before {
      content: '';
      position: absolute;
      inset: -10px -14px;
      border-radius: 999px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.08) 62%, transparent 78%);
      filter: blur(14px);
      opacity: 0.85;
      z-index: -1;
      pointer-events: none;
    }

    .main-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .main-nav button {
      flex: 1;
      text-align: center;
      padding: 14px 18px;
      border-radius: 999px;
      border: 0;
      background: transparent;
      color: #40454d;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      transition: 0.25s ease;
    }

    .main-nav button.active,
    .main-nav button:hover {
      background: #ffffff;
      color: var(--accent);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.85);
    }

    .nav-label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .nav-icon {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: rgba(64, 69, 77, 0.18);
      box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.45), inset -2px -2px 4px rgba(120, 128, 136, 0.12);
      transition: 0.25s ease;
      flex-shrink: 0;
    }

    .main-nav button.active .nav-icon,
    .main-nav button:hover .nav-icon {
      background: radial-gradient(circle at 30% 30%, #b9aeff 0%, #8d7eff 45%, #6f5ff4 100%);
      box-shadow: 0 0 14px rgba(127, 115, 244, 0.55);
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 70px 20px;
      color: #ffffff;
      background: linear-gradient(180deg, #4d4298 0%, #473f94 26%, var(--hero-end) 100%);
    }

    .hero-inner {
      max-width: 900px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .hero-copy {
      display: grid;
      gap: 14px;
      justify-items: center;
      margin-top: 4px;
    }

    .hero-avatar-wrap {
      width: 360px;
      height: 360px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 56px;
      background: radial-gradient(circle, rgba(73, 63, 147, 0.82) 0%, rgba(73, 63, 147, 0.08) 72%, transparent 100%);
      box-shadow: 0 22px 80px rgba(0, 0, 0, 0.22);
    }

    .hero-avatar-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transform: translate(-14px, -10px) rotate(0deg);
      transform-origin: center;
      filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.35));
    }

    .hero-title {
      margin: 0;
      font-size: clamp(44px, 6vw, 86px);
      font-weight: 800;
      line-height: 1.06;
      letter-spacing: 0.012em;
      text-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
    }

    .hero-subtitle {
      margin: 0;
      font-size: clamp(24px, 2.8vw, 46px);
      font-weight: 500;
      line-height: 1.15;
      color: rgba(255, 255, 255, 0.92);
    }

    .page-section {
      padding: 56px 0;
      scroll-margin-top: 110px;
    }

    .neo-card {
      background: var(--card-bg);
      border-radius: 34px;
      box-shadow: 8px 8px 24px var(--shadow-dark), -8px -8px 24px var(--shadow-light);
    }

    .info-card {
      max-width: 760px;
      margin: 0 auto;
      padding: 48px 28px;
      text-align: center;
    }

    .info-card h2,
    .info-card h3,
    .contact-title {
      margin: 0;
      color: var(--accent);
      font-size: clamp(36px, 4vw, 68px);
      font-weight: 800;
      line-height: 1.08;
    }

    .contact-title {
      display: block;
      max-width: 12ch;
      margin-inline: auto;
      text-wrap: balance;
    }

    .info-card p,
    .contact-subtitle,
    .contact-text,
    .contact-link {
      display: inline-block;
      text-decoration: none;
      word-break: break-word;
      margin-top: 18px;
      font-size: clamp(20px, 1.6vw, 28px);
      line-height: 1.45;
      color: #4f5862;
      max-width: 100%;
    }

    .contact-link:hover {
      color: var(--accent-dark);
    }

    .contact-subtitle {
      display: block;
      margin-top: 22px;
      line-height: 1.3;
    }

    .contact-card-label {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #8f96a0;
    }

    .contact-card-icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      background: linear-gradient(135deg, rgba(127, 115, 244, 0.14), rgba(255, 255, 255, 0.72));
      box-shadow: inset 1px 1px 0 rgba(255,255,255,0.7), 6px 6px 16px rgba(186, 196, 204, 0.35);
    }

    .contact-side {
      display: grid;
      gap: 24px;
    }

    .cta-row {
      display: flex;
      justify-content: center;
      margin: 30px 0 6px;
    }

    .btn-glow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border: none;
      border-radius: 999px;
      padding: 18px 44px;
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      background: linear-gradient(90deg, var(--accent-dark), #a491ff);
      box-shadow: 0 8px 18px rgba(125, 109, 245, 0.35), 0 0 30px rgba(255, 255, 255, 0.35);
      transition: transform 0.25s ease;
      cursor: pointer;
    }

    .btn-glow:hover {
      transform: translateY(-2px) scale(1.02);
    }

    .stack {
      display: grid;
      gap: 16px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 28px;
      margin-top: 48px;
    }

    .project-card {
      min-height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 24px;
      border: 1px solid rgba(255, 255, 255, 0.72);
      border-radius: 34px;
      background: repeating-linear-gradient(135deg, #e8edf1, #e8edf1 10px, #dde4e9 10px, #dde4e9 20px);
      box-shadow: 8px 8px 24px rgba(186, 196, 204, 0.55), -8px -8px 24px rgba(247, 250, 252, 0.85);
    }

    .project-card p {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.45;
      color: #516170;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(240px, 0.7fr);
      gap: 28px;
      align-items: stretch;
    }

    .contact-form {
      padding: 34px;
      height: 100%;
    }

    .custom-field {
      width: 100%;
      border: 0;
      min-height: 68px;
      border-radius: 22px;
      background: #e9edf1;
      padding: 18px 24px;
      font-size: 20px;
      color: #5e6670;
      box-shadow: inset 6px 6px 12px rgba(204, 212, 219, 0.9), inset -6px -6px 12px rgba(247, 250, 252, 0.95);
      outline: none;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .custom-field::placeholder {
      color: #a1a8b1;
    }

    .custom-field:focus {
      box-shadow: inset 5px 5px 10px rgba(204, 212, 219, 0.95), inset -5px -5px 10px rgba(247, 250, 252, 0.98), 0 0 0 3px rgba(127, 115, 244, 0.12);
    }

    textarea.custom-field {
      min-height: 180px;
      resize: vertical;
    }

    .contact-box {
      padding: 34px 28px;
      text-align: left;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      overflow: hidden;
      min-height: 220px;
    }

    .contact-box::before {
      content: '';
      position: absolute;
      inset: auto -40px -40px auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(127, 115, 244, 0.18) 0%, rgba(127, 115, 244, 0.04) 55%, transparent 70%);
      pointer-events: none;
    }

    .contact-box h4 {
      margin: 0;
      color: var(--accent);
      font-size: clamp(30px, 2.2vw, 44px);
      font-weight: 800;
      line-height: 1;
    }

    .contact-link {
      display: block;
      text-decoration: none;
      word-break: break-word;
    }

    @media (max-width: 991px) {
      .hero-avatar-wrap {
        width: 280px;
        height: 280px;
      }

      .hero-avatar {
        font-size: 140px;
      }

      .btn-glow {
        font-size: 22px;
        padding: 16px 34px;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }

      .contact-side {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .contact-grid .contact-form-wrap {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 767px) {
      .container {
        width: min(100%, calc(100% - 24px));
      }

      .top-bar {
        padding: 12px 0 18px;
      }

      .main-nav {
        gap: 8px;
      }

      .main-nav button {
        padding: 12px 10px;
        font-size: 14px;
      }

      .hero {
        min-height: auto;
        padding: 60px 16px 80px;
      }

      .hero-copy {
        gap: 10px;
      }

      .hero-avatar-wrap {
        width: 220px;
        height: 220px;
        margin-bottom: 40px;
      }

      .hero-avatar-img {
        transform: translate(-9px, -7px) rotate(0deg);
      }

      .hero-avatar {
        font-size: 110px;
      }

      .page-section {
        padding: 34px 0;
      }

      .info-card,
      .contact-form,
      .contact-box {
        padding-left: 20px;
        padding-right: 20px;
      }

      .projects-grid,
      .contact-grid,
      .contact-side {
        grid-template-columns: 1fr;
      }

      .project-card {
        min-height: 250px;
      }

      .btn-glow {
        width: 100%;
        max-width: 320px;
        font-size: 20px;
      }
    }
  `;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id === 'projects' ? 'portfolio' : id === 'contact-form' ? 'contact' : id);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    const sections = ['home', 'portfolio', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = 'home';

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Головна' },
    { id: 'portfolio', label: 'Портфоліо' },
    { id: 'contact', label: 'Контакти' },
  ];

  const projects = [1, 4, 2, 5, 3, 6];

  if (typeof window !== 'undefined') {
    console.assert(typeof scrollToSection === 'function', 'Expected navigation handler to exist');
    console.assert(navItems.length === 3, 'Expected 3 navigation buttons');
    console.assert(activeSection === 'home' || activeSection === 'portfolio' || activeSection === 'contact', 'Expected active section to be valid');
    console.assert(projects.length === 6, 'Expected 6 project cards');
    console.assert(!styles.includes('https://'), 'Expected no external network requests in styles');
    console.assert(styles.includes('.nav-icon'), 'Expected nav icon styles to exist');
    console.assert(styles.includes('.main-nav button.active .nav-icon'), 'Expected active nav icon highlight styles to exist');
    console.assert(styles.includes('.contact-side'), 'Expected redesigned contact side layout styles to exist');
    console.assert(styles.includes('.contact-card-icon'), 'Expected contact card icon styles to exist');
  }

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-site">
        <header className="top-bar">
          <div className="container">
            <div className="nav-shell">
              <nav className="main-nav">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="nav-label">
                      <span className="nav-icon" aria-hidden="true" />
                      <span>{item.label}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-inner container">
              <div className="hero-avatar-wrap">
                {avatarImage ? (
                <img
                  src={avatarImage}
                  alt="avatar"
                  className="hero-avatar-img"
                />
              ) : (
                <div style={{fontSize: "120px"}}>🧙</div>
              )}
              </div>
              <div className="hero-copy">
                <h1 className="hero-title">Привіт, я Віктор</h1>
                <p className="hero-subtitle">Мультимедіа-дизайнер</p>
              </div>
            </div>
          </section>

          <section className="page-section" id="portfolio">
            <div className="container">
              <div className="stack">
                <div className="neo-card info-card">
                  <h2>Відео, моушн, 3D, UI, анімація</h2>
                  <p>Створюю яскравий та незабутній візуальний контент</p>
                </div>

                <div className="cta-row">
                  <button type="button" className="btn-glow" onClick={() => scrollToSection('projects')}>
                    Подивитись роботи
                  </button>
                </div>

                <div className="neo-card info-card">
                  <h3>Мої роботи</h3>
                  <p>Ось кілька проектів, якими я особливо пишаюсь</p>
                </div>
              </div>

              <div className="projects-grid" id="projects">
                {projects.map((projectNumber) => (
                  <div className="project-card" key={projectNumber}>
                    <p>
                      Тут буде відео
                      <br />з проектом №{projectNumber}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          <section className="page-section" id="contact">
            <div className="container">
              <div className="stack">
                <div className="neo-card info-card">
                  <p className="contact-text" style={{ marginTop: 0 }}>Готовий показати ще більше — пиши!</p>
                  <div className="cta-row" style={{ marginTop: 24 }}>
                    <button type="button" className="btn-glow" onClick={() => scrollToSection('contact-form')}>
                      Обговорити проект
                    </button>
                  </div>
                </div>

                <div className="neo-card info-card">
                  <h3 className="contact-title">Зв’яжіться зі мною</h3>
                  <p className="contact-subtitle">Відповідаю максимально швидко</p>
                </div>
              </div>

              <div className="contact-grid" style={{ marginTop: 24 }}>
                <div className="contact-form-wrap" id="contact-form">
                  <form className="neo-card contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="stack">
                      <input type="text" className="custom-field" placeholder="Ваше ім’я" />
                      <input type="tel" className="custom-field" placeholder="Телефон" />
                      <input type="email" className="custom-field" placeholder="Email" />
                      <textarea className="custom-field" placeholder="Розкажіть про ваш проект" />
                    </div>
                    <div className="cta-row" style={{ marginTop: 24, justifyContent: 'flex-start' }}>
                      <button type="submit" className="btn-glow">Надіслати</button>
                    </div>
                  </form>
                </div>

                <div className="contact-side">
                  <div className="neo-card contact-box">
                    <div className="contact-card-label">
                      <span className="contact-card-icon" aria-hidden="true">✈</span>
                      <span>Швидкий зв’язок</span>
                    </div>
                    <h4 style={{ marginTop: 20 }}>Telegram</h4>
                    <a className="contact-link" href="https://t.me/Jefrrrro" target="_blank" rel="noreferrer">
                      @Jefrrrro
                    </a>
                  </div>

                  <div className="neo-card contact-box">
                    <div className="contact-card-label">
                      <span className="contact-card-icon" aria-hidden="true">✉</span>
                      <span>Пошта</span>
                    </div>
                    <h4 style={{ marginTop: 20 }}>Email</h4>
                    <a className="contact-link" href="mailto:viktorkravchenko06@gmail.com">
                      viktorkravchenko06@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}
