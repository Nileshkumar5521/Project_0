function changeColour(this){

    var links= document.getElementsByClassName(nav-link);
    for (var i=0;i<links.length;i++){
        links[i].computedStyleMap.color= "#AF2228";
    }{
        link.computedStyleMap.color="#146A6F";
    }
}

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveToIndex(index) {
  if (index < 0 || index >= carouselItems.length) {
    return;
  }
  currentIndex = index;
  const translateX = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
}

setInterval(() => {
  const nextIndex = (currentIndex + 1) % carouselItems.length;
  moveToIndex(nextIndex);
}, 3000); // Change slide every 3 seconds