document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const slideWidth = document.querySelector('.carousel-slide').clientWidth; // Width of a single slide
    const slidesInView = 2.5; // Number of slides to show per click
  
    let currentIndex = 0;
  
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    function goToPrevSlide() {
      currentIndex = Math.max(0, currentIndex - slidesInView);
      updateCarousel();
    }
  
    function goToNextSlide() {
      currentIndex = Math.min(slides.length - slidesInView, currentIndex + slidesInView);
      updateCarousel();
    }
  
    prevButton.addEventListener('click', goToPrevSlide);
    nextButton.addEventListener('click', goToNextSlide);
  });


  
  

  