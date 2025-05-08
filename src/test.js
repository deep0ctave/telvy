export function test() {
  document.querySelector('#app').innerHTML = `
  <div class="drawer lg:drawer-open overflow-hidden h-screen w-screen" data-theme="abyss">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content overflow-auto flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-300 sticky top-0 z-30 h-16 px-4">
        <div class="flex-none lg:hidden">
          <label for="my-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <div class="mx-2 flex-1 text-xl font-bold lg:hidden">Telvy</div>
        <div class="flex-none flex items-center gap-2 ml-auto">
          <!-- Theme toggle and language switch (same as before) -->
        </div>
      </div>

      <!-- Header Section -->
      <div class="bg-gradient-to-r from-info to-primary text-primary-content py-16 px-6">
        <h1 class="text-5xl font-extrabold mb-4">Notifications & Alerts</h1>
        <p class="max-w-2xl text-lg">Review your most recent alerts and general notifications in one place.</p>
      </div>

      <!-- Alerts Grid -->
      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Alerts</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="card bg-error text-error-content shadow">
            <div class="card-body">
              <h3 class="card-title">Quiz Deadline Approaching</h3>
              <p>Your Science quiz is due in 3 hours. Don’t miss it!</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-light">Open Quiz</button>
              </div>
            </div>
          </div>
          <div class="card bg-warning text-warning-content shadow">
            <div class="card-body">
              <h3 class="card-title">New Group Challenge</h3>
              <p>Your team has been challenged in the weekly leaderboard.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-light">View Challenge</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications Grid -->
      <div class="p-6">
        <h2 class="text-2xl font-semibold mb-4">Notifications</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div class="card bg-base-200 shadow">
            <div class="card-body">
              <h3 class="card-title">New Quiz Assigned</h3>
              <p>A new quiz has been assigned in your Math group.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-primary">Start</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-200 shadow">
            <div class="card-body">
              <h3 class="card-title">Streak Milestone</h3>
              <p>You’ve maintained a 5-day quiz streak. Keep it up!</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-success">Celebrate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side h-full z-40 lg:z-30">
      <label for="my-drawer" class="drawer-overlay"></label>
      <div class="bg-base-300 navbar sticky top-0 z-20 hidden items-center gap-2 px-4 py-0 backdrop-blur flex-1 text-xl font-bold lg:flex"><h1>Telvy</h1></div>
      <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
        <li><a>Home</a></li>
        <li><a>Quizzes</a></li>
        <li><a>Groups</a></li>
        <li><a class="active">Notifications</a></li>
        <li><a>Settings</a></li>
        <li><a>Help & Feedback</a></li>
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
