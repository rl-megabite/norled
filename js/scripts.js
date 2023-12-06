
// $(document).ready(function(){
        
//     console.log( "...ready!" );

//     let headerFull = $(".et_pb_section.et_pb_section_1_tb_header");


//     $(".mbHamburgerIcon").click(function() {
//         $("headerFull").toggleClass("nowShown");
//     });
    

// });


/* How to Make the Divi Accordion Closed */
jQuery(function($){
    $('.et_pb_accordion .et_pb_toggle_open').addClass('et_pb_toggle_close').removeClass('et_pb_toggle_open');

    $('.et_pb_accordion .et_pb_toggle').click(function() {
      $this = $(this);
      setTimeout(function(){
         $this.closest('.et_pb_accordion').removeClass('et_pb_accordion_toggling');
      }), 1;
    });
});

    /* Browser Back Button In Divi - for posts layout*/	
    jQuery(document).ready(function() {

        jQuery("#pa-back-button").attr('href', '#');

        jQuery("#pa-back-button").click(function(e) {
            // prevent default behaviorlogitec
            e.preventDefault();
            // Go back 1 page
            window.history.back();
        });
    }); 
	
jQuery(function($){
  $('.et_pb_toggle_title').click(function(){
    var $toggle = $(this).closest('.et_pb_toggle');
    if (!$toggle.hasClass('et_pb_accordion_toggling')) {
      var $accordion = $toggle.closest('.et_pb_accordion');
      if ($toggle.hasClass('et_pb_toggle_open')) {
        $accordion.addClass('et_pb_accordion_toggling');
        $toggle.find('.et_pb_toggle_content').slideToggle(700, function() { 
          $toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');		
        });
      }
      setTimeout(function(){ 
        $accordion.removeClass('et_pb_accordion_toggling'); 
      }, 750);
    }
  });
});

let mbHamburgerIcon = document.querySelector(".mbHamburgerIcon");
let mbHamburgerIconFooter = document.querySelector(".mbHamburgerIconFooter");
let mbFullPageMenu = document.querySelector('.mbFullPageMenu');
let mbTopp = document.querySelector('.mbTopp');
let mbCloseMenuIcon = document.querySelector('#mbCloseMenuIcon');

mbCloseMenuIcon.addEventListener("click", openMenuFunctionDesktop);

mbHamburgerIcon.addEventListener("click", openMenuFunctionDesktop);

function openMenuFunctionDesktop() {
    mbFullPageMenu.classList.toggle("showDropdownDesktop");
    
    if ( mbHamburgerIconMob.classList.contains("showDropdownDesktop") ) {
        mbFullPageMenu.classList.add("showDesktopMenu");
    } else {
        mbFullPageMenu.classList.remove("showDesktopMenu");
    }
}

// footer
mbHamburgerIconFooter.addEventListener("click", openMenuFunctionDesktopFooter);

function openMenuFunctionDesktopFooter() {
    mbFullPageMenu.classList.toggle("showDropdownDesktop");
    
    if ( mbHamburgerIconMob.classList.contains("showDropdownDesktop") ) {
        mbFullPageMenu.classList.add("showDesktopMenu");
    } else {
        mbFullPageMenu.classList.remove("showDesktopMenu");
    }
}

// mobile
let mbHamburgerIconMob = document.querySelector(".mbHamburgerIconMob");
let mbFullPageMenuMob = document.querySelector('.mbFullPageMenuMob');

mbFullPageMenuMob.style.display = "none";
mbHamburgerIconMob.addEventListener("click", openMenuFunctionMob);


function openMenuFunctionMob() {
mbHamburgerIconMob.classList.toggle("showDropdownMob");

if (mbHamburgerIconMob.classList.contains("showDropdownMob")) {
mbFullPageMenuMob.style.display = "block";
} else {
mbFullPageMenuMob.style.display = "none";
}
}


