let tab = document.querySelectorAll('.tabcontent')
let next2 = document.querySelectorAll('.tabheader__item')
let slideIndex1 = 0
function show(m) {
    if (m > tab.length - 1) {
        slideIndex1 = 0}
    tab.forEach(slide => slide.classList.add('tab'))
    tab[slideIndex1].classList.remove('tab')
}
show()
next2.forEach(slnext => {
    slnext.onclick = () => {
        slideIndex1++
        show(slideIndex1)
    }
})
let fir = document.querySelector('.tabheader__item_active')
fir.onclick = () => {
    if (fir.classList.add('tabheader__item_active')) { }
    if (onclic.classList.remove('tabheader__1h')) { }
    if (fir.classList.add('tabheader__item_active')) { }
    if (onclic2.classList.remove('tabheader__1h')) { }
    if (fir.classList.add('tabheader__item_active')) { }
    if (onclic3.classList.remove('tabheader__1h')) { }
    fir.classList.add('tabheader__item_active')
    slideIndex1--
    show(slideIndex1)
}
let onclic = document.querySelector('.iten')
onclic.onclick = () => {
    if (fir.classList.remove('tabheader__item_active')) { }
    if (onclic2.classList.remove('tabheader__1h')) { }
    if (onclic.classList.add('tabheader__1h')) { }
    if (onclic3.classList.remove('tabheader__1h')) { }
    slideIndex1++
    show(slideIndex1)
}
let onclic2 = document.querySelector('.item1')
onclic2.onclick = () => {
    if (fir.classList.remove('tabheader__item_active')) { }
    if (onclic2.classList.remove('tabheader__1h')) { }
    if (onclic2.classList.add('tabheader__1h')) { }
    if (onclic3.classList.remove('tabheader__1h')) { }
    onclic.classList.remove('tabheader__1h')
    onclic2.classList.add('tabheader__1h')
    slideIndex1++
    show(slideIndex1)
}

let onclic3 = document.querySelector('.item2')
onclic3.onclick = () => {
    if (fir.classList.remove('tabheader__item_active')) {}
    if (onclic2.classList.remove('tabheader__1h')) { }
    if (onclic.classList.remove('tabheader__1h')) { }
    onclic2.classList.remove('tabheader__1h')
    onclic3.classList.add('tabheader__1h')
    slideIndex1++
    show(slideIndex1)
}
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
    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    slides.forEach(slide => slide.classList.add('fade', 'hide'))
    slides[slideIndex].classList.remove('hide')
}
slideShow(slideIndex)
next.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
    clic.innerHTML = count++
    if (count === 5) {count = 1}
}
let minus = 5
prev.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
    if (minus > 1) {
        minus--
        clic.innerHTML = minus}
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
        }})
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
        return fm;}
    console.log(user);
}