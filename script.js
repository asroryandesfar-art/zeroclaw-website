(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  if (menuButton && navigation) {
    const closeMenu = () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Contact Sales: every [data-sales] link opens the configured official
  // contact. Until one is configured they point to #contact, which says so.
  const salesContact = window.ZEROCLAW_SITE_CONFIG?.salesContact;
  let salesHref = null;
  if (typeof salesContact === "string" && salesContact.trim()) {
    try {
      const url = new URL(salesContact.trim());
      const isMail = url.protocol === "mailto:" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(decodeURIComponent(url.pathname));
      const isWeb = url.protocol === "https:" && !url.username && !url.password;
      if (isMail || isWeb) salesHref = url.href;
    } catch {
      // An invalid value keeps the "being set up" message.
    }
  }
  if (salesHref) {
    document.querySelectorAll("[data-sales]").forEach((link) => {
      link.href = salesHref;
      if (salesHref.startsWith("https:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.hidden = false;
    });
    const note = document.querySelector("[data-sales-note]");
    if (note) note.textContent = "Tell us your name and company. We will confirm your order and how to pay. No payment is taken on this website.";
  }

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -24px 0px", threshold: 0.04 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-enabled");
  }
})();
