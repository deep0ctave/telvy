export function stats() {
    document.querySelector('#app').innerHTML = `
    <div class="drawer lg:drawer-open overflow-hidden h-screen w-screen" data-theme="light">
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
  
          <!-- Right side: Theme toggle and Language switch -->
    <div class="flex-none flex items-center gap-2 ml-auto">
      <!-- Theme Controller -->
      <label class="toggle text-base-content cursor-pointer">
        <input type="checkbox" value="synthwave" class="theme-controller" />
        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
      </label>
  
      <!-- Language Selector -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-sm btn-ghost gap-1 px-1.5 text-[.5625rem] font-bold" aria-label="Language" title="Change Language">
          <svg class="text-base-content/70 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor" d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"></path>
          </svg>
          <svg class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <div tabindex="0" class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 h-[30.5rem] max-h-[calc(100vh-8.6rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5">
          <ul class="menu menu-sm w-full">
            <li><button class="menu-active"><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">EN</span> <span class="font-[sans-serif]">English</span></button></li>
            <li><button><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">AR</span> <span class="font-[sans-serif]">العربية</span></button></li>
            <li><button><span class="pe-4 font-mono text-[.5625rem] font-bold tracking-[0.09375rem] opacity-40">BN</span> <span class="font-[sans-serif]">বাংলা</span></button></li>
            <!-- Add other languages here -->
          </ul>
        </div>
      </div>
    </div>
        </div>
  
        
        <!-- Main Quiz Content -->
        <div class="bg-gradient-to-r from-accent to-primary text-primary-content py-16 px-6">
          <h1 class="text-5xl font-extrabold mb-4">Your Stats</h1>
          <p class="max-w-2xl text-lg">Analyze your quiz performance over time. Check accuracy, activity, and improvements.</p>
        </div>
  
        <!-- Stats Section -->
        <div class="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="stat bg-base-200 shadow-md">
            <div class="stat-title">Total Quizzes</div>
            <div class="stat-value">58</div>
            <div class="stat-desc">Up 12% from last month</div>
          </div>
          <div class="stat bg-base-200 shadow-md">
            <div class="stat-title">Avg. Score</div>
            <div class="stat-value text-secondary">84%</div>
            <div class="stat-desc">+6% improvement</div>
          </div>
          <div class="stat bg-base-200 shadow-md">
            <div class="stat-title">Correct Answers</div>
            <div class="stat-value">1,240</div>
            <div class="stat-desc">Across all quizzes</div>
          </div>
          <div class="stat bg-base-200 shadow-md">
            <div class="stat-title">Streak</div>
            <div class="stat-value">7 days</div>
            <div class="stat-desc">Keep it going!</div>
          </div>
        </div>
  
        <!-- Chart Section -->
        <div class="p-6">
          <div class="bg-base-200 rounded-xl p-4 shadow">
            <h2 class="text-xl font-bold mb-4">Quiz Performance Overview</h2>
            <canvas id="performanceChart" height="100"></canvas>
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
  