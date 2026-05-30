/**
 * SEGGC Component Loader
 * ----------------------
 * This file is the core of Approach B (smart architecture).
 *
 * WHY THIS EXISTS:
 * Without a backend or build tool, every HTML page had its own copy of the
 * navbar and footer. Change one link and you'd have to edit 8+ files manually.
 * This script injects the navbar and footer from one central place so you only
 * ever maintain them in ONE spot: the strings below.
 *
 * HOW IT WORKS:
 * 1. The browser loads any page.
 * 2. This script runs and finds <div id="navbar-placeholder"> and <div id="footer-placeholder">.
 * 3. It replaces those divs with the shared HTML below.
 * 4. It then auto-highlights the correct nav link based on the current page URL.
 *
 * TO UPDATE NAV/FOOTER: Edit the template strings below. Done.
 * TO ADD A PAGE: Add a link in the NAV_LINKS array + an <li> in the HTML below.
 */

// ─── NAV CONFIGURATION ────────────────────────────────────────────────────────
// Each entry maps a URL fragment to a nav label.
// "active" class is applied automatically to the matching link.
const NAV_LINKS = [
  { href: "about.html",   label: "About Us" },
  { href: "service.html", label: "The Mandate" },
  { href: "family.html",  label: "Christian Family" },
  { href: "media.html",   label: "Media" },
  { href: "downloads.html", label: "Downloads" },
  { href: "contact.html", label: "Contact Us" },
  { href: "give.html",    label: "Give Online" },
];

// ─── SHARED NAVBAR HTML ───────────────────────────────────────────────────────
function buildNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const links = NAV_LINKS.map(({ href, label }) => {
    const isActive = currentPage === href ? "active" : "";
    return `<a href="${href}" class="nav-item nav-link ${isActive}">${label}</a>`;
  }).join("\n");

  return `
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-dark px-lg-5">
      <a href="index.html" class="navbar-brand d-flex align-items-center text-wrap custom-nav-brand ms-4 ms-lg-0">
        <img src="img/LOGO.png" width="72" height="72" class="me-2" alt="SEGGC Logo">
        <span class="fw-bold lh-sm fs-6">STRENGTH EMBASSY GLOBAL GOSPEL CENTRE <span class="d-block text-primary" style="font-size:0.75em;">(BLESSED NATION)</span></span>
      </a>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          ${links}
        </div>
      </div>
    </nav>
  </div>`;
}

// ─── SHARED FOOTER HTML ───────────────────────────────────────────────────────
function buildFooter() {
  return `
  <div class="container-fluid bg-dark text-light py-5">
    <div class="container">
      <div class="row g-4">

        <!-- Brand & Mission -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center mb-3">
            <img src="img/LOGO.png" width="56" height="56" class="me-3" alt="SEGGC Logo">
            <span class="fw-bold text-white lh-sm">STRENGTH EMBASSY<br><span class="text-primary">GLOBAL GOSPEL CENTRE</span></span>
          </div>
          <p class="text-secondary small lh-lg">
            Raising a people of power, purpose, purity and influence — carrying the gospel of Christ to the nations.
          </p>
          <div class="d-flex gap-2 mt-3">
            <a class="btn btn-sm btn-outline-primary border-2" href="#!" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
            <a class="btn btn-sm btn-outline-primary border-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-sm btn-outline-primary border-2" href="#!" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a class="btn btn-sm btn-outline-primary border-2" href="#!" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="text-white text-uppercase fw-bold mb-3 border-bottom border-primary pb-2">Quick Links</h6>
          <ul class="list-unstyled small">
            <li class="mb-2"><a href="about.html" class="text-secondary text-decoration-none hover-primary">About Us</a></li>
            <li class="mb-2"><a href="service.html" class="text-secondary text-decoration-none">The Mandate</a></li>
            <li class="mb-2"><a href="family.html" class="text-secondary text-decoration-none">Christian Family</a></li>
            <li class="mb-2"><a href="media.html" class="text-secondary text-decoration-none">Media</a></li>
            <li class="mb-2"><a href="contact.html" class="text-secondary text-decoration-none">Contact Us</a></li>
            <li class="mb-2"><a href="give.html" class="text-secondary text-decoration-none">Give Online</a></li>
          </ul>
        </div>

        <!-- Service Times -->
        <div class="col-lg-3 col-md-6 col-6">
          <h6 class="text-white text-uppercase fw-bold mb-3 border-bottom border-primary pb-2">Service Times</h6>
          <ul class="list-unstyled small text-secondary">
            <li class="mb-2"><i class="bi bi-calendar-event text-primary me-2"></i>Sunday Worship — 9:00 AM</li>
            <li class="mb-2"><i class="bi bi-calendar-event text-primary me-2"></i>Midweek Service — Wednesday 5:00 PM</li>
            <li class="mb-2"><i class="bi bi-calendar-event text-primary me-2"></i>Prayer Meeting — Friday 6:00 PM</li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-white text-uppercase fw-bold mb-3 border-bottom border-primary pb-2">Contact</h6>
          <ul class="list-unstyled small text-secondary">
            <li class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Abuja, Nigeria</li>
            <li class="mb-2"><i class="bi bi-envelope text-primary me-2"></i>info@seggc.org</li>
            <li class="mb-2"><i class="bi bi-telephone text-primary me-2"></i>+234 (0) 800 000 0000</li>
            <li class="mt-3">
              <a href="give.html" class="btn btn-primary btn-sm px-3">Give Online</a>
              <a href="contact.html" class="btn btn-outline-light btn-sm px-3 ms-1">Contact Us</a>
            </li>
          </ul>
        </div>

      </div>

      <hr class="border-secondary mt-4">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary small">
        <p class="mb-0">&copy; <span id="footer-year"></span> Strength Embassy Global Gospel Centre. All Rights Reserved.</p>
        <p class="mb-0 mt-2 mt-md-0">Designed with <i class="bi bi-heart-fill text-primary"></i> for the Kingdom</p>
      </div>
    </div>
  </div>`;
}

