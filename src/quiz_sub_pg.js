export function completedQuizzesPage() {
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
  
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-accent to-primary text-primary-content px-10 py-12">
          <h1 class="text-5xl font-extrabold">Completed Quizzes</h1>
          <p class="mt-4 max-w-2xl text-base opacity-90">
            Here are all the quizzes you've finished. Click on any to view details, review your answers, and learn from feedback.
          </p>
        </div>
  
        <!-- Quiz Cards -->
        <div class="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Example Quiz Card -->
          <div class="card bg-base-200 shadow hover:shadow-lg transition cursor-pointer">
            <div class="card-body">
              <h2 class="card-title">Basics of Electricity</h2>
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-info">Science</span>
                <span class="badge badge-outline">10 Questions</span>
                <span class="badge badge-outline">15 min</span>
              </div>
              <p class="mt-2 text-sm">You scored 8/10. Great job! Review available.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-primary">View</button>
              </div>
            </div>
          </div>
  
          <div class="card bg-base-200 shadow hover:shadow-lg transition cursor-pointer">
            <div class="card-body">
              <h2 class="card-title">World War II Overview</h2>
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-warning">History</span>
                <span class="badge badge-outline">12 Questions</span>
                <span class="badge badge-outline">20 min</span>
              </div>
              <p class="mt-2 text-sm">You scored 9/12. Feedback available.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-primary">Review</button>
              </div>
            </div>
          </div>
  
          <div class="card bg-base-200 shadow hover:shadow-lg transition cursor-pointer">
            <div class="card-body">
              <h2 class="card-title">Linear Equations Practice</h2>
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-success">Math</span>
                <span class="badge badge-outline">8 Questions</span>
                <span class="badge badge-outline">10 min</span>
              </div>
              <p class="mt-2 text-sm">Perfect score! You got 8/8.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-outline btn-primary">View Answers</button>
              </div>
            </div>
          </div>
  
          <!-- Add more quiz cards here -->
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
  