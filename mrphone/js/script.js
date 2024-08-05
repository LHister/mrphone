const toggleBtn = document.querySelector('.dropdown-button')
const links = document.querySelector('.links')
const scrollIndic = document.getElementById('inde')


toggleBtn.addEventListener('click', ()=>{
    links.classList.toggle('toggled')
})

window.onscroll = () => {

    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / clientHeight) * 100;

    scrollIndic.style.width = scrollPercentage + '%';
};