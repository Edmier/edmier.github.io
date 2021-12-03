"use strict";

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
  fill.style.width = (year - startyear) / biggest * 100 + '%';
  var pre = document.createElement('pre');
  pre.innerText = year - startyear + " years";

  if (+fill.style.width.replace('%', '') > 80) {
    pre.style.textAlign = 'left';
    pre.style.left = (year - startyear) / biggest * 85 + '%';
    pre.style.color = 'black';
  } else {
    pre.style.left = (year - startyear) / biggest * 100 + '%';
  }

  skill.appendChild(fill);
  skill.appendChild(pre);
});