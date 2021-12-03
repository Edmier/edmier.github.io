const skills = Array.from(document.getElementsByClassName('lang'));
const year = new Date().getFullYear();
skills.forEach(skill => {
    const startyear = skill.dataset.startyear;
    const fill = document.createElement('div');
    fill.classList.add('fill');
    fill.style.width = ((year - startyear) * 10) + '%';

    skill.appendChild(fill);
});