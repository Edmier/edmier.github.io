const skills = Array.from(document.getElementsByClassName('lang'));
const year = new Date().getFullYear();
let biggest = 0;

skills.forEach(skill => {
    biggest = Math.max(year - skill.dataset.startyear, biggest);
});

console.log(biggest);

skills.forEach(skill => {
    const startyear = skill.dataset.startyear;

    const fill = document.createElement('div');
    fill.classList.add('fill');
    fill.style.width = ((year - startyear) / biggest * 100) + '%';

    const pre = document.createElement('pre');
    pre.innerText = (year - startyear) + " years";
    if (+fill.style.width.replace('%', '') > 80) {
        pre.style.textAlign = 'left';
        pre.style.left = ((year - startyear) / biggest * 85) + '%';
        pre.style.color = 'black';
    } else {
        pre.style.left = ((year - startyear) / biggest * 100) + '%';
    }
    

    skill.appendChild(fill);
    skill.appendChild(pre);
});