
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


//modal-win start

const portfolioPic = document.querySelectorAll('.portfolio-pic');
const modalWin = document.querySelector('.modal-win');
const close = document.querySelector('.close');
const modalImg = document.querySelector('#modal-img');


portfolioPic.forEach(img =>{
  img.addEventListener('click',setImgInModal);
});
close.addEventListener('click', closeModal);



function setImgInModal(){
  modalWin.style.display = "flex";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  arrowTop.style.display  = "none";
}

function closeModal(){
  modalWin.style.display = "none";
  arrowTop.style.display  = "flex";
}

//modal-win end

//modal profile start

const linkToProfile = document.querySelectorAll('.click-to-profile');
const profileAva = document.querySelector('.profile-ava');

linkToProfile.forEach(img =>{
  img.addEventListener('click',getProfile);
});

function getProfile(){
  modalWin.style.display = "flex";
  arrowTop.style.display  = "none";
}
//modal profile end