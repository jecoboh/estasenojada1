const wrapper = document.querySelector('.wrapper');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 5;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 5;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});