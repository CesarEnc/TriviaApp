import React from 'react'
import Intro from './Intro'
import Questions from './Questions'
import Footer from './Footer'
const data = JSON.parse(GetData("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"))

function GetData(yourUrl) {
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
            finished: false

        }


        this.nextQuestion = this.nextQuestion.bind(this)
        this.increaseScore = this.increaseScore.bind(this)
        this.endMainTrivia = this.endMainTrivia.bind(this)
    }


    componentDidMount() {
        // Si los datos llegan su final, solo imprime termino.
        if (this.state.round === data["results"].length) {
            alert("Usted a terminado con " + this.state.score + "puntos.")
            return;
        }

        /* Este codigo genera un numero random que sera 
        la posicion en donde se colocara la respuesta correcta.

        Luego coloca cada respuesta en su lugar.
        */
        var res = Math.round(Math.random() * (4 - 1) + 1)

        this.setState({
            round: this.state.round + 1,
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

    newTrivia() {
        // Recarga la pagina para una nueva trivia
        window.location.reload();
    }
    endMainTrivia() {
        // Deja de monstrar el componente Questions
        this.setState({
            finished: true
        })
    }

    increaseScore() {
        // Esto incrementa el puntaje
        this.setState({
            score: this.state.score + 1
        })
    }


    nextQuestion() {
        //Pasa a la siguiente pregunta
        this.componentDidMount()
    }

    render() {
        return (
            <div className="container">

                <Intro category={data["results"][0].category} round={this.state.round} score={this.state.score} />

                {!this.state.finished ? <Questions endMainTrivia={this.endMainTrivia} finished={this.state.finished} lenght={data["results"].length} score={this.state.score} round={this.state.round} nextQuestion={this.nextQuestion} increaseScore={this.increaseScore} realanswer={this.state.realanswer} question={this.state.question} answer1={this.state.answer1} answer2={this.state.answer2} answer3={this.state.answer3} answer4={this.state.answer4} /> : null}

                <center>{this.state.finished ? <button className="btn btn-info " onClick={this.newTrivia} style={{ margin: "30px" }}>New trivia</button> : null}</center>

                <Footer />
            </div>
        );


    }

}

export default Main