const q1_r1 = document.getElementById('q1-r1')
const q1_r2 = document.getElementById('q1-r2')
const q2_r1 = document.getElementById('q2-r1')
const q2_r2 = document.getElementById('q2-r2')

const star1 = document.getElementById('star1')
const star2 = document.getElementById('star2')
const star3 = document.getElementById('star3')
const star4 = document.getElementById('star4')
const star5 = document.getElementById('star5')
let totalStars = 0

q1_r1.addEventListener('click', () => {
    if (q1_r1.classList.contains('selected')) {
        q1_r2.classList.remove('selected')
    } else {
        q1_r2.classList.remove('selected')
        q1_r1.classList.add('selected')
        document.getElementById('q1').value = 'yes'
    }
})

q1_r2.addEventListener('click', () => {
    if (q1_r2.classList.contains('selected')) {
        q1_r1.classList.remove('selected')
    } else {
        q1_r1.classList.remove('selected')
        q1_r2.classList.add('selected')
        document.getElementById('q1').value = 'no'
    }
})

q2_r1.addEventListener('click', () => {
    if (q2_r1.classList.contains('selected')) {
        q2_r2.classList.remove('selected')
    } else {
        q2_r2.classList.remove('selected')
        q2_r1.classList.add('selected')
        document.getElementById('q2').value = 'yes'
    }
})

q2_r2.addEventListener('click', () => {
    if (q2_r2.classList.contains('selected')) {
        q2_r1.classList.remove('selected')
    } else {
        q2_r1.classList.remove('selected')
        q2_r2.classList.add('selected')
        document.getElementById('q2').value = 'no'
    }
})

star1.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    totalStars = 1
})

star2.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    totalStars = 2
})

star3.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    totalStars = 3
})

star4.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white.svg')
    star1.src = './image/star-white-fill.svg'
    star2.src = './image/star-white-fill.svg'
    star3.src = './image/star-white-fill.svg'
    star4.src = './image/star-white-fill.svg'
    totalStars = 4
})

star5.addEventListener('click', () => {
    [star1, star2, star3, star4, star5].map((e) => e.src = './image/star-white-fill.svg')
    totalStars = 5
})

document.getElementById('submit').addEventListener('click', e => {
    e.preventDefault()
    const form = document.forms['form']
    const name = form.elements['name'].value
    const contact = form.elements['contact'].value
    const question1 = form.elements['question1'].value
    const question2 = form.elements['question2'].value
    const question3 = form.elements['question3'].value
    const question4 = form.elements['question4'].value
    const question5 = form.elements['question5'].value
    const question6 = form.elements['question6'].value
    const question7 = form.elements['question7'].value
    const question8 = form.elements['question8'].value
    const question9 = form.elements['question9'].value
    const message = JSON.stringify({
        name: name,
        contact: contact,
        stars: totalStars,
        question1: question1,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5,
        question6: question6,
        question7: question7,
        question8: question8,
        question9: question9,
    })
    const request = new XMLHttpRequest()
    request.open('POST', '/message', true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', () => {
        document.querySelector('.wrapper').style.display = 'none'
        const subtitle = document.querySelector('.subtitle')
        if (request.response == 'sucsess') {
            subtitle.innerHTML = 'СПАСИБО ЗА ОСТАВЛЕННЫЙ ОТЗЫВ!'
        } else {
            subtitle.innerHTML = 'ПРОИЗОШЛА ОШИБКА ПРИ ОТПРАВКЕ ОТЗЫВА'
        }
    })
    request.send(message)
})