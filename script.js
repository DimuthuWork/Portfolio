// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.15 }
);
function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}

// ===== Load projects from projects.json =====
// To add a project: just add a new entry in projects.json. No code changes needed.
async function loadProjects() {
  const grid = document.getElementById("projectGrid");
  try {
    const res = await fetch("projects.json");
    const projects = await res.json();
    grid.innerHTML = projects
      .map(
        (p) => `
      <article class="card reveal">
        <div class="card-img">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />` : p.title.charAt(0)}
        </div>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="card-tools">${(p.tools || []).map((t) => `<span>${t}</span>`).join("")}</div>
          ${p.link ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">View Project &rarr;</a>` : ""}
        </div>
      </article>`
      )
      .join("");
  } catch (err) {
    grid.innerHTML =
      "<p>Could not load projects. Open this site with VS Code Live Server (not by double-clicking the file).</p>";
  }
  observeReveals();
}

// ===== Contact form (opens the visitor's email app) =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
  // EDIT: put your real email here
  window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
});

observeReveals();
loadProjects();
