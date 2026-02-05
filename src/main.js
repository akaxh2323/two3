import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor Logic Removed


  // Intersection Observer for Scroll Reveals
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe drop cards
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    // Stagger delay
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
  });


  // Password Entry Logic (Simple Client-Side Check for Demo)
  const passwordForm = document.getElementById('password-form');
  const passwordInput = document.getElementById('access-password');
  const passwordFeedback = document.getElementById('password-feedback');

  if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = passwordInput.value.trim().toUpperCase();

      // Allow entry if empty just for interaction demo, or specific passwords
      if (val === 'Ak@shtwo3' || val === 'two3@963') {
        passwordFeedback.textContent = 'ACCESS GRANTED. ENTERING VAULT...';
        passwordFeedback.className = 'feedback-success';

        setTimeout(() => {
          window.location.href = '/members.html';
        }, 1000);
      } else {
        passwordFeedback.textContent = 'INVALID ENTRY CODE.';
        passwordFeedback.className = 'feedback-error';
        passwordInput.value = '';
      }
    });
  }

  // Header "Member Access" Click Interaction
  const memberAccessBtn = document.querySelector('.member-access');
  if (memberAccessBtn && passwordInput) {
    memberAccessBtn.addEventListener('click', () => {
      // smooth scroll to password section
      passwordInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // focus input after short delay for scroll to start
      setTimeout(() => {
        passwordInput.focus();
      }, 500);
    });
  }
});
