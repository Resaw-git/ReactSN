import { Test } from "@components/app"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const messages = ["Hello"]

const Messages = () => {
  return (
    <div>
      <h1>messages</h1>
      {messages.map((message) => (
        <p key={messages}>{message}</p>
      ))}
      <input placeholder="Введите сообщение" />
      <button>Отправить</button>
    </div>
  )
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <Clock />
    <Test />
  </>,
  document.querySelector("#root"),
)
