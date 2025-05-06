export function sidebar_pg() {
    document.querySelector('#app').innerHTML = `
    <div class="drawer lg:drawer-open overflow-hidden h-screen w-screen" data-theme="forest">
  <!-- Toggle for mobile -->
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />

  <!-- Main page content -->
  <div class="drawer-content overflow-auto flex flex-col">
    
    <!-- Sticky Navbar (height = 4rem = 64px) -->
    <div class="navbar bg-base-300 sticky top-0 z-30 h-16 px-4">
      <div class="flex-none lg:hidden">
        <label for="my-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 text-xl">Telvy</div>
    </div>

    <!-- Scrollable main content -->
    <div class="overflow-auto p-4">
      <div class="grid md:grid-cols-3 gap-4">
        <div class="md:col-span-3 stats stats-vertical md:stats-horizontal shadow">
          
          <div class="stat">
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>

        <div class="md:col-span-3 stats stats-vertical md:stats-horizontal shadow">
          
          <div class="stat">
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>

        <div class="md:col-span-3 stats stats-vertical md:stats-horizontal shadow">
          
          <div class="stat">
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>

        <div class="md:col-span-3 stats stats-vertical md:stats-horizontal shadow">
          
          <div class="stat">
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>

        <div class="md:col-span-3 stats stats-vertical md:stats-horizontal shadow">
          
          <div class="stat">
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-title">Tasks done</div>
            <div class="stat-value">86%</div>
            <div class="stat-desc text-secondary">31 tasks remaining</div>
          </div>

        </div>

      </div>
    </div>
  </div>

  <!-- Sidebar for large screens -->
  <div class="drawer-side h-full z-40 lg:z-30">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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