$( ".notif-icons li.pchart" ).click(function() {
	$('.xcase,.xcloud, .ycase, .ychart, .yusers, .ylist, .ysettings').hide();
  $(this).children( ".dropit" ).toggle();
  
});

$( ".notif-icons li.bcase" ).click(function() {
	$('.xchart,.xcloud, .ycase, .ychart, .yusers, .ylist, .ysettings').hide();
  $(this).children( ".dropit" ).toggle();
  
});

$( ".notif-icons li.bcloud" ).click(function() {
	$('.xchart,.xcase, .ycase, .ychart, .yusers, .ylist, .ysettings').hide();
  $(this).children( ".dropit" ).toggle();
  
});



$(".sidenav li.listicon").click(function() {
  $('.xcase,.xcloud,.xchart, .ycase, .ychart, .yusers, .ysettings').hide();
  $(this).children( ".dropit2" ).toggle();
  
});



$(".sidenav li.tbsettings").click(function() {
  $('.xcase,.xcloud,.xchart, .ycase, .ychart, .yusers, .ylist').hide();
  $(this).children( ".dropit2" ).toggle();
  
});



$(".sidenav li.piechart").click(function() {
  $('.xcase,.xcloud,.xchart, .ycase, .ylist, .yusers, .ysettings').hide();
  $(this).children( ".dropit2" ).toggle();
  
});

$(".sidenav li.briefc").click(function() {
  $('.xcase,.xcloud,.xchart, .ychart, .ylist, .yusers, .ysettings').hide();
  $(this).children( ".dropit2" ).toggle();
  
});

$(".sidenav li.fausers").click(function() {
  $('.xcase,.xcloud,.xchart, .ychart, .ylist, .ycase, .ysettings').hide();
  $(this).children( ".dropit2" ).toggle();
  
});

$(".pchart a").click(function() {
  $(".az-btn span, .srch-btn span").removeClass("bluehover");
  $(".bcase a, .bcloud a").removeClass("ahover");
   if($(this).hasClass("ahover")) {
           $(this).removeClass("ahover");
        } else {
          $(this).addClass("ahover");
        }
});

$(".bcase a").click(function() {
  $(".az-btn span, .srch-btn span").removeClass("bluehover");
  $(".pchart a, .bcloud a").removeClass("ahover");
   if($(this).hasClass("ahover")) {
           $(this).removeClass("ahover");
        } else {
          $(this).addClass("ahover");
        }
});

$(".bcloud a").click(function() {
  $(".az-btn span, .srch-btn span").removeClass("bluehover");
  $(".pchart a, .bcase a").removeClass("ahover");
   if($(this).hasClass("ahover")) {
           $(this).removeClass("ahover");
        } else {
          $(this).addClass("ahover");
        }
});


$(".srch-btn").click(function() {
  $(".az-btn span").removeClass("bluehover");
 $('.az').hide();
   if($(".srch-btn span").hasClass("bluehover")) {
           $(".srch-btn span").removeClass("bluehover");
        } else {
          $(".srch-btn span").addClass("bluehover");
        }

  $( ".srchform" ).toggle();


  
});





$(".az-btn").click(function() {
$(".srch-btn span").removeClass("bluehover");
$('.srchform').hide();
   if($(".az-btn span").hasClass("bluehover")) {
           $(".az-btn span").removeClass("bluehover");
        } else {
          $(".az-btn span").addClass("bluehover");
        }

  $( ".az" ).toggle();


  
});


$( ".drop-details" ).click(function() {


 if( $(this).parent(".transaction-row").hasClass("active")) {
   $(this).parent(".transaction-row").find( ".details-wrap" ).slideToggle("fast");
           $(this).parent(".transaction-row").find(".iup").addClass("invi");
            $(this).parent(".transaction-row").find(".idown").removeClass("invi");
           $(this).parent(".transaction-row").removeClass("active");
        } else {
          $(this).parent(".transaction-row").find( ".details-wrap" ).slideToggle("fast");
            $(this).parent(".transaction-row").find(".iup").removeClass("invi");
            $(this).parent(".transaction-row").find(".idown").addClass("invi");
            $(this).parent(".transaction-row").addClass("active");
        }
   
  
});


$( ".drop-approve" ).click(function() {


 $(this).parent().find(".details-wrap").slideToggle("fast");

   if ($(this).parent().find(".iup").hasClass("invi")) {
        $(this).parent().find(".iup").removeClass("invi");
            $(this).parent().find(".idown").addClass("invi");

   } else {

     $(this).parent().find(".iup").addClass("invi");
            $(this).parent().find(".idown").removeClass("invi");
   }
   
  
});



