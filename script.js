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

  const checkoutButton = document.querySelector("[data-checkout]");
  const checkoutCaption = document.querySelector("[data-checkout-caption]");
  const configuredUrl = window.ZEROCLAW_SITE_CONFIG?.checkoutUrl;
  if (checkoutButton && typeof configuredUrl === "string" && configuredUrl.trim()) {
    try {
      const url = new URL(configuredUrl);
      const officialHost = url.hostname === "lemonsqueezy.com" || url.hostname.endsWith(".lemonsqueezy.com");
      if (url.protocol === "https:" && officialHost && !url.username && !url.password) {
        const link = document.createElement("a");
        link.className = checkoutButton.className;
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Buy lifetime license ↗";
        checkoutButton.replaceWith(link);
        if (checkoutCaption) checkoutCaption.textContent = "Secure checkout opens on Lemon Squeezy.";
      }
    } catch {
      // An invalid URL leaves the checkout visibly unavailable.
    }
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
