export function test() {
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
    <div class="overflow-auto">

<div class="hero bg-base-200 flex flex-col justify-center" style="min-height: 90vh;">

            <ul class="steps pb-8 pt-8 w-1/2">
  <li class="step step-primary">Personal Details</li>
  <li class="step step-primary">School Details</li>
  <li class="step">Verify</li>
</ul>

        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mb-6">
        <legend class="fieldset-legend">Signup 3/3</legend>

        <label class="label">Enter Username :</label>
    <label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
</label>
<p class="validator-hint hidden">
  Must be 3 to 30 characters
  <br />containing only letters, numbers or dash
</p>

<label class="label">Enter Password :</label>
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    placeholder="Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p class="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>


<label class="label">Confirm Password :</label>
<label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    placeholder="Re-enter Password"
    minlength="8"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p class="validator-hint hidden">
  Password does not match</p>


        <label class="label">Phone.no</label>
        <label class="input validator">

    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none">
      <path
        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
        fill="currentColor"
      ></path>
    </g>
    </svg>
    <input
    type="tel"
    class="tabular-nums"
    required
    placeholder="Phone"
    pattern="[0-9]*"
    minlength="10"
    maxlength="10"
    title="Must be 10 digits"
    />
    </label>


<label class="label">Email</label>
        <label class="input validator">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div class="validator-hint hidden">Enter valid email address</div>


        <button class="btn btn-neutral mt-4 ">Submit</button>
        </fieldset>
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
  