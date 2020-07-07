// Get Modal Element 
const modal = document.getElementById('simpleModal')
// Get open modal button
const modalBtn = document.getElementById('modal-btn')
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

//Outside modal click
window.addEventListener('click', clickOutside)

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Close modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal on click outside
function clickOutside(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

