$(document).ready(function(){
  AOS.init();

/*******Typing words******/
// get the element
const text = document.querySelector('.type-it');
// words
const words = [
  "המעגל האקדמי שלך",
  "קשרים חדשים",
  "תחומי עניין משותפים",
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 80;
  const WORD_STAY_DELAY = 3000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

 
 /******login slider******/
 //var
 var $nav = $('#login-nav'),
 $line = $('<div>').appendTo($nav),
 $activeLi,
 lineWidth,
 liPos;

 function refresh() {
 $activeLi = $nav.find('a.active');
 lineWidth = $activeLi.outerWidth();
 liPos = $activeLi.position().left;
 }
 refresh();

 //line setup
 function lineSet() {
 $line.css({
 'position':'absolute',
 'background-color':'#3b68ff',
 'bottom':'-5px',
 'height':'2px'
 }).animate({
 'left':liPos,
 'width':lineWidth
 }, 200);
 }
 lineSet();  

 //on click
 $nav.find('a').on('click', function() {
 $activeLi.removeClass('active');
 $(this).addClass('active');
 refresh();
 lineSet();
 });
/**********************/
$(".form-slider").hide();
$(".form-slider:first").show();

 $("#login-nav li a").click(function() {
  $(".form-slider").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
 });

 $('#register-btn').click(function(){
  $(".disappear").fadeOut(700);

  setTimeout(function(){
    $("body").load("registration.html #container");

}, 2000);
  // $("#login").animate({opacity: 1},4000);
  // $('#container').hide().load("registration.html #container").fadeIn('500');
  // $( "body" ).load( "registration.html #container" );
});

});