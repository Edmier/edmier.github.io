"use strict";

window.onload = function () {
  document.getElementById('snakebtn').addEventListener("click", function () {
    var snake = document.getElementById('snake');
    snake.toggleAttribute('hidden');
    setTimeout(function () {
      //Reloads the frame
      var frame = document.getElementById('snakeframe');
      frame.src += '';
      frame.focus();
    }, 10);
  });
};

var skills = Array.from(document.getElementsByClassName('lang'));
var year = new Date().getFullYear();
var biggest = 0;
skills.forEach(function (skill) {
  biggest = Math.max(year - skill.dataset.startyear, biggest);
});
console.log(biggest);
skills.forEach(function (skill) {
  var startyear = skill.dataset.startyear;
  var fill = document.createElement('div');
  fill.classList.add('fill');
  fill.style.width = (year - startyear) / biggest * 80 + '%';
  var pre = document.createElement('pre');
  pre.innerText = year - startyear + " years";
  pre.style.left = (year - startyear) / biggest * 80 + '%';
  skill.appendChild(fill);
  skill.appendChild(pre);
});