const express = require('express')
const path = require('path')
const telegramApi = require('node-telegram-bot-api')

const PORT = 3000
const token = 1
const groupId = 1

const app = express()
const jsonParser = express.json()
const bot = new telegramApi(token, {polling: true})

function setMessage(text, property) {
    if (property == '') {
        return '\r'
    } else if (property == 'affirmative') {
        return text + 'Да' + '\n'
    } else if (property == 'negative') {
        return text + 'Нет' + '\n'
    } else {
        return text + property + '\n'
    }
}

app.post('/message', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400)
    const text = `${setMessage('Имя: ', req.body.name)}${setMessage('Контактные данные: ', req.body.phone)}${setMessage('Поставлено звёзд: ', req.body.star)}${setMessage('Посетите ли Вы нас снова?: ', req.body.question1)}${setMessage('Порекомендовали бы наше заведение друзьям и знакомым?: ', req.body.question2)}${setMessage('Как Вы оцениваете наше обслуживание?: ', req.body.question3)}${setMessage('Как Вы оцениваете кухню ресторана?: ', req.body.question4)}${setMessage('Удобство столов и кресел?: ', req.body.question5)}${setMessage('Чистота в заведении?: ', req.body.question6)}${setMessage('Откуда вы узнали о нашем заведении?: ', req.body.question7)}${setMessage('Чтобы Вы хотели улучшить/добавить в нашем заведении?: ', req.body.question8)}${setMessage('Чтобы Вы хотели увидеть нового в меню?: ', req.body.question9)}`   
    
    if (req.body.check) {
        bot.sendMessage(groupId, text)
        res.send({result: 'sucsess'})
    }
})

app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`)
})
