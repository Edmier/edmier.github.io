"use strict";

var skills = Array.from(document.getElementsByClassName('lang'));
var year = new Date().getFullYear();
skills.forEach(function (skill) {
  var startyear = skill.dataset.startyear;
  var fill = document.createElement('div');
  fill.classList.add('fill');
  fill.style.width = (year - startyear) * 10 + '%';
  var pre = document.createElement('pre');
  pre.innerText = year - startyear + " years";
  pre.style.left = (year - startyear) * 10 + '%';
  skill.appendChild(fill);
  skill.appendChild(pre);
});