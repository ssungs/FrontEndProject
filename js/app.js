$selectLists = document.querySelector('.language-lists');

$selectLists.onclick = e => {
  if (e.target === $selectLists) return;
  [...$selectLists.children].forEach($selectList => {
    $selectList.classList.toggle('hide', $selectList === e.target);
  });
}

const carousel = ($carouselContainer, images) => {
  let currentSlide = 0;
  let isMoving = false;
  const DURATION = 500;
  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };
  document.addEventListener('DOMContentLoaded', () => {
    $carouselContainer.innerHTML = `
    <div class="carousel">
      <div class="carousel-slides">
          ${[images[images.length - 1], ...images, images[0]].map(url => `<img src="${url}" />`).join('')}
      </div>
      </div>
      <button class="carousel-control prev">&laquo; previous</button>
      <button class="carousel-control next">next &raquo;</button>
      `;
    $carouselSlides = document.querySelector('.carousel-slides');
  });
  window.onload = () => {
    const { offsetWidth } = $carouselSlides.querySelector('img');
    $container.style.width = `${offsetWidth}px`;
    move(++currentSlide);
    $container.style.opacity = 1;
  };
  $carouselContainer.onclick = ({ target }) => {
    if (!target.classList.contains('carousel-control') || isMoving) return;
    const differentiator = target.classList.contains('prev') ? -1 : 1;
    currentSlide += 1 * differentiator;
    move(currentSlide, DURATION);
  };
  $carouselContainer.ontransitionend = () => {
    isMoving = false;
    const differentiator = currentSlide === 0 ? 1 : currentSlide === images.length + 1 ? -1 : 0;
    if (!differentiator) return;
    currentSlide += images.length * differentiator;
    move(currentSlide);
    };
};
carousel(document.querySelector('.carousel-container'), [
  '/images/banner_css.png',
  '/images/banner_html.jpeg',
  '/images/banner_js.png',
  '/images/banner_python.png'
]);