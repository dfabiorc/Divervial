var amountScrolled = 200;

window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('button.back-to-top');
  
  if (window.scrollY > amountScrolled) {
    backToTopButton.classList.add('show');
    document.querySelector('button.back-to-top').onclick = scrollToTop;
  } else {
    backToTopButton.classList.remove('show');
  }
});

function scrollToTop() {
  console.log("Scrolling to top!"); // Debugging
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return false;
}
