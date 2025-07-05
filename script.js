function joinEmail() {
    const email = document.getElementById("emailInput").value;
    if (email && email.includes("@")) {
      alert("Thank you for joining! We will contact you soon.");
    } else {
      alert("Please enter a valid email address.");
    }
  }

//   carousel
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-card");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    let current = 0;
  
    function showCard(index) {
      cards.forEach((card) => card.classList.remove("active"));
      cards[index].classList.add("active");
    }
  
    function nextCard() {
      current = (current + 1) % cards.length;
      showCard(current);
    }
  
    function prevCard() {
      current = (current - 1 + cards.length) % cards.length;
      showCard(current);
    }
  
    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);
  
    // Show the first card on load
    showCard(current);
    // setInterval(nextCard, 5000);

  });
// fade in 
  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); 
        } else {
            entry.target.classList.remove('visible');
          }
      });
    }, { threshold: 0.2 });
  
    fadeElements.forEach(el => observer.observe(el));
  });
//  slide in left and right 
  document.addEventListener("DOMContentLoaded", () => {
    const animatedEls = document.querySelectorAll('.slide-in-left, .slide-in-right');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.2
    });
  
    animatedEls.forEach(el => observer.observe(el));
  });
// animate
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

observer.observe(document.querySelector('.charity-visual'));

// slider 
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.testimonial-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const cardWidth = 320; // card + margin
  let index = 0;

  // Move to current index
  function updateCarousel() {
    track.style.transition = 'transform 0.6s ease';
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  // Button events
  document.querySelector('.next-btn').addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateCarousel();
  });

  document.querySelector('.prev-btn').addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  // Autoplay
  setInterval(() => {
    index = (index + 1) % cards.length;
    updateCarousel();
  }, 4000);
});

  