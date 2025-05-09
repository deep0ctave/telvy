export function test() {
  document.querySelector('#app').innerHTML = `
  <div class="drawer lg:drawer-open overflow-hidden h-screen w-screen" data-theme="abyss">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content overflow-auto flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-300 sticky top-0 z-30 h-16 px-4">
        <div class="mx-2 flex-1 text-xl font-bold">Quiz In Progress</div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-6 max-w-3xl mx-auto w-full space-y-6">

        <!-- Progress + Counter -->
        <div class="flex items-center gap-4">
          <progress class="progress progress-primary flex-1 h-3" value="3" max="10"></progress>
          <span class="text-sm font-bold text-base-content">3 / 10</span>
        </div>

        <!-- Question Card -->
        <div class="card bg-base-200 shadow-md">
          <div class="card-body">
            <h2 class="card-title text-lg leading-snug">What is the unit of electric current?</h2>
            <p class="text-sm text-base-content/70">Choose the correct option from below.</p>
          </div>
        </div>

        <!-- Options Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button class="btn btn-outline justify-start text-left text-base">
            <span class="font-bold mr-2">A</span> Ampere
          </button>
          <button class="btn btn-outline justify-start text-left text-base">
            <span class="font-bold mr-2">B</span> Volt
          </button>
          <button class="btn btn-outline justify-start text-left text-base">
            <span class="font-bold mr-2">C</span> Ohm
          </button>
          <button class="btn btn-outline justify-start text-left text-base">
            <span class="font-bold mr-2">D</span> Watt
          </button>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between items-center pt-6">
          <button class="btn btn-ghost">← Previous</button>
          <button class="btn btn-primary">Next →</button>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side h-full z-40 lg:z-30">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
        <li><a>Home</a></li>
        <li><a class="active">Quizzes</a></li>
        <li><a>Groups</a></li>
        <li><a>Notifications</a></li>
        <li><a>Settings</a></li>
      </ul>
    </div>
  </div>
  `;
}
