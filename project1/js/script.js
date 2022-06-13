let shareBtn = document.querySelector('.share');
let shareBtnPC = document.querySelector('.share.pc');
let shareBtnActive = document.querySelector('.share_m');

shareBtn.addEventListener('click', function toggleActive() {
  this.parentElement.parentElement.nextElementSibling.classList.add('show')
  this.parentElement.parentElement.classList.remove('show')
})

shareBtnActive.addEventListener('click', function toggleActive() {
  this.parentElement.previousElementSibling.classList.add('show')
  this.parentElement.classList.remove('show')
})

shareBtnPC.addEventListener('click', function toggleActivePC() {
  this.parentElement.parentElement.nextElementSibling.classList.add('show')
})