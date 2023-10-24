'use strict';
var theme = {
  init: function () {
    theme.preloader();
    theme.calcScrollValue();
    theme.stickyHeader();
    theme.subMenu();
    theme.offCanvas();
    theme.swiperSlider();
    theme.aosAnimation();
    theme.lightbox();
    theme.bsTooltips();
    theme.counterUp();
    theme.typejs();
  },

  /*************** Preloader Start **************** */
  preloader: () => {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
      loader.style.display = "none";
    })
  },
/*************** Preloader End **************** */

/******** Scroll to top progress bar cirlce Start ************* */
calcScrollValue: () => {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#1363df ${scrollValue}%, #1363df ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
},
/******** Scroll to top progress bar cirlce End ************* */

/** * Sticky Header 
    * Menu on scroll Start ********************/

stickyHeader: () => {
  document.addEventListener("DOMContentLoaded", function(){
      
    window.addEventListener('scroll', function() {
         
      if (window.scrollY > 200) {
        document.getElementById('header').classList.add('sticky-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
         document.getElementById('header').classList.remove('sticky-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
    });  
  }); 
},

/* ************** Sticky Header End ********************/

/** *  Sub Menus
    *  Enables multilevel dropdown Start ************* */

subMenu: () => {
  document.addEventListener("DOMContentLoaded", function(){
            
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    })

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
       
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
    
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              console.log(nextEl);
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }

            }
        });
      })
    }
    // end if innerWidth  
  });
  
},
/* ***********  Sub Menus Enables multilevel dropdown End ************* */

/**
   *  Offcavas menu for mobile
   *  Enables dark screen, offcanvas-nav Start ********** */

offCanvas: () => {
  function darken_screen(yesno){
    if( yesno == true ){
      document.querySelector('.screen-darken').classList.add('active');
    }
    else if(yesno == false){
      document.querySelector('.screen-darken').classList.remove('active');
    }
  }
  
  function close_offcanvas(){
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
  }

  function show_offcanvas(offcanvas_id){
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
  }

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement){
      
      let offcanvas_id = everyelement.getAttribute('data-trigger');
      
      everyelement.addEventListener('click', function (e) {
        e.preventDefault();
            show_offcanvas(offcanvas_id);
          
      });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton){
      
      everybutton.addEventListener('click', function (e) {
        e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event){
      close_offcanvas();
    });
    
    }); 
  // DOMContentLoaded  end
},
/* ******* Offcavas menu for mobile End ********** */

/**
   *  Swiper Slider
   *  Reqires assets/plugins/Swiper-slider/swiper-bundle.min.js *********** */
swiperSlider: function() {
  var swiper = new Swiper('.swiper-demo-01', {
    loop: true,
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper-demo-02', {
    loop: true,
    autoplay: 5000,
    speed: 800,
    autoplayDisableOnInteraction: false,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

/* ******** swiper thumbnail slider For Product Detial page ******** */
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
/* ****** swiper thumbnail slider End ******** */
  
},
/* *********** Swiper Slider End *********** */

/************* AOS.js Animation on scroll library Start *********** */
aosAnimation: () => {
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
},
/************* AOS.js Animation on scroll library End *********** */

/* ******* Lightbox popup gallery for Images and Videos Start ******* */
lightbox: () => {
  var lightbox = GLightbox();
  lightbox.on('open', (target) => {
    console.log('lightbox opened');
  });
  var lightboxDescription = GLightbox({
    selector: '.glightbox2'
  });
  var lightboxVideo = GLightbox({
    selector: '.glightbox3'
  });
  lightboxVideo.on('slide_changed', ({ prev, current }) => {
    console.log('Prev slide', prev);
    console.log('Current slide', current);

    const { slideIndex, slideNode, slideConfig, player } = current;

    if (player) {
      if (!player.ready) {
        // If player is not ready
        player.on('ready', (event) => {
          // Do something when video is ready
        });
      }

      player.on('play', (event) => {
        console.log('Started play');
      });

      player.on('volumechange', (event) => {
        console.log('Volume change');
      });

      player.on('ended', (event) => {
        console.log('Video ended');
      });
    }
  });

  var lightboxInlineIframe = GLightbox({
    selector: '.glightbox4'
  });
  
},
/* ******** Lightbox popup gallery End ********** */

/* ******** Bootstrap Tooltip Start ******** */
bsTooltips: () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

},
/* ******** Bootstrap Tooltip End ******** */

/* Counter 
* Reqires
* assets/plugins/counter/jquery.min.js
* assets/plugins/counter/waypoints.min.js
* assets/plugins/counter/jquery.counterup.min.js ****************** */
counterUp: () => {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
},
/* ******* Counter End ********* */


/* Type js */
typejs: () => {

  var typed = new Typed(".auto-type", {
    strings:["Web Design", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

},

}
theme.init();











