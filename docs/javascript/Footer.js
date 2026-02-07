const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="relative overflow-hidden bg-black text-white">
  <div class="pointer-events-none absolute inset-0">
    <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
    <div class="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

    <div class="absolute inset-0 opacity-[0.22]">
      <div class="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10"></div>
      <div class="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10"></div>
      <div class="absolute left-1/4 top-0 h-full w-px bg-white/10"></div>
      <div class="absolute left-3/4 top-0 h-full w-px bg-white/10"></div>
      <div class="absolute left-0 top-1/4 h-px w-full bg-white/10"></div>
      <div class="absolute left-0 top-3/4 h-px w-full bg-white/10"></div>
    </div>
  </div>

  <div class="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
    <div class="grid gap-6 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <a href="#" class="flex items-center gap-3">
           <a href="#top" class="flex items-center gap-3">
              <img src="/docs/assets/logo.png" alt="RideXGo" class="h-9" />
            </a>
        </a>

        <p class="mt-4 max-w-md text-sm leading-relaxed text-white/70">
          Join our taxi park and start driving with clear onboarding and real support.
          Pick your city, submit your details, and get ready to take rides.
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
          <a href="#cities" class="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black shadow-sm active:scale-[0.98]">
            <i class="fa-solid fa-user-plus"></i>
            Register
          </a>
          <a href="#contact" class="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white shadow-sm active:scale-[0.98]">
            <i class="fa-brands fa-whatsapp text-yellow-400"></i>
            WhatsApp
          </a>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div class="rounded-[22px] border border-white/10 bg-white/5 p-4">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-black">
                <i class="fa-solid fa-phone"></i>
              </span>
              <div>
                <div class="text-xs font-semibold text-white/70">Phone</div>
                <a href="tel:+11234567890" class="text-sm font-extrabold text-white hover:text-yellow-300">
                  (+1) 123 4567 890
                </a>
              </div>
            </div>
          </div>

          <div class="rounded-[22px] border border-white/10 bg-white/5 p-4">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-2xl bg-yellow-400 text-black">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <div>
                <div class="text-xs font-semibold text-white/70">Email</div>
                <a href="mailto:support@ridexgo.com" class="text-sm font-extrabold text-white hover:text-yellow-300">
                  support@ridexgo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center gap-2">
          <a href="#" class="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black active:scale-[0.98]" aria-label="Facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black active:scale-[0.98]" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black active:scale-[0.98]" aria-label="TikTok">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="#" class="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white hover:bg-yellow-400 hover:text-black active:scale-[0.98]" aria-label="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-7">
        <div class="grid gap-6 items-start sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div class="text-sm font-extrabold text-white">Quick links</div>
            <div class="mt-4 grid gap-2 text-sm">
              <a href="#cities" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-location-dot text-yellow-400"></i>
                  Cities
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
              <a href="#about" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-shield-halved text-yellow-400"></i>
                  About
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
              <a href="#how" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-list-check text-yellow-400"></i>
                  How to join
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
              <a href="#testimonials" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-star text-yellow-400"></i>
                  Testimonials
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
              <a href="#faq" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-circle-question text-yellow-400"></i>
                  FAQ
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
              <a href="#contact" class="group flex items-center justify-between rounded-2xl bg-white/0 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                <span class="inline-flex items-center gap-2">
                  <i class="fa-solid fa-envelope text-yellow-400"></i>
                  Contact
                </span>
                <i class="fa-solid fa-arrow-right text-white/30 group-hover:text-white"></i>
              </a>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div class="text-sm font-extrabold text-white">Service areas</div>
            <div class="mt-4 grid gap-2 text-sm">
              <div class="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/85">
                  <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                  Adana
                </span>
                <a href="#cities" class="text-xs font-extrabold text-yellow-300 hover:text-yellow-200">Apply</a>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/85">
                  <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                  Antalya
                </span>
                <a href="#cities" class="text-xs font-extrabold text-yellow-300 hover:text-yellow-200">Apply</a>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/85">
                  <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                  Ankara
                </span>
                <a href="#cities" class="text-xs font-extrabold text-yellow-300 hover:text-yellow-200">Apply</a>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/85">
                  <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                  İzmir
                </span>
                <a href="#cities" class="text-xs font-extrabold text-yellow-300 hover:text-yellow-200">Apply</a>
              </div>
              <div class="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/85">
                  <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
                  Mersin
                </span>
                <a href="#cities" class="text-xs font-extrabold text-yellow-300 hover:text-yellow-200">Apply</a>
              </div>
              <div class="flex items-center justify-between rounded-2xl border border-dashed border-white/15 bg-white/0 px-3 py-2">
                <span class="inline-flex items-center gap-2 text-white/70">
                  <span class="h-2 w-2 rounded-full bg-white/30"></span>
                  İstanbul
                </span>
                <span class="text-xs font-extrabold text-white/50">Soon</span>
              </div>
            </div>
          </div>

          <div class="mt-2 rounded-2xl bg-white p-4 text-black">
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-start w-full gap-3 flex-col items-center justify-center">
                    <div class="flex w-full gap-3 items-center justify-between">
                      <span class="grid h-10 w-10 place-items-center shrink-0 rounded-2xl bg-black text-white">
                        <i class="fa-solid fa-bolt"></i>
                      </span>
                      <a href="#cities" class="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-extrabold text-white active:scale-[0.98]">
                        <i class="fa-solid fa-arrow-right text-yellow-400"></i>
                        Go
                      </a>
                    </div>
                    <div>
                      <div class="text-xs font-semibold text-black/70">Start now</div>
                      <div class="text-sm font-extrabold">Register in your city</div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>

    <div class="mt-10 h-px w-full bg-white/10"></div>

    <div class="flex flex-col gap-3 py-6 text-sm text-center text-white/60 justify-center">
      <div>
        © <span id="rx-year"></span> RideXGo. All rights reserved.
      </div>

    </div>
  </div>

  <script>
    (function () {
      const y = document.getElementById("rx-year");
      if (y) y.textContent = new Date().getFullYear();
    })();
  </script>
</footer>


`