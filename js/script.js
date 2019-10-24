
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
let activeTabIndex ;

const tabPortfolio = document.querySelectorAll('.tab-button');
const portfolioPicWrap = document.querySelectorAll('.portfolio-pic-wrap');


function selectActiveTab(arrayTabs, arrayWrapper){
  arrayTabs.forEach(tab => {
    tab.addEventListener('click', selectTab)
  });
  
  function selectTab(){
    arrayTabs.forEach(activeTab => {
      activeTab.classList.remove('active-tab');
    });
    activeTabIndex = this.getAttribute('data-tab-name');
    this.classList.add('active-tab');
    selectPicWrapper(activeTabIndex);
  }
  
  
  const selectPicWrapper = (activeTabIndex) => {
    arrayWrapper.forEach(item =>{
      item.classList.contains(activeTabIndex) ? item.classList.add('active-tab') :
      item.classList.remove('active-tab')
    });
  };
}

selectActiveTab(tabPortfolio, portfolioPicWrap);

//portfolio section end 




// tattoo care start

const tabTattooCare = document.querySelectorAll('.care-tab');
const wrapTattooCare = document.querySelectorAll('.wrapTattooCare');

selectActiveTab(tabTattooCare, wrapTattooCare);

// tattoo care end


