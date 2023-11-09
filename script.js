
function rentMotor(productName) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTotal = document.getElementById('modalTotal');

    const durationInput = (productName === 'Classic Cruiser') ? document.getElementById('classicDuration') : document.getElementById('sportyDuration');

    // Set modal content based on the selected product
    if (productName === 'Classic Cruiser') {
        modalTitle.innerText = 'Classic Cruiser Details';
        modalDescription.innerText = 'A classic motorcycle designed for a comfortable and enjoyable ride.';
    } else if (productName === 'Sporty Adventure') {
        modalTitle.innerText = 'Sporty Adventure Details';
        modalDescription.innerText = 'Experience the thrill of adventure with our powerful and sporty motorcycle.';
    }

    // Calculate and display total cost
    const duration = parseFloat(durationInput.value) || 0;
    const ratePerHour = (productName === 'Classic Cruiser') ? 10 : 15;
    const totalCost = duration * ratePerHour;

    modalTotal.innerText = `Total Cost: $${totalCost.toFixed(2)}`;

    // Show the modal
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
function img() {
    document.getElementById("gantiGambar").src='img/Cafe race 2.jpg'
    document.getElementById("gantiFoto").src='img/Bbber 2.jpg'
    document.getElementById("gantiLatar").src='img/Choper 2.jpg'
}
