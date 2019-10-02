document.addEventListener('DOMContentLoaded', function (){

//Open nav and close nav
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//json fetch
  const testone = fetch('./assets/json/index.json')
  .then(function(response){
      return response.json();
  })
  .then(function(result){

    document.querySelector('.section-one-wrapper').innerHTML = `
    
    <section class="section-one-wrapper">
      <img src="${result.img}""./assets/img/one.jpg" alt="">
      <h2 class="logo-one">${result.logo}</h2>
    </section>
    `

  });

  
});