export function no_sidebar_pg() {
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
    <div class="overflow-auto p-4">
      <div class="grid gap-4 md:grid-cols-3">
        <div class="stats stats-vertical shadow md:col-span-3 md:stats-horizontal">
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

        <div class="stats stats-vertical shadow md:col-span-3 md:stats-horizontal">
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

                <div class="stats stats-vertical shadow md:col-span-3 md:stats-horizontal">
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

                <div class="stats stats-vertical shadow md:col-span-3 md:stats-horizontal">
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
  <div class="drawer-side z-40 h-full lg:z-30">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu hidden min-h-full w-80 bg-base-200 p-4 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

    `;
  }