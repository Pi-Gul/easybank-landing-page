const test = document.getElementById('test');
const buttonsArray = document.querySelectorAll('.invite-button');
const navItemsArray = document.querySelectorAll('.nav-bar-list li');
const socialListIconsArray = document.querySelectorAll('.social-list-icon');

test.innerHTML = '!WORKS!';

//highlighting the buttons
function highlightButton(ev) {
  ev.target.style.backgroundImage = 'linear-gradient(to right, hsl(136, 65%, 75%), hsl(192, 70%, 75%)'
  ev.target.style.cursor = 'pointer';
};
function resetButton(ev) {
  ev.target.style.backgroundImage = 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%)'
};
for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener('mouseenter', highlightButton);
  buttonsArray[i].addEventListener('mouseleave', resetButton);
};

//highlighting the nav items
function highlightNavItem(ev) {
  ev.target.style.borderBottom = '3px solid hsl(136, 65%, 51%)';
  ev.target.style.cursor = 'pointer';
};
function resetNavItem(ev) {
  ev.target.style.borderBottom = '3px solid white';
};
for (let i = 0; i < navItemsArray.length; i++) {
  navItemsArray[i].addEventListener('mouseenter', highlightNavItem);
  navItemsArray[i].addEventListener('mouseleave', resetNavItem);
};

//highlighting the social media icons
function highlightSocialIcon(ev) {
  ev.target.style.backgroundColor = 'hsl(136, 65%, 51%)';
};
function resetSocialIcon(ev) {
  ev.target.style.removeProperty('background-color');
};
for (let i = 0; i < socialListIconsArray.length; i++) {
  socialListIconsArray[i].addEventListener('mouseenter', highlightSocialIcon);
  socialListIconsArray[i].addEventListener('mouseleave', resetSocialIcon);
  test.innerHTML = 'ICONS';
}