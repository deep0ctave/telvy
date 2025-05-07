export function test() {
  document.querySelector('#app').innerHTML = `
  <div class="drawer w-screen overflow-hidden lg:drawer-open" data-theme="forest">
    <!-- Toggle for mobile -->
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main page content -->
    <div class="drawer-content flex flex-col overflow-auto">
      <!-- Sticky Navbar -->
      <div class="sticky top-0 z-30 navbar h-16 bg-base-300 px-4">
        <div class="flex-none lg:hidden">
          <label for="my-drawer" aria-label="open sidebar" class="btn hidden btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 text-xl">Telvy</div>
      </div>

      <!-- Scrollable main content -->
      <div class="overflow-auto lg:px-50 lg:py-20 p-10 space-y-8">
        <h1 class="text-3xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p class="mb-4">
          Have a question, idea, or feedback? We'd love to hear from you. Use the form below or reach out through the provided channels.
        </p>

        <div class="grid lg:grid-cols-2 gap-10 py-8">
          <!-- Contact form using fieldset -->
          <form class="space-y-4">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-6">
              <legend class="fieldset-legend text-lg font-semibold">Send a Message</legend>

              <label class="label"><span class="label-text">Name</span></label>
              <input type="text" class="input input-bordered w-full" placeholder="   John Doe" />

              <label class="label"><span class="label-text">Email</span></label>
              <input type="email" class="input input-bordered w-full" placeholder="   you@example.com" />

              <label class="label"><span class="label-text">Message</span></label>
              <textarea class="textarea textarea-bordered w-full" placeholder="       Your message..."></textarea>

              <button class="btn btn-primary mt-4">Send Message</button>
            </fieldset>
          </form>

          <!-- Contact details -->
          <div class="space-y-2 p-6">
            <h2 class="text-2xl font-semibold">Reach Out</h2>
            <p><strong>Email:</strong> support@telvy.com</p>
            <p><strong>Phone:</strong> +1 123456789</p>
            <p><strong>Address:</strong><br/>123 Home,<br/> City</p>
            <p>We typically respond within 24 hours during business days.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side z-40 h-full lg:z-30">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu hidden min-h-full w-80 bg-base-200 p-4 text-base-content">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
    <nav>
      <h6 class="footer-title">Services</h6>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 class="footer-title">Company</h6>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 class="footer-title">Legal</h6>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  `;
}
