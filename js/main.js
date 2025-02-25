 AOS.init({
     duration: 800,
     easing: 'slide'
 });

 $(document).ready(function($) {

     "use strict";

     $(window).stellar({
         responsive: false,
         parallaxBackgrounds: true,
         parallaxElements: true,
         horizontalScrolling: false,
         hideDistantElements: false,
         scrollProperty: 'scroll'
     });


     // loader
     var loader = function() {
         setTimeout(function() {
             if ($('#ftco-loader').length > 0) {
                 $('#ftco-loader').removeClass('show');
             }
         }, 1);
     };
     loader();

     var carousel = function() {
         $('.carousel').owlCarousel({
             loop: true,
             margin: 10,
             nav: true,
             stagePadding: 5,
             nav: false,
             navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
             responsive: {
                 0: {
                     items: 1
                 },
                 600: {
                     items: 2
                 },
                 1000: {
                     items: 3
                 }
             }
         });

         $('.nonloop-block-13').owlCarousel({
             center: false,
             items: 1,
             loop: false,
             stagePadding: 0,
             margin: 20,
             nav: true,
             navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
             responsive: {
                 600: {
                     margin: 20,
                     items: 2
                 },
                 1000: {
                     margin: 20,
                     items: 2
                 },
                 1200: {
                     margin: 20,
                     items: 3
                 }
             }
         });

         $('.loop-block-31').owlCarousel({
             loop: false,
             mouseDrag: false,
             touchDrag: false,
             margin: 0,
             nav: true,
             items: 1,
             autoplay: true,
             stagePadding: 0,
             nav: true,
             navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
             animateOut: 'fadeOut',
             animateIn: 'fadeIn',
         });

         $('.nonloop-block-11').owlCarousel({
             center: true,
             items: 1,
             loop: false,
             stagePadding: 0,
             margin: 30,
             nav: true,
             navText: ['<span class="ion-md-arrow-back">', '<span class="ion-md-arrow-forward">'],
             responsive: {
                 600: {
                     stagePadding: 0,
                     items: 1
                 },
                 800: {
                     stagePadding: 40,
                     items: 2
                 },
                 1000: {
                     stagePadding: 80,
                     items: 3
                 }
             }
         });

         $('.nonloop').owlCarousel({
             center: true,
             items: 2,
             loop: false,
             margin: 10,
             nav: true,
             navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
             responsive: {
                 600: {
                     items: 2
                 }
             }
         });
     };
     carousel();

     // scroll
     var scrollWindow = function() {
         $(window).scroll(function() {
             var $w = $(this),
                 st = $w.scrollTop(),
                 navbar = $('.ftco_navbar'),
                 sd = $('.js-scroll-wrap');

             if (st > 150) {
                 if (!navbar.hasClass('scrolled')) {
                     navbar.addClass('scrolled');
                 }
             }
             if (st < 150) {
                 if (navbar.hasClass('scrolled')) {
                     navbar.removeClass('scrolled sleep');
                 }
             }
             if (st > 350) {
                 if (!navbar.hasClass('awake')) {
                     navbar.addClass('awake');
                 }

                 if (sd.length > 0) {
                     sd.addClass('sleep');
                 }
             }
             if (st < 350) {
                 if (navbar.hasClass('awake')) {
                     navbar.removeClass('awake');
                     navbar.addClass('sleep');
                 }
                 if (sd.length > 0) {
                     sd.removeClass('sleep');
                 }
             }
         });
     };
     scrollWindow();

     var counter = function() {

         $('.section-counter').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                 $(this.element).find('.ftco-number').each(function() {
                     var $this = $(this),
                         num = $this.data('number');
                     console.log(num);
                     $this.animateNumber({
                         number: num,
                         numberStep: comma_separator_number_step
                     }, 7000);
                 });

             }

         }, { offset: '95%' });

     }
     counter();



     var contentWayPoint = function() {
         var i = 0;
         $('.ftco-animate').waypoint(function(direction) {

             if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                 i++;

                 $(this.element).addClass('item-animate');
                 setTimeout(function() {

                     $('body .ftco-animate.item-animate').each(function(k) {
                         var el = $(this);
                         setTimeout(function() {
                             var effect = el.data('animate-effect');
                             if (effect === 'fadeIn') {
                                 el.addClass('fadeIn ftco-animated');
                             } else if (effect === 'fadeInLeft') {
                                 el.addClass('fadeInLeft ftco-animated');
                             } else if (effect === 'fadeInRight') {
                                 el.addClass('fadeInRight ftco-animated');
                             } else {
                                 el.addClass('fadeInUp ftco-animated');
                             }
                             el.removeClass('item-animate');
                         }, k * 50, 'easeInOutExpo');
                     });

                 }, 100);

             }

         }, { offset: '95%' });
     };
     contentWayPoint();

     // navigation
     var OnePageNav = function() {
         $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
             e.preventDefault();

             var hash = this.hash,
                 navToggler = $('.navbar-toggler');
             $('html, body').animate({
                 scrollTop: $(hash).offset().top
             }, 700, 'easeInOutExpo', function() {
                 window.location.hash = hash;
             });


             if (navToggler.is(':visible')) {
                 navToggler.click();
             }
         });
         $('body').on('activate.bs.scrollspy', function() {
             console.log('nice');
         })
     };
     OnePageNav();


     // magnific popup
     $('.image-popup').magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         closeBtnInside: false,
         fixedContentPos: true,
         mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
             verticalFit: true
         },
         zoom: {
             enabled: true,
             duration: 300 // don't foget to change the duration also in CSS
         }
     });

     $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
     });

     $('#checkin_date, #checkout_date').datepicker({
         'format': 'd MM, yyyy',
         'autoclose': true
     });



 });

 // EmailJs  Form 

 (function() {
     // https://dashboard.emailjs.com/admin/account
     emailjs.init({
         publicKey: "OYH7b8iMgNlOxb8jr",
     });
 })();


 $("#contact-form").submit(function(event) {
     event.preventDefault(); // Prevent default form submission

     //  Getting Variables
     var name = $("#name").val();
     var emailForm = $("#email").val();
     var subject = $("#subject").val();
     var message = $("#message").val();
     var contactNumber = Math.floor(Math.random() * 1000000);

     // Email Verification
     function validate(email) {
         const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         return emailValidation.test(email);
     }

     //Error Message

     //  Name Error

     if (name === "") {
         $("#name-error").removeClass("d-none");
     } else {
         $("#name-error").addClass("d-none");
     }

     // email Error

     if (emailForm === "") {
         $("#email-error").text("This field is required");
     } else if (validate(emailForm)) {
         $("#email-error").text("");
     } else {
         $("#email-error").text("Please enter a valid email address");
     }

     //  Subject Error

     if (subject === "") {
         $("#subject-error").removeClass("d-none");
     } else {
         $("#subject-error").addClass("d-none")
     }

     //  Message Error

     if (message === "") {
         $("#message-error").removeClass("d-none");
     } else {
         $("#message-error").addClass("d-none");
     }


     if (name !== "" && emailForm !== "" && subject !== "" && message !== "" && validate(emailForm)) {;

         var templateParams = {
             user_name: name,
             user_email: emailForm,
             subject: subject,
             message: message,
             contact_number: contactNumber,
         };

         emailjs.send("service_roq19pd", "contact_form", templateParams)
             .then(function(response) {
                 $(".success-email").text(emailForm);
                 $("#contact-form")[0].reset(); // Reset form
                 $("#staticBackdrop").modal("show"); // Pop up Success
             }, function(error) {
                 alert("❌ Failed to send message.");
             });

     }
 });



 //  Payment Script

 $("#make-payment").submit(function(event) {
     event.preventDefault(); // Prevent default form submission

     isValid = true;

     // Getting Variables
     var name = $("#name").val();
     var emailForm = $("#email").val();
     var phoneNo = $("#phone-number").val();
     var amount = $("#amount-paid").val();
     var currency = $('[name="currency"]:checked').val();

     // Email Verification
     function validate(email) {
         const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         return emailValidation.test(email);
     }

     //  Number Validation
     var numberValidation = /^\d+(\.\d{1,2})?$/; // Regular expression to allow only digits (0-9);

     //  Phone Number Validation
     var phoneValidation = /^\+?\d{7,15}$/;

     // Error Message
     //  Name Error

     if (name === "") {
         $("#name-error").removeClass("d-none");
         isValid = false;
     } else {
         $("#name-error").addClass("d-none");
     }

     //  email Error

     if (emailForm === "") {
         $("#email-error").text("This field is required");
         isValid = false;
     } else if (!validate(emailForm)) {
         $("#email-error").text("Please enter a valid email address");
         isValid = false;
     } else {
         $("#email-error").text("");
     }

     //  Phone Number Error

     if (phoneNo === "") {
         $("#phone-error").text("This field is required");
         isValid = false;
     } else if (!phoneValidation.test(phoneNo)) {
         $("#phone-error").text("Please Enter a Valid Phone Number");
         isValid = false;
     } else {
         $("#phone-error").text("")
     }

     //  Amount Validation

     if (amount === "") {
         $("#amount-error").text("This field is required");
         isValid = false;
     } else if (!numberValidation.test(amount)) {
         $("#amount-error").text("Please enter a valid Amount");
         isValid = false;
     } else {
         $("#amount-error").text("");
     }

     //  Currency Validation

     if (!currency) {
         $("#select-currency").removeClass("d-none");
         isValid = false;
     } else {
         $("#select-currency").addClass("d-none")
     }

     if (isValid) {

         FlutterwaveCheckout({
             public_key: "FLWPUBK-266b07023e924dd76713dc1b05600ee1-X",
             tx_ref: "TX_REF_" + Math.floor(Math.random() * 10000000),
             amount: amount,
             currency: currency,
             payment_options: 'card, mobilemoneyghana, ussd, banktransfer, ussd, opay, account, googlepay, applepay',
             redirect_url: 'https://glaciers.titanic.com/handle-flutterwave-payment',
             meta: {
                 consumer_id: 23,
                 consumer_mac: '92a3-912ba-1192a',
             },
             customer: {
                 email: emailForm,
                 phone_number: phoneNo,
                 name: name,
             },
             customizations: {
                 title: 'Luminary Outreach Foundation',
                 description: 'Donation Payment',
                 logo: 'https://luminaryoutreachfoundation.org/images/logo.jpg',
             },
         });

     }

 });

 function closeBanner() {
     document.getElementById("stickyBanner").style.display = "none";
 }