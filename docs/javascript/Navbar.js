const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header data-aos="fade-in" id="rx-header" class="fixed w-full top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur transition-colors duration-300 ease-out">
  <nav class="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8" aria-label="Main navigation">
    <div class="flex items-center justify-between gap-3">
      <a href="#top" class="flex items-center gap-3">
        <img src="/docs/assets/logo.png" alt="RideXGo" class="h-9" />
      </a>

      <div class="hidden items-center gap-2 md:flex">
        <a href="#cities" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          Cities
        </a>
        <a href="#about" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          About
        </a>
        <a href="#how" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          How to join
        </a>
        <a href="#testimonials" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          Testimonials
        </a>
        <a href="#faq" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          FAQ
        </a>
        <a href="#contact" class="rounded-2xl px-3 py-2 text-sm font-extrabold text-white/75 hover:text-white hover:bg-white/[0.06]">
          Contact
        </a>

        <a href="#cities" class="ml-2 inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-extrabold text-black shadow-[0_0_22px_rgba(250,204,21,0.20)] active:scale-[0.98]">
          <i class="fa-solid fa-user-plus"></i>
          Join
        </a>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white shadow-sm active:scale-[0.98] md:hidden"
        aria-controls="rx-mobile-menu"
        aria-expanded="false"
        id="rx-menu-btn"
      >
        <span class="sr-only">Open menu</span>
        <i class="fa-solid fa-bars text-lg"></i>
      </button>
    </div>

    <div
      id="rx-mobile-menu"
      class="md:hidden overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity] duration-300 ease-out"
      aria-hidden="true"
    >
      <div class="mt-3 rounded-[22px] border border-white/10 bg-black/70 p-3 shadow-sm backdrop-blur">
        <div class="grid gap-1">
          <a href="#cities" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-location-dot mr-2 text-yellow-400"></i> Cities
          </a>
          <a href="#about" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-shield-halved mr-2 text-yellow-400"></i> About
          </a>
          <a href="#how" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-list-check mr-2 text-yellow-400"></i> How to join
          </a>
          <a href="#testimonials" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-star mr-2 text-yellow-400"></i> Testimonials
          </a>
          <a href="#faq" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-circle-question mr-2 text-yellow-400"></i> FAQ
          </a>
          <a href="#contact" class="rx-navlink rounded-2xl px-3 py-3 text-sm font-extrabold text-white/85 hover:bg-white/[0.06]">
            <i class="fa-solid fa-envelope mr-2 text-yellow-400"></i> Contact
          </a>

          <a href="#cities" class="rx-navlink mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-4 py-3 text-sm font-extrabold text-black shadow-[0_0_22px_rgba(250,204,21,0.20)] active:scale-[0.98]">
            <i class="fa-solid fa-user-plus"></i>
            Register now
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
`;

(function () {
  document.documentElement.style.scrollBehavior = "smooth";

  const header = document.getElementById("rx-header");
  const btn = document.getElementById("rx-menu-btn");
  const menu = document.getElementById("rx-mobile-menu");
  if (!btn || !menu || !header) return;

  const icon = btn.querySelector("i");
  const links = Array.from(menu.querySelectorAll(".rx-navlink"));

  function setHeaderBg() {
    const scrolled = window.scrollY > 8;
    header.classList.toggle("bg-transparent", !scrolled);
    header.classList.toggle("bg-black/80", scrolled);
  }

  function openMenu() {
    menu.classList.remove("max-h-0", "opacity-0");
    menu.classList.add("max-h-[520px]", "opacity-100");
    menu.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    if (icon) icon.className = "fa-solid fa-xmark text-lg";
  }

  function closeMenu() {
    menu.classList.add("max-h-0", "opacity-0");
    menu.classList.remove("max-h-[520px]", "opacity-100");
    menu.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    if (icon) icon.className = "fa-solid fa-bars text-lg";
  }

  function toggleMenu() {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  }

  btn.addEventListener("click", toggleMenu);
  links.forEach((a) => a.addEventListener("click", closeMenu));

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  setHeaderBg();
  window.addEventListener("scroll", setHeaderBg, { passive: true });
})();
