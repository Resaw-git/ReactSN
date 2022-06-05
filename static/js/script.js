const modal = document.querySelector('.modal__wrapper')
const q1_r1 = document.getElementById('q1-r1')
const q1_r2 = document.getElementById('q1-r2')
const q2_r1 = document.getElementById('q2-r1')
const q2_r2 = document.getElementById('q2-r2')

const star1 = document.getElementById('star1')
const star2 = document.getElementById('star2')
const star3 = document.getElementById('star3')
const star4 = document.getElementById('star4')
const star5 = document.getElementById('star5')

const form = document.forms.form
const warning = document.querySelector('.warning')

q1_r1.addEventListener('click', () => {
    if (q1_r1.classList.contains('selected')) {
        q1_r2.classList.remove('selected')
    } else {
        q1_r2.classList.remove('selected')
        q1_r1.classList.add('selected')
        form.question1.value = 'affirmative'
    }
})

q1_r2.addEventListener('click', () => {
    if (q1_r2.classList.contains('selected')) {
        q1_r1.classList.remove('selected')
    } else {
        q1_r1.classList.remove('selected')
        q1_r2.classList.add('selected')
        form.question1.value = 'negative'
    }
})

q2_r1.addEventListener('click', () => {
    if (q2_r1.classList.contains('selected')) {
        q2_r2.classList.remove('selected')
    } else {
        q2_r2.classList.remove('selected')
        q2_r1.classList.add('selected')
        form.question2.value = 'affirmative'
    }
})

q2_r2.addEventListener('click', () => {
    if (q2_r2.classList.contains('selected')) {
        q2_r1.classList.remove('selected')
    } else {
        q2_r1.classList.remove('selected')
        q2_r2.classList.add('selected')
        form.question2.value = 'negative'
    }
})

star1.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    form.star.value = 1
})

star2.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    form.star.value = 2
})

star3.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    form.star.value = 3
})

star4.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    star4.src = './image/star-white-fill.svg'
    form.star.value = 4
})

star5.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white-fill.svg')
    form.star.value = 5
})

function showWarning(text, place, isCheckbox = false) {
    const pos = form.name.getBoundingClientRect()
    warning.style.display = 'block'
    warning.style.opacity = 1
    warning.innerText = text
    warning.style.top = place + 'px'
    if (!isCheckbox) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        warning.style.left = pos.left + 10 + 'px'
    } else {
        warning.style.left = pos.left - 22 + 'px'
    }
    setTimeout(() => {
        warning.style.opacity = 0
        setTimeout(() => {
            warning.style.display = 'none'
        }, 500)
    }, 3000)
}

function checkName(content) {
    const str = content.replace(/\s+/g, '')
    const regexp = new RegExp("^[A-zА-яЁё]+$");
    if (str == '') {
        showWarning('Заполните это поле', 495)
    } else if (content.length > 50) {
        showWarning('Допустимо 50 символов', 495)
    } else if (!regexp.test(str)) {
        showWarning('Допустимы только буквы', 495)
    } else {
        return true
    }
}

function checkPhone() {
    if (form.phone.value.length < 18) {
        showWarning('Введите номер телефона', 555)
    } else {
        return true
    }
}

function checkAgree() {
    if (!document.querySelector('.checkbox').checked) {
        showWarning('Отметьте чтобы продолжить', 2225, true)
    } else {
        return true
    }
}

const phoneMask = form.phone
let keyCode

function mask(event) {
    event.keyCode && (keyCode = event.keyCode)
    let pos = this.selectionStart
    if (pos < 3) event.preventDefault()
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        })
    i = new_value.indexOf("_")
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    let reg = matrix.substring(0, this.value.length).replace(/_+/g,
        function(a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&")
    reg = new RegExp("^" + reg + "$")
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
}

phoneMask.addEventListener("input", mask, false);
phoneMask.addEventListener("focus", mask, false);
phoneMask.addEventListener("blur", mask, false);
phoneMask.addEventListener("keydown", mask, false)

function showModal() {
    document.querySelector('.modal').style.transform = 'scale(1)'
    modal.classList.toggle('is-open')
}

document.querySelectorAll('#redir').forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent == 'Да') {
            window.location.href = 'https://site.sbis.ru/go/0R26ss'
        } else {
            modal.classList.toggle('is-open')
            document.querySelector('.modal').style.transform = 'scale(0)'
        }
         
    })
})


document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault()
    const name = form.name.value
    if (checkName(name) && checkPhone() && checkAgree()) {
        const phone = form.phone.value
        const checkbox = document.querySelector('.checkbox')
        const message = JSON.stringify({
            name,
            phone,
            star: form.star.value,
            question1: form.question1.value,
            question2: form.question2.value,
            question3: form.question3.value,
            question4: form.question4.value,
            question5: form.question5.value,
            question6: form.question6.value,
            question7: form.question7.value,
            question8: form.question8.value,
            question9: form.question9.value,
            check: checkbox.checked
        })

    const request = new XMLHttpRequest()
    request.open('POST', '/message', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
        document.querySelector('.wrapper').style.display = 'none'
        document.querySelector('.subtitle').style.display = 'none'
        const container = document.querySelector('.container')
        const answer = document.createElement('div')
        container.insertAdjacentElement("beforeend", answer)
        answer.classList.add('subtitle')
            const res = JSON.parse(request.response)
        if (res.result == 'sucsess') {
            answer.insertAdjacentText('beforeend', 'СПАСИБО ЗА ОСТАВЛЕННЫЙ ОТЗЫВ!')
            setTimeout(showModal, 750)
        } else {
            answer.insertAdjacentText('beforeend', 'ПРОИЗОШЛА ОШИБКА ПРИ ОТПРАВКЕ ОТЗЫВА')
        }
    })
    request.send(message)
    }
})