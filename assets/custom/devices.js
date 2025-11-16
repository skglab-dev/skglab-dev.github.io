fetch("assets/data/devices.json")
    .then(response => response.json())
    .then(data => {
      const wrapper = document.getElementById("device-wrapper");

      data.forEach(device => {
        const item = `
          <div class="col-lg-4 col-md-6 portfolio-item devices">
            <div class="portfolio-wrap">
              <div class="portfolio-box">
                <div class="overlay">
                  <img src="${device.img}" loading="lazy" class="img-fluid" alt="">
                  <h5 class="d-flex justify-content-center mt-2">${device.name}</h5>
                  <p class="d-flex justify-content-center mt-2">${device.codename}</p>
                  <div class="d-flex justify-content-center mt-2">
                    <a href="${device.link}" class="btn btn-lg btn-light-magenta">Information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        wrapper.insertAdjacentHTML("beforeend", item);
      });

      // Re-layout Isotope
      if (window.iso) {
        window.iso.reloadItems();
        window.iso.layout();
      }

      // Refresh AOS animations
      if (window.AOS) AOS.refresh();
    });
