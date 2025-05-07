export function home() {
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
      </div>

      <!-- Main content -->
      <div class="overflow-auto p-6 space-y-6">

        <!-- Profile Info using Stats -->
        <div class="stats shadow-lg bg-base-200 rounded-box flex flex-col flex-wrap sm:flex-row justify-between items-center p-4 gap-4">
          <!-- Left: Avatar and Info -->
          <div class="stat flex-1">
            <div class="stat-figure">
              <div class="avatar">
                <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Student" />
                </div>
              </div>
            </div>
            <div class="stat-value text-xl font-bold">Student</div>
            <div class="stat-title text-base-content/60">@student</div>
            <div class="text-sm mt-2">ZPHS</div>
            <div class="text-sm">Class 10 B</div>
          </div>

          <!-- Right: Stats -->
          <div class="stat flex-1 items-center">
            <div class="stat-figure">
              <div class="rating">
                <div class="mask mask-star bg-yellow-400" aria-label="1 star"></div>
                <div class="mask mask-star bg-yellow-400" aria-label="2 star"></div>
                <div class="mask mask-star bg-yellow-400" aria-label="3 star" aria-current="true"></div>
                <div class="mask mask-star" aria-label="4 star"></div>
                <div class="mask mask-star" aria-label="5 star"></div>
              </div>
            </div>
            <div class="stat-title">Rating</div>
            <div class="stat-value">3/5</div>
            <div class="stat-desc text-sm">Good</div>
          </div>

          <div class="stat flex-1 items-center">
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div class="stat-title">Quizzes Taken</div>
            <div class="stat-value text-primary">42</div>
            <div class="stat-desc">Across all subjects</div>
          </div>

          <div class="stat flex-1 items-center">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-4H5v4H3V5h2v4h4V5h2v12H9zM21 7h-6m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>
            <div class="stat-title">Questions Attempted</div>
            <div class="stat-value text-secondary">380</div>
            <div class="stat-desc">Keep it up!</div>
          </div>
        </div>

        <!-- Subpage Cards in Responsive Grid -->
        <div class="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

          <!-- Card Template -->
          ${[
            { title: 'My Quizzes', icon: 'M12 20h9M12 4h9M4 8h16M4 16h16M4 12h16', desc: 'Access and manage all quizzes you\'ve taken or created.' },
            { title: 'My Stats', icon: 'M3 3v18h18M7 13l3 3 7-7', desc: 'Track your quiz performance and progress over time.' },
            { title: 'My Groups', icon: 'M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m5-4a4 4 0 110-8 4 4 0 010 8zm6 4a4 4 0 100-8 4 4 0 000 8zM3 10a4 4 0 100-8 4 4 0 000 8z', desc: 'Join, create or manage your study groups and collaborations.' },
            { title: 'Notifications', icon: 'M15 17h5l-1.405-1.405C18.79 15.21 19 14.112 19 13V9c0-3.866-3.582-7-8-7S3 5.134 3 9v4c0 1.112.21 2.21.605 3.195L2 17h5m5 0v1a3 3 0 006 0v-1m-6 0H9', desc: 'View important alerts and updates about your activity.' },
            { title: 'Settings', icon: 'M12 8v4l3 3m6-2a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'Customize your preferences and account configurations.' },
            { title: 'Help & Feedback', icon: 'M8 10h.01M12 14h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'Reach out for support or share your suggestions.' }
          ].map(item => `
            <div class="card h-40 bg-secondary text-secondary-content shadow-md hover:shadow-xl transition cursor-pointer">
              <div class="card-body">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${item.icon}" />
                  </svg>
                  <h2 class="card-title">${item.title}</h2>
                </div>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join('')}

        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side h-full z-40 lg:z-30">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="bg-base-300 navbar sticky top-0 z-20 hidden items-center gap-2 px-4 py-0 backdrop-blur flex-1 text-xl font-bold lg:flex "><h1>Telvy</h1></div>
      <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
        <li><a>Home</a></li>
        <li><a>Quizzes</a></li>
        <li><a>Groups</a></li>
        <li><a>Notifications</a></li>
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
