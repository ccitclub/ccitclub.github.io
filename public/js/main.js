import Typed from 'typed.js'
import Splide from '@splidejs/splide'

//Typing animation
var typedStrings = document.querySelectorAll('.Typed-strings');
typedStrings.forEach(string => {
    if (string?.innerText) {
        var options = {
            strings: string.innerText.split('!'),
            typeSpeed: 50,
            loop: true,
            backDelay: 800,
            backSpeed: 30,
            smartBackspace: true
        };

        var typed = new Typed('.Typing', options)
        
    }
})

//Image Slider
new Splide( '.splide' , {
    lazyLoad: true,
    autoplay: true,
    rewind:true,
    interval: 2500,
}).mount();
