// Created on iPad.
// add hovered class in selected list item
const listItems = document.querySelectorAll('.navigation li');

function activeLink() {
    listItems.forEach(item => item.classList.remove('hovered'));
    this.classList.add('hovered');
}

listItems.forEach(item => item.addEventListener('mouseover', activeLink))

// Menu toggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');


toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
