export function test() {
  document.querySelector('#app').innerHTML = `
  <div class="drawer lg:drawer-open overflow-hidden h-screen w-screen" data-theme="forest">
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
      </div>

      <!-- Main Content -->
      <div class="flex-1 p-10 flex justify-center items-center">
        <div class="card w-full max-w-2xl bg-base-200 shadow-xl p-10">
          <div class="card-body">
            <h1 class="card-title text-3xl font-bold mb-2">Basics of Electricity</h1>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="badge badge-info">Science</span>
              <span class="badge badge-outline">10 Questions</span>
              <span class="badge badge-outline">15 min</span>
              <span class="badge badge-success">Completed</span>
            </div>

            <p class="text-base opacity-80 mb-4">
              This quiz covered fundamentals of electric circuits, voltage, resistance, and basic safety. Great for beginners looking to build a solid foundation in physics.
            </p>

            <div class="card-actions justify-end gap-2">
              <button class="btn btn-outline btn-primary">Review Answers</button>
              <button class="btn btn-accent">Retake Quiz</button>
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
        <li><a class="active">Quizzes</a></li>
        <li><a>Groups</a></li>
        <li><a>Notifications</a></li>
        <li><a>Settings</a></li>
        <li><a>Help & Feedback</a></li>
      </ul>
    </div>
  </div>
  `;
}
