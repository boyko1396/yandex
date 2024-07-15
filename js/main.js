document.addEventListener('scroll', () => {
  const header = document.querySelector('.js-header-sticky');
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 60) {
    header.classList.add('cloud-header_with-background');
  } else {
    header.classList.remove('cloud-header_with-background');
  }
});