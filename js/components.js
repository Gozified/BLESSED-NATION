/**
 * components.js — Strength Embassy Global Gospel Centre
 * ═══════════════════════════════════════════════════════════════
 * 
 * Injects the shared navbar + footer into every page.
 * EDIT ONCE HERE → Updates everywhere automatically.
 */

(function () {
  'use strict';

  var NAVBAR_HTML = `
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark px-lg-5 px-3 navbar-scroll" style="background-color: transparent; transition: background-color 0.3s ease;">
        <!-- Logo + Brand (Hidden on mobile) -->
        <a href="index.html" class="navbar-brand d-flex align-items-center text-wrap custom-nav-brand ms-4 ms-lg-0 d-none d-lg-flex">
          <img src="img/LOGO.png" width="72" height="72" class="me-2" alt="SEGGC Logo">
          <span class="fw-bold lh-sm fs-6">STRENGTH EMBASSY GLOBAL GOSPEL CENTRE <span class="d-block text-primary" style="font-size:0.75em;">(BLESSED NATION)</span></span>
        </a>

        <!-- Mobile Brand (Logo only, shown on mobile) -->
        <a href="index.html" class="navbar-brand d-lg-none">
          <img src="img/LOGO.png" width="48" height="48" alt="SEGGC Logo">
        </a>

        <!-- Mobile Toggler -->
        <button type="button" class="navbar-toggler border-0 ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Nav Links -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0" style="position: fixed; right: 0; width: auto; background-color: transparent; z-index: 1050;">
            <a href="about.html" class="nav-item nav-link" data-page="about.html">About Us</a>
            <a href="service.html" class="nav-item nav-link" data-page="service.html">The Mandate</a>
            <a href="family.html" class="nav-item nav-link" data-page="family.html">Christian Family</a>
            <a href="media.html" class="nav-item nav-link" data-page="media.html">Media</a>
            <a href="downloads.html" class="nav-item nav-link" data-page="downloads.html">Downloads</a>
            <a href="contact.html" class="nav-item nav-link" data-page="contact.html">Contact Us</a>
            <a href="give.html" class="nav-item nav-link" data-page="give.html">Give Online</a>
          </div>
        </div>
      </nav>
    </div>
  `;

  var FOOTER_HTML = `
    <div class="container-fluid bg-dark text-light footer py-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container text-center py-5">
        <a href="index.html">
          <h1 class="display-4 mb-3 text-white text-uppercase">
            <img src="img/LOGO.png" width="80" height="80" alt="SEGGC Logo" style="object-fit: contain;">
            <span style="font-size: 1.5rem; letter-spacing: 0.05em;">STRENGTH EMBASSY</span><br>
            <span class="text-primary" style="font-size: 1.5rem; letter-spacing: 0.05em;">GLOBAL GOSPEL CENTRE</span>
          </h1>
        </a>
        <div class="d-flex justify-content-center mb-4 gap-2">
          <a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="https://www.youtube.com/@seggc" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="https://facebook.com/seggc" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="https://instagram.com/seggc" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a class="btn btn-lg-square btn-outline-primary border-2 m-1" href="https://twitter.com/seggc" target="_blank" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        </div>
        <p>&copy; <span id="footer-year"></span> Strength Embassy Global<br>Gospel Centre</p>
        <p class="mb-0 small text-secondary">Raising a people of power, purpose, purity and influence</p>
      </div>
    </div>
  `;

  function inject() {
    // Inject navbar
    var nav = document.getElementById('navbar-placeholder');
    if (nav) {
      nav.innerHTML = NAVBAR_HTML;
      
      // Set active link
      var path = window.location.pathname;
      var page = path.split('/').pop() || 'index.html';
      if (!page || page === '/') page = 'index.html';
      
      document.querySelectorAll('a[data-page]').forEach(function(link) {
        if (link.getAttribute('data-page') === page) {
          link.classList.add('active');
          link.style.color = 'var(--bs-primary)';
          link.style.fontWeight = '700';
        }
      });
    }

    // Inject footer
    var footer = document.getElementById('footer-placeholder');
    if (footer) {
      footer.innerHTML = FOOTER_HTML;
      var yearEl = document.getElementById('footer-year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    }
  }

  function setupScrollEffect() {
    var navbar = document.querySelector('.navbar-scroll');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        // User scrolled down — add dark background
        navbar.style.backgroundColor = '#0d0d0d';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
      } else {
        // User at top — transparent background
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  function setupMobileMenu() {
    var navbarCollapse = document.getElementById('navbarCollapse');
    if (!navbarCollapse) return;

    // Close menu when a link is clicked
    var navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var bsCollapse = new (window.bootstrap || {}).Collapse(navbarCollapse, {
          toggle: false
        });
        if (bsCollapse && bsCollapse.hide) {
          bsCollapse.hide();
        } else {
          navbarCollapse.classList.remove('show');
        }
      });
    });

    // Add mobile menu styling on collapse
    var navContainer = navbarCollapse.querySelector('.navbar-nav');
    if (navContainer && window.innerWidth < 992) {
      navContainer.style.backgroundColor = '#0d0d0d';
      navContainer.style.borderRadius = '0';
      navContainer.style.padding = '12px 16px';
      navContainer.style.position = 'fixed';
      navContainer.style.top = '60px';
      navContainer.style.right = '0';
      navContainer.style.left = 'auto';
      navContainer.style.width = 'auto';
      navContainer.style.flexDirection = 'column';
      navContainer.style.zIndex = '1050';
    }
  }

  // Run injection
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      inject();
      setTimeout(function() {
        setupScrollEffect();
        setupMobileMenu();
      }, 100);
    });
  } else {
    inject();
    setupScrollEffect();
    setupMobileMenu();
  }

})();
