
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
const closeImg = document.querySelector('.close-img');
const modalImg = document.querySelector('#modal-img');


portfolioPic.forEach(img =>{
  img.addEventListener('click',setImgInModal);
});


const close = ()=>{
  closeImg.addEventListener('click', ()=>{
    closeModal(modalWin);
  });
}

function setImgInModal(){
  modalWin.style.display = "flex";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  arrowTop.style.display  = "none";
}

function closeModal(modal){
  modal.style.display = "none";
  arrowTop.style.display  = "flex";
}

close();
//modal-win end



//modal profile start

const linkToProfile = document.querySelectorAll('.click-to-profile');
const modalProfiles = document.querySelectorAll('.modal-profile');
const closeProfile = document.querySelectorAll('.close-profile');
let selectedProfile;



function linkToProfileFunc(){
  linkToProfile.forEach(link =>{
    link.addEventListener('click',getProfile);
  });  
}

function getProfile(){
  selectedProfile = this.getAttribute('data-profile');
  arrowTop.style.display  = "none";
  setSelectedProfileAtrb(selectedProfile);
}

  
function setSelectedProfileAtrb(selectedProfile){
  modalProfiles.forEach(profile =>{
    if(profile.classList.contains(selectedProfile)){
      profile.classList.add('selected-profile');
    }
  });
};

function closeProfileFunc (){
  closeProfile.forEach(but =>{
    but.addEventListener('click', ()=>{
      modalProfiles.forEach(profile =>{
          profile.classList.remove('selected-profile');
      });
    });
  });
}

closeProfileFunc ();
linkToProfileFunc();

//modal profile end


