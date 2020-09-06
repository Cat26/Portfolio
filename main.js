const email = document.querySelector('.email');
const sectionButtons = document.querySelectorAll('.section-btn');
const changeFontBtn = document.querySelector('.change-font-btn');
const activeSection = document.querySelector('.portfolio-active-section');

let currentSectionFont = 1;

const portfolioSections = {
    about: "about/portfolio-about.html",
    skills: "skills/portfolio-skills.html",
    main: "main-project/portfolio-main-project.html",
    little: "little-projects/portfolio-little-projects.html"
}

getSectionData('about');

email.addEventListener('click', e => {
    email.textContent = 'julia.joanna.hardy@gmail.com'
});

changeFontBtn.addEventListener('click', e => {
    if(currentSectionFont === 1) {
        activeSection.style.fontFamily = 'sans-serif';
        changeFontBtn.innerHTML = 'Change font to more fancy'
        currentSectionFont = 2;
    } else {
        activeSection.style.fontFamily = 'dancingScript,sans-serif';
        changeFontBtn.innerHTML= 'Change font to more readable';
        currentSectionFont = 1;
    }
});

function handleSectionsSwitch(el) {
    const activeSection = document.querySelector('.active');
    const clickedSection = el.id;
    getSectionData(clickedSection);
    activeSection.classList.remove('active');
    el.classList.add('active');
}

function getSectionData(sectionName) {
    const sectionPath = portfolioSections[sectionName];
    fetch(sectionPath)
        .then(response => {
            return response.text()
        })
        .then(data => {
            activeSection.innerHTML = data;
        });
}

function switchToNextSection() {
    const currentSectionId = document.querySelector('.active').id;
    const sectionButtonsList = [...sectionButtons];
    let nextSectionId = sectionButtonsList.findIndex(el => el.id === currentSectionId) + 1;
    if(nextSectionId >= sectionButtonsList.length) {
        nextSectionId = 0;
    }
    handleSectionsSwitch(sectionButtonsList[nextSectionId]);
}
