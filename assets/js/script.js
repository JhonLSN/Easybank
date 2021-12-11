const toggle_btn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('.header__navigation')

toggle_btn.addEventListener('click', () =>{
  // Check if there is this class
  if(navigation.classList.contains('active')){
    navigation.classList.remove('active')
  }else{
    navigation.classList.add('active')
  }
})