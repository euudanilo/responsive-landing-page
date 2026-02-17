document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  const intervalTime = 2000;

  function setActive(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setActive(index);
    });
  });

  function autoSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    setActive(currentIndex);
  }

  setInterval(autoSlide, intervalTime);

});
