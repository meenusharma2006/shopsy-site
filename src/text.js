   

    const card = document.getElementById("card");
    const cardImage = document.getElementById("cardImage");

    const defaultImg = "https://via.placeholder.com/400x250?text=Default+Image";
    const hoverImg = "https://via.placeholder.com/400x250?text=Hovered+Image";

    card.addEventListener("mouseenter", () => {
      cardImage.src = hoverImg;
    });

    card.addEventListener("mouseleave", () => {
      cardImage.src = defaultImg;
    });




  
    // Toggle mobile menu
    document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });















     const slider = document.getElementById('slider');
  const slides = slider.children;
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const dots = document.querySelectorAll('#dots .dot');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('opacity-100', i === currentIndex);
      dot.classList.toggle('opacity-70', i !== currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
  });

  updateSlider();





   