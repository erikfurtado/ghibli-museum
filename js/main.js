$(document).foundation();
const header = document.querySelector('header');
const headerMenu = header.querySelector('.menu');
const btnMenu = header.querySelector('button.hide-for-large');

// animate menu on/off
btnMenu.addEventListener('click',function(){
  if(headerMenu.classList.contains('show-for-large')){
    // remove Foundation visibility class to unhide menu
    headerMenu.classList.remove('show-for-large');
    // slide menu into place after a pause
    setTimeout(function(){
      // add class to animate menu into place
      headerMenu.classList.add('slide-in');
      // delay button color change until menu is in place
      setTimeout(function(){
        // add toggle state indicator
        btnMenu.classList.add('btnToggle');
        // change button text
        changeBtnText();
      }, 300);
    }, 100);
  } else {
    // remove class to animate menu off the screen
    headerMenu.classList.remove('slide-in');
    // remove toggle state indicator
    btnMenu.classList.remove('btnToggle');
    // change button text
    changeBtnText();
    // hide menu with Foundation visibility class
    setTimeout(function(){
      headerMenu.classList.add('show-for-large');
    }, 500); // 100 delay plus 400 for transition length
  }
})

// change button text for toggled state
function changeBtnText(){
  if(btnMenu.classList.contains('btnToggle')){
    // close icon
    btnMenu.querySelector('img').setAttribute('src','img/x.svg')
  } else {
    // default icon
    btnMenu.querySelector('img').setAttribute('src','img/menu.svg')
  }
}