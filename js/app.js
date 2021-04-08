// Main page
$selectLists = document.querySelector('.language-lists');
let $carousel = document.querySelector('.carousel')
let $carouselSlides = document.querySelector('.carousel-slides')

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

const toggleProperty = e => {
  if (e.target.style.cssText === 'z-index: 0;') {
    e.target.previousElementSibling.style.setProperty('z-index', 1)
  } else if (e.target.style.cssText === 'z-index: 1;') {
    e.target.style.setProperty('z-index', 0)
  }
}

$selectLists.onclick = e => {
  if (e.target === $selectLists) return;
  toggleProperty(e);
}




// const polaroids = document.querySelector('.polaroids');
// const polaroid = document.querySelector('.polaroids .polaroid');
// const leftButton = document.querySelector('.carousel-left');
// const rightButton = document.querySelector('.carousel-right');
// let currentPolaroid = 0;
// const movePolaroid = num => {
//     polaroids.style.left = -num * 380 + 'px';
//     currentPolaroid = num;
// }
// rightButton.onclick = () => {
//     currentPolaroid < 3 ? movePolaroid(currentPolaroid + 1) : movePolaroid(0);
// }
// leftButton.onclick = () => {
//     currentPolaroid > 0 ? movePolaroid(currentPolaroid - 1) : movePolaroid(3);
// }
