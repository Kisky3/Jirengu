  
/* navigation bar animation control */
window.onscroll = function () {    
  var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;    
  var node = document.getElementById('topbar');    
  if (top > 400) {      
    node.style.display = 'block';    
  } else {      
    node.style.display = 'none';    
  }  
}

/* Customer's Voice swiper control */
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
})