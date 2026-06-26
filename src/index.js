/* -------------------------------------------------------------
   I3Dion Interactive Scripting
   Aesthetics: Apple, Stripe, Tesla, Linear
   Libraries: GSAP, ScrollTrigger, Lucide Icons
----------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Footer Copyright Year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


  // -------------------------------------------------------------
  // 2. SCROLL PROGRESS INDICATOR & NAVBAR SCROLLED STATE
  // -------------------------------------------------------------
  const scrollIndicator = document.getElementById('scrollIndicator');
  const navbarHeader = document.getElementById('navbarHeader');

  window.addEventListener('scroll', () => {
    // Scroll progress calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollIndicator) {
      scrollIndicator.style.width = scrolled + '%';
    }

    // Navbar Scrolled State
    if (navbarHeader) {
      if (window.scrollY > 20) {
        navbarHeader.classList.add('scrolled');
      } else {
        navbarHeader.classList.remove('scrolled');
      }
    }
  });

  // -------------------------------------------------------------
  // 3. MOBILE MENU TOGGLE
  // -------------------------------------------------------------
  const mobileTrigger = document.getElementById('mobileTrigger');
  const mobileDropdown = document.getElementById('mobileDropdown');
  const menuOpenIcon = document.getElementById('menuOpenIcon');
  const menuCloseIcon = document.getElementById('menuCloseIcon');

  if (mobileTrigger && mobileDropdown) {
    mobileTrigger.addEventListener('click', () => {
      mobileDropdown.classList.toggle('active');
      const isActive = mobileDropdown.classList.contains('active');

      if (isActive) {
        menuOpenIcon.style.display = 'none';
        menuCloseIcon.style.display = 'block';
      } else {
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
      }
    });

    // Close mobile dropdown when clicking a link
    mobileDropdown.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDropdown.classList.remove('active');
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
      });
    });
  }

  // -------------------------------------------------------------
  // 4. CUSTOM CURSOR
  // -------------------------------------------------------------
  const customCursor = document.getElementById('customCursor');
  const customCursorDot = document.getElementById('customCursorDot');
  let mousePosition = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    if (customCursorDot) {
      customCursorDot.style.left = `${mousePosition.x}px`;
      customCursorDot.style.top = `${mousePosition.y}px`;
    }

    if (customCursor) {
      // Smooth easing cursor follow
      gsap.to(customCursor, {
        x: mousePosition.x,
        y: mousePosition.y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.15,
        ease: 'power2.out',
      });
    }
  });

  // Track hover states for custom cursor scaling
  const attachCursorHoverListeners = () => {
    const hoverElements = document.querySelectorAll(
      'a, button, input, textarea, .glass-interactive, .node-btn'
    );

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (customCursor) {
          gsap.to(customCursor, {
            scale: 2.2,
            borderColor: '#8a2be2',
            backgroundColor: 'rgba(0, 163, 255, 0.08)',
            duration: 0.2,
          });
        }
      });

      el.addEventListener('mouseleave', () => {
        if (customCursor) {
          gsap.to(customCursor, {
            scale: 1,
            borderColor: '#00a3ff',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            duration: 0.2,
          });
        }
      });
    });
  };

  attachCursorHoverListeners();

  // Re-run hover logic when dynamic panels shift
  const observer = new MutationObserver(attachCursorHoverListeners);
  observer.observe(document.body, { childList: true, subtree: true });

  // -------------------------------------------------------------
  // 5. HTML5 CANVAS PARTICLE SYSTEM
  // -------------------------------------------------------------
  function setupCanvasParticles(canvasId, particleColor, count, lineDist) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const particles = [];
    const localMouse = { x: null, y: null, radius: 150 };

    window.addEventListener('resize', () => {
      if (canvas) {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      }
    });

    // Share global mouse coordinate inside canvas bounds
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      localMouse.x = e.clientX - rect.left;
      localMouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
      localMouse.x = null;
      localMouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (localMouse.x !== null && localMouse.y !== null) {
          const dx = localMouse.x - this.x;
          const dy = localMouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < localMouse.radius) {
            const force = (localMouse.radius - distance) / localMouse.radius;
            this.x -= (dx / distance) * force * 1.2;
            this.y -= (dy / distance) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < lineDist) {
            const alpha = (1 - dist / lineDist) * 0.12;
            ctx.strokeStyle = `rgba(138, 43, 226, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse connections
      if (localMouse.x !== null && localMouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = particles[i].x - localMouse.x;
          const dy = particles[i].y - localMouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < localMouse.radius) {
            const alpha = (1 - dist / localMouse.radius) * 0.15;
            ctx.strokeStyle = `rgba(0, 163, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(localMouse.x, localMouse.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // Init Hero & Vision backgrounds
  setupCanvasParticles('heroCanvas', 'rgba(0, 240, 255, 0.2)', 40, 180);
  setupCanvasParticles('visionCanvas', 'rgba(79, 70, 229, 0.15)', 50, 180);

  // -------------------------------------------------------------
  // 6. ECOSYSTEM INTERACTIVE GRAPH
  // -------------------------------------------------------------
  const nodeData = {
    ideas: {
      title: 'Ideas',
      desc: 'Unrefined inputs, client ambitions, market inefficiencies, and blue-sky thinking.',
      role: 'We filter raw concepts, validating commercial feasibility and technology viability.',
      color: '#00a3ff',
    },
    innovation: {
      title: 'Innovation',
      desc: 'Algorithmic breakthroughs, UI patterns, database models, and cloud blueprints.',
      role: 'Our research lab builds proofs of concept using leading-edge tools and frameworks.',
      color: '#8a2be2',
    },
    technology: {
      title: 'Technology',
      desc: 'Robust backend databases, scalable frontend APIs, AI layers, and spatial shaders.',
      role: 'Production coding in clean environments, maintaining strict standards and security protocols.',
      color: '#00a3ff',
    },
    integration: {
      title: 'Integration',
      desc: 'Synchronized systems, automated data feeds, external APIs, and corporate pipelines.',
      role: 'Bridging internal structures with external dependencies to establish a unified operational pipeline.',
      color: '#8a2be2',
    },
    impact: {
      title: 'Impact',
      desc: 'Hyper-scale efficiency, user delight, exponential revenue metrics, and global transformation.',
      role: 'Releasing stable products that automate manual tasks, optimize telemetry, and deliver premium UX.',
      color: '#00a3ff',
    },
  };

  const nodeBtns = document.querySelectorAll('.node-btn');
  const panelTitle = document.getElementById('panelTitle');
  const panelDesc = document.getElementById('panelDesc');
  const panelRole = document.getElementById('panelRole');
  const panelRoleBox = document.querySelector('.panel-role-box');
  const panelGlowBg = document.getElementById('panelGlowBg');

  nodeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      nodeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const nodeId = btn.getAttribute('data-node');
      const data = nodeData[nodeId];

      if (data) {
        // Fade Panel using GSAP for high-end feel
        gsap.fromTo(
          '#ecosystemPanel',
          { opacity: 0.6, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );

        if (panelTitle) panelTitle.textContent = data.title;
        if (panelDesc) panelDesc.textContent = `"${data.desc}"`;
        if (panelRole) panelRole.textContent = data.role;

        if (panelRoleBox) {
          panelRoleBox.style.borderLeftColor = data.color;
        }

        if (panelGlowBg) {
          panelGlowBg.style.background = data.color;
        }
      }
    });
  });

  // -------------------------------------------------------------
  // 7. CONTACT FORM SUBMIT
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formSuccessOverlay = document.getElementById('formSuccessOverlay');
  const formSubmitBtn = document.getElementById('formSubmitBtn');

  if (contactForm && formSuccessOverlay) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value;
      const company = document.getElementById('formCompany').value;
      const email = document.getElementById('formEmail').value;
      const message = document.getElementById('formMessage').value;

      // Visual feedback during loading
      const originalBtnText = formSubmitBtn.innerHTML;
      formSubmitBtn.innerHTML = '<span>Transmitting...</span> <i data-lucide="loader" class="spin"></i>';
      formSubmitBtn.style.opacity = '0.7';
      formSubmitBtn.disabled = true;

      try {
        // Send actual POST request to Vercel Serverless Function
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, company, email, message }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Server response:', data);

        // Show Success Overlay
        formSuccessOverlay.classList.add('active');
        gsap.fromTo(
          formSuccessOverlay,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.4)' }
        );

        setTimeout(() => {
          gsap.to(formSuccessOverlay, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            onComplete: () => {
              formSuccessOverlay.classList.remove('active');
              contactForm.reset();
            },
          });
        }, 4000);

      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error transmitting your data. Please try again.');
      } finally {
        // Restore button state
        formSubmitBtn.innerHTML = originalBtnText;
        formSubmitBtn.style.opacity = '1';
        formSubmitBtn.disabled = false;
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  }

  // -------------------------------------------------------------
  // 8. GSAP SCROLL TRIGGER ANIMATIONS
  // -------------------------------------------------------------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Reveal
    gsap.from('.hero-headline', {
      y: 50,
      // opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
    });

    gsap.from('.hero-subheadline', {
      y: 30,
      // opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.6,
    });

    gsap.from('.hero-ctas', {
      y: 20,
      // opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.8,
    });

    // Scroll trigger reveals for section headers
    gsap.utils.toArray('.section-header').forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        // opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Timeline cards reveal
    gsap.from('.timeline-card', {
      scrollTrigger: {
        trigger: '.timeline-grid',
        start: 'top 80%',
      },
      // opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Service cards reveal
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
      // opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Ecosystem details reveal
    gsap.from('.ecosystem-graph-container, .ecosystem-panel', {
      scrollTrigger: {
        trigger: '.ecosystem-section',
        start: 'top 75%',
      },
      // opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Featured Case Studies reveal
    gsap.from('.work-card', {
      scrollTrigger: {
        trigger: '.work-grid',
        start: 'top 80%',
      },
      // opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Why us pillars reveal
    gsap.from('.pillar-card', {
      scrollTrigger: {
        trigger: '.pillars-grid',
        start: 'top 80%',
      },
      // opacity: 0,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // IndustriesServed grid reveal
    gsap.from('.industry-card', {
      scrollTrigger: {
        trigger: '.industries-grid',
        start: 'top 85%',
      },
      // opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
    });

    // Future Vision Cinematic display
    gsap.from('.vision-content span, .vision-content h2, .vision-content p', {
      scrollTrigger: {
        trigger: '.vision-section',
        start: 'top 70%',
      },
      // opacity: 0,
      y: 45,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // -------------------------------------------------------------
    // 9. ADVANCED PARALLAX EFFECTS
    // -------------------------------------------------------------
    // Parallax background elements
    gsap.to('.glow-wrapper', {
      y: 150,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.reticle-outer', {
      y: -100,
      rotation: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.vision-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // -------------------------------------------------------------
    // 10. MAGNETIC BUTTON INTERACTION
    // -------------------------------------------------------------
    const magneticBtns = document.querySelectorAll('.btn');
    
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const h = rect.width / 2;
        
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - (rect.height / 2);

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: 'power3.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }
});
