const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('savia que ibas a decir que si uwu')
});

const nouBtn = document.querySelector('#nouBtn');

nouBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nouBtn.style.setProperty('top',randomY+'%');
    nouBtn.style.setProperty('left',randomX+'%');
    nouBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
})