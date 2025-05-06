export function home() {
  document.querySelector('#app').innerHTML = `
<div class="drawer lg:drawer-open h-screen w-screen" data-theme="forest">
  <!-- Toggle for mobile -->
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

  <!-- Main page content -->
  <div class="drawer-content flex flex-col h-full">
    <!-- Sticky Navbar -->
    <div class="navbar bg-base-300 sticky top-0 z-30 h-16 px-4">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
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
            ></path>
          </svg>
        </label>
      </div>
      <div class="mx-2 flex-1 text-xl">Telvy</div>
    </div>

    <!-- Scrollable main content -->
    <div class="flex-1 overflow-y-auto p-4">
      <!-- Your actual page content here -->
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
      </div>
    </div>
  </div>

  <!-- Sidebar for large screens -->
  <div class="drawer-side h-full">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>

  `;
}
