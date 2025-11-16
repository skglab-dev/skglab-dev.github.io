fetch(`../assets/data/devices/release/${document.codename}.json`)
  .then(response => response.json())
  .then(data => {
    const listContainer = document.querySelector('#fuck-list-1 ul');
    if (!listContainer) {
      console.error('List container not found');
      return;
    }

    listContainer.innerHTML = '';

    data.devices.forEach(device => {
      const li = document.createElement('li');
      li.style.textAlign = 'left';
      li.innerHTML = `
        <h5>${device.title} (${device.codename})</h5>
        <p>Developer: ${device.details.developer}</p>
        <p>Last Update: ${device.details.last_update}</p>
        <p>Status: ${device.details.status}</p>
      `;
      listContainer.appendChild(li);
    });

    // Refresh AOS if needed
    if (window.AOS) AOS.refresh();
  })
  .catch(error => console.error('Failed to load devices JSON:', error));
