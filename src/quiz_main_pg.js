export function quiz_main_pg() {
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
          <div class="flex-none flex items-center gap-2 ml-auto">
            <!-- Theme Toggle -->
            <label class="toggle text-base-content cursor-pointer">
              <input type="checkbox" value="synthwave" class="theme-controller" />
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
            </label>
  
            <!-- Language Dropdown -->
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-sm btn-ghost gap-1 px-1.5 text-[.5625rem] font-bold">
                <svg class="text-base-content/70 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"></path>
                </svg>
                <svg class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <div class="dropdown-content bg-base-200 text-base-content rounded-box mt-16 h-[30.5rem] w-56 overflow-y-auto border shadow-2xl">
                <ul class="menu menu-sm w-full">
                  <li><button class="menu-active"><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">EN</span> <span>English</span></button></li>
                  <li><button><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">AR</span> <span>العربية</span></button></li>
                  <li><button><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">BN</span> <span>বাংলা</span></button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        
        <!-- Main Quiz Content -->
        <div class="flex-1">
          <!-- Header Section -->
          <div class="bg-gradient-to-r from-primary to-secondary text-primary-content px-10 py-12">
            <h1 class="text-5xl font-extrabold">Quizzes</h1>
            <p class="mt-4 max-w-2xl text-base opacity-90">
              Welcome to your quiz dashboard! Here you can view and manage all your quizzes – whether they're completed, currently live, or scheduled for later.
            </p>
          </div>
  
          <!-- Submenu Cards -->
          <div class="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Completed Quizzes -->
            <div class="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
              <div class="card-body">
                <h2 class="card-title text-lg">Completed Quizzes</h2>
                <p>Review your past quiz attempts, see your scores, and learn from detailed feedback.</p>
              </div>
            </div>
  
            <!-- Live Quizzes -->
            <div class="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
              <div class="card-body">
                <h2 class="card-title text-lg">Live Quizzes</h2>
                <p>Jump into quizzes happening right now! Compete in real-time with your classmates.</p>
              </div>
            </div>
  
            <!-- Scheduled Quizzes -->
            <div class="card bg-base-200 text-base-content shadow hover:shadow-lg transition cursor-pointer">
              <div class="card-body">
                <h2 class="card-title text-lg">Scheduled Quizzes</h2>
                <p>Check out upcoming quizzes, their start times, and prepare ahead of time.</p>
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
  