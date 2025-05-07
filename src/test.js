export function test() {
  document.querySelector('#app').innerHTML = `
  <div class="drawer w-screen overflow-hidden lg:drawer-open" data-theme="forest">
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
  <div class="overflow-auto lg:px-50 lg:py-20 p-20">
  
  <h1 class=" text-3xl lg:text-6xl font-bold mb-4">About Telvy</h1>
<p class="mb-4">
  Telvy is a forward-thinking platform committed to reshaping the way people engage with technology. Born out of a passion for innovation and user-centric design, Telvy aims to bridge the gap between functionality and creativity. Whether you're an individual creator or part of a large organization, Telvy offers tools and insights to help you thrive in a rapidly evolving digital landscape.
</p>

<h2 class="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
<p class="mb-4">
  Our mission is to empower people through intuitive design, robust technology, and accessible solutions. We believe in simplicity, clarity, and impact — ensuring that every feature we develop has real-world value and makes life easier for our users.
</p>

<h2 class="text-2xl font-semibold mt-6 mb-2">What We Do</h2>
<ul class="list-disc list-inside mb-4">
  <li>Develop open-source tools that make development faster and more enjoyable</li>
  <li>Provide UI frameworks that are modern, responsive, and fully customizable</li>
  <li>Support creators and developers through community resources and documentation</li>
  <li>Continuously iterate based on user feedback and real-world needs</li>
</ul>

<h2 class="text-2xl font-semibold mt-6 mb-2">Our Team</h2>
<p class="mb-4">
  We're a small but passionate team of designers, engineers, and storytellers who believe that great products come from great collaboration. We value transparency, inclusion, and experimentation — and we love what we do.
</p>

<h2 class="text-2xl font-semibold mt-6 mb-2">Get Involved</h2>
<p>
  Want to be a part of our journey? We're always looking for curious minds and driven individuals to join our community. Whether you're contributing code, designing features, or just exploring what Telvy can do — you're welcome here.
</p>

      
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