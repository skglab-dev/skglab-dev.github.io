fetch("assets/data/team.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("team-wrapper");

    data.forEach(member => {
      const slide = `
        <div class="swiper-slide">
          <div class="testimonial-item">
            <p>
              <i class="bx bxs-quote-alt-left quote-icon-left"></i>
              ${member.quote}
              <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="${member.img}" loading="lazy" class="testimonial-img" alt="">
            <h3>${member.name}</h3>
            <h4>${member.role}</h4>
          </div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", slide);
    });

    // Reinitialize Swiper after adding slides
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000 },
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  })
  .catch(err => console.error("Failed to load team.json:", err));
