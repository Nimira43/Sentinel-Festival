window.onload = () => {
  const mobileMenuIcon = document.getElementById('mobile-menu-button')
  mobileMenuIcon.addEventListener('click', () => {
    if(mobileMenuIcon.classList.contains('open')) {
      mobileMenuIcon.classList.remove('open')
    } else {
      mobileMenuIcon.classList.add('open')
    }
  })
}