let tab = document.querySelectorAll('.tabcontent')
let next2 = document.querySelectorAll('.tabheader__item')
tab.forEach(item => item.classList.add('fade1', 'hide'))
tab[0].classList.remove('hide')
let slideIndex1 = 0
next2.forEach((btn, index) => {
    btn.onclick = () => {
        tab[slideIndex1].classList.add('hide')
        tab[index].classList.remove('hide')
        next2[slideIndex1].classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        slideIndex1 = index
    }
})
let btn = document.querySelectorAll('.btn')
let exet2 = document.querySelector('.mod3_img')
let modal = document.querySelector('.modaall3')
btn.forEach(btns => {
    btns.onclick = () => {
        modal.classList.add('show3_modal', 'fade3')
    }
    exet2.onclick = () => {
        modal.classList.remove('show3_modal', 'fade3')
    }
})
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let clic = document.querySelector('.current')
let count = 2
let slideIndex = 0

function slideShow(n) {
    if (n > slides.length - 1) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach(slide => slide.classList.add('fade', 'hide'))
    slides[slideIndex].classList.remove('hide')
}
slideShow(slideIndex)
next.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
    clic.innerHTML = count++
    if (count === 5) { count = 1 }
}
let minus = 5
prev.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
    if (minus > 1) {
        minus--
        clic.innerHTML = minus
    }
}
let inps = document.querySelectorAll('input')
let form = document.forms.login
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}
inps.forEach(inp => {
    inp.onkeyup = () => {
        if (patterns[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error-field')
        } else {
            inp.parentElement.classList.add('error-field')
        }
    }
})
form.onsubmit = (event) => {
    event.preventDefault();
    let error = false
    inps.forEach(inp => {
        if (inp.parentElement.classList.contains('error-field')) {
            error = true
        }
    })
    if (error) {
        alert('error')
    } else {
        submit()
    }
}
function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    let input = document.getElementById("name").value;
    if (input === "") {
        alert("Что ты вёл там ничего нету");
        return fm;
    }
    console.log(user);
}
let inps2 = document.querySelectorAll('.order__input')
let form2 = document.forms.order__form
let patterns2 = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}
inps2.forEach(inp => {
    inp.onkeyup = () => {
        if (patterns2[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error-field')
        } else {
            inp.parentElement.classList.add('error-field')
        }
    }
})
function submit() {
    let user = {}
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        user[key] = value
    })
    let input = document.getElementById("name").value;
    if (input === "") {
        alert("Что ты вёл там ничего нету");
        return fm;
    }
    console.log(user);
}

let calkulator = document.querySelectorAll('#gender .calculating__choose-item')
let colorr = document.querySelectorAll('.calculating__choose_big  .calculating__choose-item_active')
let ipns = document.querySelectorAll('.calculating__choose_medium input')
let reselt = document.querySelector('#result')
let userdate = {
    gender: "women"
}
calkulator.forEach(input => {
    input.onclick = () => {
        calkulator.forEach(el => el.classList.remove('calculating__choose-item_active'))
        input.classList.add('calculating__choose-item_active')
        userdate.gender = input.getAttribute('data-g')
    }
})
ipns.forEach(ipn => {
    ipn.onkeyup = () => {
        userdate[ipn.id] = ipn.value
    }
})
colorr.forEach(input => {
    input.onclick = () => {
        colorr.forEach(el => el.classList.remove('calculating__choose-item_active'))
        input.classList.add('calculating__choose-item_active')
        let kfc = +input.getAttribute('data-activ')
        if (userdate.gender === 'woman') {
            let result = 655.1 + (9.563 * userdate.weight) + (1.85 * userdate.height) - (4.676 * userdate.age)
            reselt.innerHTML = Math.round(result * kfc)
        } else {
            let result = 66.5 + (13.75 * userdate.weight) + (5.003 * userdate.height) - (6.775 * userdate.age)
            reselt.innerHTML = Math.round(result * kfc)
        }
    }
})
let second = document.querySelector('#seconds');
let second2 = 20;
setInterval(() => {
    second2--;
    second.innerHTML = second2;
    if (second2 === 0) {
        second2 = 60;
    }
}, 1000);

let minutes = document.querySelector('#minutes');
let minutes2 = 56;
let hours = document.querySelector('#hours');
let hours2 = 1;
let days = document.querySelector('#days');
let days2 = 12;
setInterval(() => {
    if (second2 === 1) {
        minutes2--;
        minutes.innerHTML = minutes2;
        if (minutes2 === 0) {
            minutes2 = 60;
            hours2--;
            hours.innerHTML = hours2;
            if (hours2 === 0) {
                days2--;
                days.innerHTML = days2;
                hours2 = 24;
                if (days2 === 0) {
                    var duration = 19 * 1;
                    var animationEnd = Date.now() + duration;
                    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
                    function randomInRange(min, max) {
                        return Math.random() * (max - min) + min;
                    }

                    var interval = setInterval(function () {
                        var timeLeft = animationEnd - Date.now();

                        if (timeLeft <= 0) {
                            return clearInterval(interval);
                        }

                        var particleCount = 50 * (timeLeft / duration);
                        // since particles fall down, start a bit higher than random
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                    }, 250);
                }
            }
        }
    }
}, 1000);