// ─── INJECT COMPONENTS ────────────────────────────────────────────────────────
// Runs after DOM is ready. Finds placeholders and replaces them with HTML above.
document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("navbar-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (navPlaceholder) navPlaceholder.outerHTML = buildNavbar();
  if (footerPlaceholder) footerPlaceholder.outerHTML = buildFooter();

  // Set footer year dynamically so it never needs updating
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
/**
 * components.js — Strength Embassy Global Gospel Centre
 * -------------------------------------------------------
 * Injects the shared navbar into every page that has
 * <div id="navbar-placeholder"></div>
 *
 * TO UPDATE THE NAVBAR: edit the HTML string inside NAVBAR_HTML below.
 * Every page will reflect the change automatically — no need to touch
 * individual HTML files.
 *
 * ACTIVE LINK DETECTION: the script compares each nav link's href
 * against the current page filename and adds the "active" class
 * automatically, so you never need to manage that manually either.
 */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════
     SHARED NAVBAR — edit once, updates everywhere
  ═══════════════════════════════════════════════════════════════ */
  var NAVBAR_HTML = `
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark px-lg-5">
        <a href="index.html" class="navbar-brand d-flex align-items-center text-wrap custom-nav-brand ms-4 ms-lg-0 size">
          <img src="img/LOGO.png" width="80" height="80" class="me-2" alt="SEGGC Logo">
          <span class="fw-bold lh-sm fs-6">STRENGTH EMBASSY GLOBAL GOSPEL CENTRE (BLESSED NATION)</span>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="about.html"     class="nav-item nav-link" data-page="about.html">About Us</a>
            <a href="service.html"   class="nav-item nav-link" data-page="service.html">The Mandate</a>
            <a href="family.html"    class="nav-item nav-link" data-page="family.html">Christian Family</a>
            <a href="media.html"     class="nav-item nav-link" data-page="media.html">Media</a>
            <a href="downloads.html" class="nav-item nav-link" data-page="downloads.html">Downloads</a>
            <a href="contact.html"   class="nav-item nav-link" data-page="contact.html">Contact Us</a>
            <a href="give.html"      class="nav-item nav-link" data-page="give.html">Give Online</a>
          </div>
        </div>
      </nav>
    </div>
  `;

  /* ═══════════════════════════════════════════════════════════════
     INJECT + HIGHLIGHT ACTIVE LINK
  ═══════════════════════════════════════════════════════════════ */
  function inject() {
    var placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) return; // page doesn't use shared nav

    placeholder.innerHTML = NAVBAR_HTML;

    // Determine current page filename (e.g. "about.html")
    var path     = window.location.pathname;
    var segments = path.split('/');
    var page     = segments[segments.length - 1] || 'index.html';

    // Add "active" class to the matching link
    placeholder.querySelectorAll('a[data-page]').forEach(function (link) {
      if (link.getAttribute('data-page') === page) {
        link.classList.add('active');
      }
    });
  }

  // Run as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
