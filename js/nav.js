// Inject shared nav and footer into every page
const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">RYDE<span>.</span>TOKYO</a>
  <ul class="nav-links">
    <li><a href="services.html">Services</a></li>
    <li><a href="bikes.html">Our Bikes</a></li>
    <li><a href="insurance.html">Insurance</a></li>
    <li><a href="rules.html">Road Rules</a></li>
    <li><a href="routes.html">Routes</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="booking.html" class="nav-cta">Book Now</a></li>
  </ul>
  <div class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo">RYDE<span style="color:#7ecf9a">.</span>TOKYO</a>
      <p>Premium e-bike rental delivered to your hotel door. Explore Tokyo at your own pace.</p>
    </div>
    <div class="footer-col">
      <h4>Explore</h4>
      <ul>
        <li><a href="services.html">Services & Pricing</a></li>
        <li><a href="bikes.html">Our Bikes</a></li>
        <li><a href="insurance.html">Insurance</a></li>
        <li><a href="routes.html">Tokyo Routes</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Info</h4>
      <ul>
        <li><a href="rules.html">Road Rules</a></li>
        <li><a href="booking.html">Book Now</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 RYDE TOKYO — operated by KUBOS K.K. All rights reserved.</p>
    <p>🇯🇵 Tokyo, Japan</p>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navContainer = document.getElementById('nav-placeholder');
  if (navContainer) navContainer.outerHTML = NAV_HTML;

  // Inject footer
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) footerContainer.outerHTML = FOOTER_HTML;
});
