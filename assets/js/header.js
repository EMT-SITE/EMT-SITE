document.addEventListener('DOMContentLoaded', function (){

    let menubtn = document.querySelector('.menu-btn')
    let closeButton = document.querySelector('.closebtn')
  
    let inputBtn = document.querySelector('.main-rightwrapper__btn')
    console.log(inputBtn);
  
  
    console.log(menubtn);
    menubtn.addEventListener('click', openNav);
    closeButton.addEventListener('click', closeNav);
    //Open nav and close nav
  function openNav() {
    console.log('yay');
      let ert = document.querySelector('.overlay-content')
     console.log(ert);
     
     document.getElementById("myNav").style.width = "100%";
     
      document.querySelector('.overlay-content').classList.add('visible');
    }
    
    function closeNav() {
      document.querySelector('.overlay-content').classList.remove('visible');
      document.getElementById("myNav").style.width = "0%";
    }
  
  
  
  
    
  });