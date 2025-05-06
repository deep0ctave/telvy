export function login() {
    document.querySelector('#app').innerHTML = `
    <div data-theme="light" min-h-screen>
    
    <div class="navbar bg-base-100 shadow-sm">
      <a class="text-xl">telvy</a>
    </div>
    
    <div class="hero bg-base-200" style="min-height: 90vh;">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-2">
            Just a step away from your next <strong>BIG</strong> question.
          </p>
        </div>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div class="card-body">
            <fieldset class="fieldset">
              <label class="label">Email</label>
              <input type="email" class="input" placeholder="Email" />
              <label class="label">Password</label>
              <input type="password" class="input" placeholder="Password" />
              <div class="flex justify-between mt-4">
              <a class="link link-hover ml-2">Forgot password?</a>
              <a class="link link-hover mr-2">Register</a>
              </div>
              <button class="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
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
      </div>
    `;
  }