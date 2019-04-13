/* Menu Icon JavaScript */
function toggleSidebar () {
	document.getElementById("sidebar").classList.toggle('active');
}
/* Menu Icon JavaScript End */




/* Homepage Slider Javacript */
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter 
let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',() => {
  if (counter >= images.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});


prevBtn.addEventListener('click',() => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
  
});

slider.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone'){
    slider.style.transition = "none";
    counter = images.length - 2 ;
    slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
   }
   if (images[counter].id === 'firstClone'){
    slider.style.transition = "none";
    counter = images.length - counter;
    slider.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    
  }
});
/* Homepage Slider JavaScript End */
