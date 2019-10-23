
// scroll start 

const arrowTop = document.querySelector('.arrow-top');
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
  let headerHeight = header.style.height;

  if(headerHeight < pageYOffset){
    arrowTop.style.opacity = 1;
  }
  else{
    arrowTop.style.opacity = 0;
  }
})


// scroll end





//portfolio section start 

const portfolio = {
  realism: [
    "../img/portfolio/realism/realism1.png",
    "../img/portfolio/realism/realism2.png",
    "../img/portfolio/realism/realism3.png",
    "../img/portfolio/realism/realism4.png",
    "../img/portfolio/realism/realism5.png",
    "../img/portfolio/realism/realism6.png"
  ],
  
  trad: [
    "../img/portfolio/trad/trad1.png",
    "../img/portfolio/trad/trad2.png",
    "../img/portfolio/trad/trad3.png",
    "../img/portfolio/trad/trad4.png",
    "../img/portfolio/trad/trad5.png",
    "../img/portfolio/trad/trad6.png"
  ],
  
  japan: [
    "../img/portfolio/japan/japan1.png",
    "../img/portfolio/japan/japan2.png",
    "../img/portfolio/japan/japan3.png",
    "../img/portfolio/japan/japan4.png",
    "../img/portfolio/japan/japan5.png",
    "../img/portfolio/japan/japan6.png",
  ],
  
  graphic: [
    "../img/portfolio/graphic/graphic1.png",
    "../img/portfolio/graphic/graphic2.png",
    "../img/portfolio/graphic/graphic3.png",
    "../img/portfolio/graphic/graphic4.png",
    "../img/portfolio/graphic/graphic5.png",
    "../img/portfolio/graphic/graphic6.png",
  ]
};

const tabButtons = document.querySelectorAll('.portfolio-tabs .tab-button');
const portfolioPicWrap = document.querySelector('.portfolio-pic-wrap');

tabButtons.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabButtons.forEach(activeBut =>{
      activeBut.classList.remove('portfolio-active-tab');
      activeBut.className = 'tab-button';
    })
    console.log(tabButtons)
    tab.className = 'portfolio-active-tab';
  })
})
//portfolio section end 