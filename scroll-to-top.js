/**
 * Scroll back to the top of the document with a smooth animation
 * Easing calculation: https://stackoverflow.com/a/24559613/1462363

const scrollToTopTrigger = document.querySelector('.scroll-top-button'),
      scrollToTopSpeed = 400,
      scrollToTopDistance = 2000; // Y-distance (px) down the page before the button is revealed.

window.addEventListener('scroll', e => {
  if (window.scrollY >= 2000) {
    scrollTopButton.classList.add('is-visible');
  } else {
    scrollTopButton.classList.remove('is-visible');
  }
});

scrollTopButton.addEventListener('click', e => {
  var cosParameter = window.scrollY / 2,
    scrollCount = 0,
    oldTimestamp = performance.now();
  function step (newTimestamp) {
    scrollCount += Math.PI / (scrollToTopSpeed / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
    if (window.scrollY === 0) return;
    window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
});
