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
    form.star.value = '1'
})

star2.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    form.star.value = '2'
})

star3.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    form.star.value = '3'
})

star4.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    star4.src = './image/star-white-fill.svg'
    form.star.value = '4'
})

star5.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white-fill.svg')
    form.star.value = '5'
})

function showWarning(text) {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    const pos = form.name.getBoundingClientRect()
    warning.style.display = 'block'
    warning.style.opacity = 1
    warning.innerText = text
    warning.style.top = 495 + 'px'
    warning.style.left = pos.left + 10 + 'px'
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
        showWarning('Заполните это поле')
    }
    else if (content.length > 50) {
        showWarning('Допустимо 50 символов')
    }
    else if (!regexp.test(str)) {
        showWarning('Допустимы только буквы')
    }
    else {
        return true
    }
}

const phoneMask = form.phone
phoneMask.addEventListener('focus', () => {
    form.phone.value = '+7('
})

document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault()
    const name = form.name.value
    if (checkName(name)) {
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
        })
        console.log(message)
    }


    /* const request = new XMLHttpRequest()
    request.open('POST', '/message', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
        document.querySelector('.wrapper').style.display = 'none'
        document.querySelector('.subtitle').style.display = 'none'
        const container = document.querySelector('.container')
        const answer = document.createElement('div')
        container.insertAdjacentElement("beforeend", answer)
        answer.classList.add('subtitle')
        if (request.response == 'sucsess') {
            answer.insertAdjacentText('beforeend', 'СПАСИБО ЗА ОСТАВЛЕННЫЙ ОТЗЫВ!')
        } else {
            answer.insertAdjacentText('beforeend', 'ПРОИЗОШЛА ОШИБКА ПРИ ОТПРАВКЕ ОТЗЫВА')
        }
    })
    request.send(message) */
})

function foo() {
    document.querySelector('.wrapper').style.display = 'none'
    document.querySelector('.subtitle').style.display = 'none'
    const container = document.querySelector('.container')
    const answer = document.createElement('div')
    container.insertAdjacentElement("beforeend", answer)
    answer.classList.add('subtitle')
    if (1) {
        answer.insertAdjacentText('beforeend', 'СПАСИБО ЗА ОСТАВЛЕННЫЙ ОТЗЫВ!')
    } else {
        answer.insertAdjacentText('beforeend', 'ПРОИЗОШЛА ОШИБКА ПРИ ОТПРАВКЕ ОТЗЫВА')
    }
}

