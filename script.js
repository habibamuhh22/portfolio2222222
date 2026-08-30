/* =========================================================
   Habiba Muhammed portfolio — vanilla JS
   Edit CONFIG for CV path, email, socials, and project data.
   ========================================================= */

const CONFIG = {
  cvPath: "assets/cv/Habiba_Muhammed_CV.pdf",
  email: "your.email@example.com",
  roles: [
    "Network Security Engineer",
    "SOC Analyst",
    "Cybersecurity Enthusiast"
  ],
  terminalScript: [
    "$ whoami",
    "habiba@muhammed:~$ role",
    "> Network Security Engineer",
    "> SOC Analyst",
    "habiba@muhammed:~$ focus",
    "> Network Security",
    "> Threat Detection",
    "> Security Monitoring",
    "> Incident Analysis",
    "$ system_status",
    "[ ONLINE ]"
  ],
  /* Edit project details here. github: null shows “coming soon”. */
  projects: {
    p1: {
      meta: "PROJECT 01",
      title: "Network Security Infrastructure",
      image: "assets/images/project1.jpg",
      desc: "A practical network infrastructure project focused on routing, switching, VLANs, network segmentation, ACLs, and secure communication.",
      tech: ["Cisco Packet Tracer", "Routing", "Switching", "VLAN", "ACL"],
      features: [
        "Segmented LAN design with VLANs",
        "Access control via ACLs",
        "Routing between secure zones",
        "Emphasis on reliable, controlled communication"
      ],
      github: null
    },
    p2: {
      meta: "PROJECT 02",
      title: "SOC Monitoring & Security Analysis Lab",
      image: "assets/images/project2.jpg",
      desc: "A cybersecurity lab focused on security events, log analysis, threat detection, monitoring, and SOC investigation concepts.",
      tech: ["SOC", "Log Analysis", "SIEM", "Threat Detection"],
      features: [
        "Event and log review workflows",
        "Threat detection concepts",
        "Monitoring practice in a lab setting",
        "Investigation-oriented analysis"
      ],
      github: null
    },
    p3: {
      meta: "PROJECT 03",
      title: "Firewall Security Lab",
      image: "assets/images/project3.jpg",
      desc: "A practical firewall environment focused on traffic control, NAT, access control, network security, and troubleshooting.",
      tech: ["FortiGate", "Firewall", "NAT", "ACL"],
      features: [
        "Traffic control policies",
        "NAT configuration practice",
        "Access-control testing",
        "Firewall troubleshooting scenarios"
      ],
      github: null
    },
    p4: {
      meta: "PROJECT 04",
      title: "Network Troubleshooting Lab",
      image: "assets/images/project4.jpg",
      desc: "A practical networking environment involving routing, DNS, HTTP connectivity, troubleshooting, and packet analysis.",
      tech: ["Cisco", "GNS3", "Packet Tracer", "Wireshark"],
      features: [
        "End-to-end connectivity checks",
        "DNS and HTTP troubleshooting",
        "Packet analysis with Wireshark",
        "Virtual lab topology work"
      ],
      github: null
    }
  }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initScrollProgress();
  initActiveSection();
  initReveal();
  initTyping();
  initTerminal();
  initBinary();
  initNetworkCanvas();
  initProjects();
  initCarousel();
  initForm();
  initRipples();
  initTilt();
  initParallax();
  initCvLink();
  if (!isTouch) {
    initCursor();
    initMouseGlow();
  } else {
    document.body.classList.add("touch");
  }
});

function initCvLink() {
  const link = document.getElementById("downloadCv");
  if (link) link.setAttribute("href", CONFIG.cvPath);
}

/* ----- Theme ----- */
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  applyTheme(saved);
  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }
}

/* ----- Nav ----- */
function initNav() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  toggle?.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  links?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle?.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
    bar.setAttribute("aria-valuenow", String(Math.round(pct)));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initActiveSection() {
  const map = [
    "home", "about", "experience", "skills", "projects", "testimonials", "services", "contact"
  ];
  const links = document.querySelectorAll(".nav-links a");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) => l.classList.toggle("active", l.dataset.section === id));
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
  );
  map.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    nodes.forEach((n) => n.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((n) => io.observe(n));
}

/* ----- Typing role ----- */
function initTyping() {
  const el = document.getElementById("typedRole");
  if (!el || reduceMotion) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const word = CONFIG.roles[roleIndex];
    if (!deleting) {
      charIndex += 1;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex -= 1;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % CONFIG.roles.length;
      }
    }
    setTimeout(tick, deleting ? 36 : 70);
  };
  tick();
}

function initTerminal() {
  const el = document.getElementById("terminalBody");
  if (!el) return;
  const full = CONFIG.terminalScript.join("\n");
  if (reduceMotion) {
    el.textContent = full;
    return;
  }
  let i = 0;
  const type = () => {
    i += 1;
    el.textContent = full.slice(0, i);
    if (i < full.length) setTimeout(type, 22);
  };
  type();
}

