import React from "react";

function MainFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="contact-block">
        <p className="eyebrow">Let’s work together</p>
        <h2>Have a project in mind?</h2>
        <a className="contact-email" href="mailto:xuanphiart@gmail.com">xuanphiart@gmail.com <span aria-hidden="true">↗</span></a>
        <p>Tell me what you’re working on.</p>
      </div>
      <div className="footer-meta"><span>© {new Date().getFullYear()} Phi Nguyen</span><a href="/Phi Nguyen_Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé (PDF) ↗</a></div>
    </footer>
  );
}
export default MainFooter;
