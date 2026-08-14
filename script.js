// Keystone Digital — minimal interactions

function handleSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const project = form.project.value;
  const message = form.message.value.trim();

  // For now we just show a clean confirmation.
  // Later this can be connected to Formspree, EmailJS, or a backend.
  alert(`Thank you, ${name}.\n\nYour message has been received. We'll respond within 1–2 business days.`);

  form.reset();
  return false;
}

// Smooth scroll for anchor links (already handled by CSS, but ensure header offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Simple mobile menu toggle (expand later if needed)
const toggle = document.querySelector('.mobile-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    // Placeholder for mobile nav expansion
    alert('Mobile navigation coming in the next polish pass.');
  });
}
