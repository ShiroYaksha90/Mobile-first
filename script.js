/*  mobile menue  */
const hamburger = document.querySelector('.hamburger');
const navDesktop = document.querySelector('.nav-mobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navDesktop.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navDesktop.classList.remove('active');
}));

/*  popup  */
const mainProject = {
  headTitle: 'Multi-Post Stories',
  headImg: 'Img-Placeholder.svg.png',
  headDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  headLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
  liveLink: 'https://shiroyaksha90.github.io/',
  projLink: 'https://github.com/ShiroYaksha90/Mobile-first',
};
const headTitle = document.querySelector('.multi-desktop .multi');
const headImg = document.queryCommandIndeterm('image-poster');
const headDesc = document.querySelector('.multi-paragraph');
const headLanguages = document.querySelector('.ul-lang');
let lang = '';
mainProject.headLanguages.forEach((proTech) => {
  lang = `${lang}<li>${proTech}</li>`;
});
headTitle.innerHTML = mainProject.headTitle;
headImg.src = `images/${mainProject.headImg}`;
headDesc.innerHTML = mainProject.headDesc;
headLanguages.innerHTML = lang;

const procards = [
  {
    cardId: 1,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
  {
    cardId: 2,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
  {
    cardId: 3,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
  {
    cardId: 4,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
  {
    cardId: 5,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
  {
    cardId: 6,
    cardTitle: 'Profesional Art Printing Data',
    cardDesc: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard",
    cardImg: 'profesional.png',
    cardLang: ['html', 'bootstrap', 'Ruby'],
  },
];
const workCards = document.querySelector('.work-grid');
workCards.innerHTML = '';
for (let i = 0; i < procards.length; i += 1) {
  let lang = '';
  procards[i].cardLang.forEach((cardLang) => {
    lang = `${lang}<li>${cardLang}</li>`;
  });
  workCards.innerHTML += `<div class="work-flex">
<h1 class="work-title">${procards[i].cardTitle}</h1>
<p class="work-paragraph">${procards[i].cardDesc}</p>
<ul class ="code">${lang}</ul>
<button class="pr-btn pop" type="button">
See project
</button>
</div>
`;
}
const popDesktop = document.querySelector('.popcontainer');
const openModel = document.querySelector('.btn');
const openCards = document.querySelectorAll('.pop');
const closePopUp = document.querySelector('.closebtn');
openModel.addEventListener('click', () => {
  popDesktop.classList.toggle('active');
});
for (let i = 0; i < openCards.length; i += 1) {
  openCards[i].addEventListener('click', () => {
    popDesktop.classList.toggle('active');
  });
}
closePopUp.addEventListener('click', () => {
  popDesktop.classList.remove('active');
});

/*  Form validation     */

document.getElementById('form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('span');
  const form = document.getElementById('form');
  if (email === email.toLowerCase()) {
    emailError.textContent = 'Successfull';
    emailError.style.color = 'green';
    form.submit();
  } else {
    event.preventDefault();
    emailError.textContent = 'Please enter your email in lower case letters!';
    emailError.style.color = 'red';
  }
});

/* ////////// localstorage\\\\\\\\\ */

const storgeForm = document.querySelector('.form');
storgeForm.addEventListener('input', () => {
const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    message: document.querySelector('#story').value,
  };
  localStorage.setItem('storgeForm', JSON.stringify(data));
});
const formObject = JSON.parse(localStorage.getItem('storgeForm'));
document.querySelector('#name').value = formObject.name;
document.querySelector('#email').value = formObject.email;
document.querySelector('#story').value = formObject.message;