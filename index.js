const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que dirias que si tkm :)')
    alert('Cuando va a ser nuestra boda?')
    alert('Es broma pero si quieres no es broma:3')
    alert('¡COMO ME GUSTASSSSS!♥♥♥♥')
    alert('Quisiera estar ahorita contigo abrazandote y escuchando esta música, por ahora solo escucha la música🤧, pero algún día la vamos a escuchar juntos💞')
    alert('Y no lo olvides: TE QUIERO MUCHO, que el universo se siente pequeño comparado a lo mucho que te quiero👩‍❤️‍💋‍👨💞')
    alert('Ahora si viene la música jajaja:)')
    location.href = 'https://www.youtube.com/watch?v=-BjZmE2gtdo';
});

const noBth = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBth.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
})