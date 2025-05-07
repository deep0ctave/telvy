export function test() {
    document.querySelector('#app').innerHTML = `
<div class="drawer h-screen w-screen overflow-hidden lg:drawer-open" data-theme="forest">
  <!-- Toggle for mobile -->
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />

  <!-- Main page content -->
  <div class="drawer-content flex flex-col overflow-auto">
    <!-- Sticky Navbar (height = 4rem = 64px) -->
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
    <div class="overflow-auto">

            <div class="hero bg-base-200" style="min-height: 90vh;">
      <div class="hero-content flex-col lg:flex-row-reverse gap-8">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login Now!</h1>
          <p class="py-2">
            Just a step away from your next <strong>BIG</strong> question.
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div class="card-body">
            <fieldset class="fieldset">
              <label class="label">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="label">Password</label>
              <input type="password" class="input" placeholder="Password" />
              <div class="flex justify-between mt-4">
              <a class="link link-hover ml-2">Forgot password?</a>
              <a class="link link-hover mr-2">Register</a>
              </div>
              <button class="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>


    </div>
  </div>

  <!-- Sidebar for large screens -->
  <div class="drawer-side z-40 h-full lg:z-30">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu hidden min-h-full w-80 bg-base-200 p-4 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

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
  