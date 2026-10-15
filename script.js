document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

revealItems.forEach((item) => revealObserver.observe(item));

const reviewRail = document.querySelector('.review-rail');
document.querySelectorAll('[data-review-direction]').forEach((button) => {
  button.addEventListener('click', () => {
    const direction = Number(button.dataset.reviewDirection);
    reviewRail.scrollBy({ left: reviewRail.clientWidth * 0.72 * direction, behavior: 'smooth' });
  });
});
