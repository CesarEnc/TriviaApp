import React from 'react'
import Intro from './Intro'
import Questions from './Questions'
import Footer from './Footer'
const data = JSON.parse(Get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"))

function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;

}


class Main extends React.Component {



    constructor(props) {
        console.log(data["results"])
        super(props)
        this.state = {
            realanswer: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            round: 0,
            score: 0,
        }


        this.nextQuestion = this.nextQuestion.bind(this)
        this.increaseScore = this.increaseScore.bind(this)
    }

    newRound() {
        if (this.state.round === data["results"].length) {
            console.log("Termino")
            return;
        }
        var res = Math.round(Math.random() * (4 - 1) + 1)

        this.setState({
            round: (parseInt(this.state.round) + 1),
            realanswer: data["results"][this.state.round].correct_answer,
            question: data["results"][this.state.round].question
        })
        if (res === 1) {
            this.setState({
                answer1: data["results"][this.state.round].correct_answer,
                answer2: data["results"][this.state.round].incorrect_answers[0],
                answer3: data["results"][this.state.round].incorrect_answers[1],
                answer4: data["results"][this.state.round].incorrect_answers[2]
            })
        }

        if (res === 2) {

            this.setState({
                answer1: data["results"][this.state.round].incorrect_answers[1],
                answer2: data["results"][this.state.round].correct_answer,
                answer3: data["results"][this.state.round].incorrect_answers[0],
                answer4: data["results"][this.state.round].incorrect_answers[2]
            })

        }

        if (res === 3) {
            this.setState({
                answer1: data["results"][this.state.round].incorrect_answers[1],
                answer2: data["results"][this.state.round].incorrect_answers[0],
                answer3: data["results"][this.state.round].correct_answer,
                answer4: data["results"][this.state.round].incorrect_answers[2],
            })

        }

        if (res === 4) {
            this.setState({
                answer1: data["results"][this.state.round].incorrect_answers[1],
                answer2: data["results"][this.state.round].incorrect_answers[0],
                answer3: data["results"][this.state.round].incorrect_answers[2],
                answer4: data["results"][this.state.round].correct_answer
            })

        }


    }


    componentDidMount() {
        this.newRound()

    }

    increaseScore() {
        this.setState({
            score: (parseInt(this.state.score) + 1).toString()
        })
    }

    nextQuestion() {

        this.componentDidMount()
    }

    render() {
        return (
            <div className="container">

                <Intro round={this.state.round} score={this.state.score} />
                <Questions nextQuestion={this.nextQuestion} increaseScore={this.increaseScore} realanswer={this.state.realanswer} question={this.state.question} answer1={this.state.answer1} answer2={this.state.answer2} answer3={this.state.answer3} answer4={this.state.answer4} />
                <Footer />

            </div>
        );


    }

}

export default Main