$( ".transaction-row > a, .tbsettings > a, .drop-approve " ).click(function( event ) {
  event.preventDefault();
  
});

//$( ".drop-approve" ).click(function( event ) {
//  event.preventDefault();
  
//});


$( ".closeit-modal, .cancel-btn" ).click(function() {

       $(".bcase-login, .addnew").css("display","none");
       
});

$( ".addbtn" ).click(function() {

       $(".addnew").css("display","block");
       
});


$( "#panel2-1 .delbtn" ).click(function() {
var atLeastOneIsChecked = $('input[name="check[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".deletefile").css("display","block");

     } else {


     }
       
});

$( "#panel2-1 .file-btn" ).click(function() {
var atLeastOneIsChecked = $('input[name="check[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".filefile").css("display","block");

     } else {


     }
       
});


$( ".ppphint, .catbtn" ).click(function() {

       $(".payment-profile, .profile-cat").css("display","block");
      
       
});


$( "#panel2-1 .dl-btn" ).click(function() {
var atLeastOneIsChecked = $('input[name="check[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".dldl").css("display","block");

     } else {


     }
       
});



$( "#panel2-2 .delbtn" ).click(function() {
var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".deletefile").css("display","block");

     } else {


     }
       
});

$( "#panel2-2 .file-btn" ).click(function() {
var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".filefile").css("display","block");

     } else {


     }
       
});


$( "#panel2-2 .dl-btn" ).click(function() {
var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".dldl").css("display","block");

     } else {


     }
       
});


$( "#panel2-2 .dl-btn" ).click(function() {
var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length;

if ( atLeastOneIsChecked !== 0) {
       
       $(".payment-profile").css("display","block");

     } else {


     }
       
});




$( ".upload-btn" ).click(function() {

       $(".uploadfiles").css("display","block");
       
});





$( ".approve-it" ).click(function() {


   if ($(this).is(':checked') ) {
       $(this).closest(".transaction-row").addClass("active");
          
   } else {

   $(this).closest(".transaction-row").removeClass("active");

   }
   
  
});


$(document).ready(function() {

$( ".foldercont .selected .icon-folder" ).removeClass("icon-folder").addClass("icon-folder-open");

 


});

$(document).ready(function() {
    $('#selectall').click(function() {  //on click 
        if(this.checked) { // check select status
            $('#panel2-1 .approve-it').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1" 
                 $(this).closest(".transaction-row").addClass("active");              
            });
        }else{
            $('#panel2-1 .approve-it').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"  
                $(this).closest(".transaction-row").removeClass("active");                     
            });         
        }
    });
    
});



$(document).ready(function() {
    $('#selectallunf').click(function() {  //on click 
        if(this.checked) { // check select status
            $('#panel2-2 .approve-it').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1" 
                 $(this).closest(".transaction-row").addClass("active");              
            });
        }else{
            $('#panel2-2 .approve-it').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"  
                $(this).closest(".transaction-row").removeClass("active");                     
            });         
        }
    });
    
});


//$(".block_header").click(function(e) {
 //   $('.block_header span').not($(this).find('span')).toggleClass("collapse expand");

  //  $('.container').not($(this).next()).slideToggle();
//});

$(document).click(function(event) {
    if(!$(event.target).closest('.notif-icons li, .dropit, .sidenav li, .dropit2').length) {
     //$('.notif-icons li').show();
     $(".pchart a").removeClass("ahover");
     $(".bcase a").removeClass("ahover");
     $(".bcloudt a").removeClass("ahover");
        if($('.dropit, .dropit2').is(":visible")) {
            $('.dropit, .dropit2').hide();
            
        }
    }       
});



$( ".frontbox" ).click(function() {

  $( ".frontbox" ).show();
  $(this).hide();
  $(".after-click").addClass("hide");
  $(this).parent(".reportbox-wrap").find(".after-click").removeClass("hide").addClass("show");

  //$(".activity, .category-detail").addClass("show");

   //$(".reportbox2.after-click").delay(10000).removeClass("show");
   
  
});

$( ".frontbox a" ).click(function( event ) {
  event.preventDefault();
});

//$( ".slidenav > li > a" ).click(function( event ) {
 // event.preventDefault();
//});

$(document).click(function(event) {
    if(!$(event.target).closest('.srch-btn, .srchform, .az-btn, .az').length) {
  
        if($('.srchform').is(":visible") || $('.az').is(":visible")) {
            $('.srchform').hide();
            $('.az').hide();
             $(".az-btn span, .srch-btn span").removeClass("bluehover");

        }
    }       
});

$( ".has-tip" ).click(function() {
$(".tips").toggle();

});



