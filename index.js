const express = require('express')
const path = require('path')
/* const telegramApi = require('node-telegram-bot-api') */

const PORT = 3000
const token = secret
const groupId = secret

const app = express()
const jsonParser = express.json()
/* const bot = new telegramApi(token, {polling: true}) */

app.post('/message', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400)
    res.send('sucsess')
    console.log(req.body)
/*     const text = `        
Имя: ${req.body.name}
Контактные данные: ${req.body.contact}
Поставлено звёзд: ${req.body.stars}
Посетите ли Вы нас снова?: ${req.body.question1}
Порекомендовали бы наше заведение друзьям и знакомым?: ${req.body.question2}
Как Вы оцениваете наше обслуживание?: ${req.body.question3}
Как Вы оцениваете кухню ресторана?: ${req.body.question4}
Удобство столов и кресел?: ${req.body.question5}
Чистота в заведении?: ${req.body.question6}
Откуда вы узнали о нашем заведении?: ${req.body.question7}
Чтобы Вы хотели улучшить/добавить в нашем заведении?: ${req.body.question8}
Чтобы Вы хотели увидеть нового в меню?: ${req.body.question9}`
    bot.sendMessage(groupId, text) */
})

app.use(express.static(path.resolve(__dirname, 'static')))

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`)
})
