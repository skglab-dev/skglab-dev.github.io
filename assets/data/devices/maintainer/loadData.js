fetch(`../assets/data/devices/maintainer/${document.codename}.json`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('maintainer-container');
    const device = data.devices[0];
    if (!device) {
      container.innerHTML = '<p>No device data found</p>';
      return;
    }
    const deviceHTML = `
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div class="member">
            <div class="member-img">
              <img src="${device.img}" class="img-fluid" alt="${device.title}">
            </div>
            <div class="member-info">
              <h3>${device.title}</h3>
              <span>${device.codename}</span>
              <div class="my-box">
                <div style="text-align: left;">
                  <boxbit class="dev">${device.details.developer}</boxbit>
                </div>
                <div style="text-align: center;">
                  <boxbit class="lastdate">${device.details.last_update}</boxbit>
                </div>
                <div style="text-align: right;">
                  <boxbit class="activestat">${device.details.status}</boxbit>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    `;

    container.innerHTML = deviceHTML;

    // Refresh AOS animations if using AOS
    if (window.AOS) AOS.refresh();
  })
  .catch(err => console.error("Failed to load device JSON:", err));
