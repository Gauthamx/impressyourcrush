const noBtn = document.getElementById('no')
const maxWidth = window.innerWidth - 112;
const maxHeight = window.innerHeight - 40;
const wrapper = document.querySelector('.wrapper');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("mouseover" , () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