function initBinary() {
  const layer = document.getElementById("binaryLayer");
  if (!layer || reduceMotion || isTouch) return;
  const bits = ["01001000", "10110011", "SOC", "ACL", "VLAN", "0xFF", "PKT"];
  for (let i = 0; i < 12; i += 1) {
    const span = document.createElement("span");
    span.textContent = bits[i % bits.length];
    span.style.left = Math.random() * 90 + "%";
    span.style.top = Math.random() * 80 + 10 + "%";
    span.style.animationDelay = Math.random() * 10 + "s";
    layer.appendChild(span);
  }
}

/* ----- Network node canvas ----- */
function initNetworkCanvas() {
  const canvas = document.getElementById("networkCanvas");
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext("2d");
  const nodes = [];
  const count = isTouch ? 18 : 42;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < count; i += 1) {
    nodes.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const light = document.documentElement.getAttribute("data-theme") === "light";
    ctx.fillStyle = light ? "rgba(201,40,120,0.45)" : "rgba(255,79,163,0.7)";
    ctx.strokeStyle = light ? "rgba(201,40,120,0.12)" : "rgba(255,79,163,0.16)";
    nodes.forEach((n, i) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < nodes.length; j += 1) {
        const o = nodes[j];
        const dx = n.x - o.x;
        const dy = n.y - o.y;
        const d = Math.hypot(dx, dy);
        if (d < 140) {
          ctx.globalAlpha = 1 - d / 140;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(o.x, o.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    });
    requestAnimationFrame(draw);
  };
  draw();
}

/* ----- Projects modal ----- */
function initProjects() {
  const modal = document.getElementById("projectModal");
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const open = () => openProject(card.dataset.project);
    card.addEventListener("click", open);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
  modal?.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openProject(id) {
  const data = CONFIG.projects[id];
  const modal = document.getElementById("projectModal");
  if (!data || !modal) return;
  document.getElementById("modalImage").src = data.image;
  document.getElementById("modalImage").alt = data.title;
  document.getElementById("modalMeta").textContent = data.meta;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDesc").textContent = data.desc;
  const feat = document.getElementById("modalFeatures");
  feat.innerHTML = "";
  data.features.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = f;
    feat.appendChild(li);
  });
  const tech = document.getElementById("modalTech");
  tech.innerHTML = "";
  data.tech.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    tech.appendChild(li);
  });
  const gh = document.getElementById("modalGithub");
  gh.onclick = null;
  if (data.github) {
    gh.href = data.github;
    gh.textContent = "View on GitHub";
    gh.target = "_blank";
  } else {
    gh.href = "#";
    gh.textContent = "GitHub link coming soon";
    gh.removeAttribute("target");
    gh.onclick = preventHash;
  }
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close")?.focus();
}

function preventHash(e) {
  e.preventDefault();
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

/* ----- Testimonials ----- */
function initCarousel() {
  const slides = [...document.querySelectorAll(".testimonial")];
  const dotsWrap = document.getElementById("carouselDots");
  let index = 0;
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Show testimonial " + (i + 1));
    b.addEventListener("click", () => show(i));
    dotsWrap.appendChild(b);
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => {
      s.hidden = n !== index;
    });
    dotsWrap.querySelectorAll("button").forEach((d, n) => d.classList.toggle("active", n === index));
  }

  document.getElementById("prevSlide")?.addEventListener("click", () => show(index - 1));
  document.getElementById("nextSlide")?.addEventListener("click", () => show(index + 1));
  show(0);
}

/* ----- Contact form (front-end only) ----- */
function initForm() {
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = ["name", "email", "subject", "message"];
    let ok = true;
    fields.forEach((id) => {
      const input = document.getElementById(id);
      const err = document.querySelector('[data-for="' + id + '"]');
      const value = input.value.trim();
      let msg = "";
      if (!value) msg = "This field is required.";
      else if (id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = "Enter a valid email.";
      else if (id === "message" && value.length < 12) msg = "Please write a slightly longer message.";
      err.textContent = msg;
      if (msg) ok = false;
    });
    if (!ok) return;

    /* Backend hook: send FormData to your API here, e.g.
       fetch("/api/contact", { method: "POST", body: new FormData(form) })
    */
    showToast("Message validated. Connect a backend to deliver it.");
    form.reset();
  });
}

function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.hidden = false;
  setTimeout(() => {
    t.hidden = true;
  }, 4200);
}

function initRipples() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const span = document.createElement("span");
      span.className = "btn-ripple";
      const rect = btn.getBoundingClientRect();
      span.style.left = e.clientX - rect.left + "px";
      span.style.top = e.clientY - rect.top + "px";
      span.style.width = span.style.height = "12px";
      btn.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  });
}

function initTilt() {
  if (isTouch || reduceMotion) return;
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initParallax() {
  if (reduceMotion || isTouch) return;
  const radial = document.querySelector(".hero-radial");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY * 0.12;
      if (radial) radial.style.transform = `translateY(${y}px)`;
    },
    { passive: true }
  );
}

function initCursor() {
  const ring = document.getElementById("cursor");
  const dot = document.getElementById("cursorDot");
  ring.hidden = false;
  dot.hidden = false;
  document.body.classList.add("has-custom-cursor");
  let x = 0;
  let y = 0;
  let rx = 0;
  let ry = 0;
  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });
  const follow = () => {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(follow);
  };
  follow();
}

function initMouseGlow() {
  const glow = document.getElementById("mouseGlow");
  window.addEventListener("mousemove", (e) => {
    glow.style.opacity = "1";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
