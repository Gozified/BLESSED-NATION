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
