window.onload = () => {
    document.getElementById('snakebtn').addEventListener("click", () => {
        if (!document.getElementById('snake').hasAttribute('hidden')) {
            document.getElementById('snake').setAttribute('hidden', 'true');
            document.getElementById('snakeframe').src = '';
        } else {
            setTimeout(() => {
                document.getElementById('snake').toggleAttribute('hidden');
                //Reloads the frame
                const frame = document.getElementById('snakeframe');
                frame.src = 'snake/popup.html';
                frame.focus();
            }, 10);
        }
    })

    document.addEventListener("click", () => {
        if (!document.getElementById('snake').hasAttribute('hidden')) {
            document.getElementById('snake').setAttribute('hidden', 'true');
            document.getElementById('snakeframe').src = '';
        }
    })
};


const skills = Array.from(document.getElementsByClassName('lang'));
const year = new Date().getFullYear();
let biggest = 0;

skills.forEach(skill => {
    biggest = Math.max(year - skill.dataset.startyear, biggest);
});

skills.forEach(skill => {
    const startyear = skill.dataset.startyear;

    const fill = document.createElement('div');
    fill.classList.add('fill');
    fill.style.width = ((year - startyear) / biggest * 80) + '%';

    const pre = document.createElement('pre');
    pre.innerText = (year - startyear) + " years";
    pre.style.left = ((year - startyear) / biggest * 80) + '%';
    

    skill.appendChild(fill);
    skill.appendChild(pre);
});

GitHubCalendar(".calendar", "Edmier");

// or enable responsive functionality:
GitHubCalendar(".calendar", "Edmier", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "Edmier", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())