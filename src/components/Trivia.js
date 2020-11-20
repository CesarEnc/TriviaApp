import React from 'react'
import Intro from './Intro'
import Questions from './Questions'
import Ending from './Ending'
import '../TriviaApp.css'
import { decode } from 'base64-url'


function GetData(category,nquestions) {
    var url = `https://opentdb.com/api.php?amount=${nquestions}&category=${category}&difficulty=easy&type=multiple&encode=base64`
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText); 
}


class Trivia extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data : GetData(this.props.category,this.props.nquestions),
            realanswer: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            round: 0,
            score: 0,
            finished: false,

        }

        console.log(this.state.data["resuls"])
        this.nextQuestion = this.nextQuestion.bind(this)
        this.increaseScore = this.increaseScore.bind(this)
        this.endMainTrivia = this.endMainTrivia.bind(this)
    }


    componentDidMount() {
        
        /* Este codigo genera un numero random que sera 
        la posicion en donde se colocara la respuesta correcta.

        Luego coloca cada respuesta en su lugar.
        */
        var res = Math.round(Math.random() * (4 - 1) + 1)

        this.setState({
            round: this.state.round + 1,
            realanswer: decode(this.state.data["results"][this.state.round].correct_answer),
            question: decode(this.state.data["results"][this.state.round].question)
        })
        let correct_answer = decode(this.state.data["results"][this.state.round].correct_answer)
        let incorrect_answer0 = decode(this.state.data["results"][this.state.round].incorrect_answers[0])
        let incorrect_answer1 = decode(this.state.data["results"][this.state.round].incorrect_answers[1])
        let incorrect_answer2 = decode(this.state.data["results"][this.state.round].incorrect_answers[2])
        if (res === 1) {
            this.setState({
                answer1: correct_answer,
                answer2: incorrect_answer0 ,
                answer3: incorrect_answer1,
                answer4: incorrect_answer2
            })
        }

        if (res === 2) {

            this.setState({
                answer1: incorrect_answer1,
                answer2: correct_answer,
                answer3: incorrect_answer0 ,
                answer4: incorrect_answer2
            })

        }

        if (res === 3) {
            this.setState({
                answer1: incorrect_answer1 ,
                answer2:incorrect_answer0 ,
                answer3: correct_answer,
                answer4: incorrect_answer2,
            })

        }

        if (res === 4) {
            this.setState({
                answer1: incorrect_answer0,
                answer2: incorrect_answer1,
                answer3: incorrect_answer2,
                answer4:correct_answer
            })

        }

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
            <div className="container" id="TriviaDiv">

                <Intro category={decode(this.state.data["results"][0].category)} round={this.state.round} score={this.state.score} />

                {!this.state.finished ? <Questions endMainTrivia={this.endMainTrivia} finished={this.state.finished} lenght={this.state.data["results"].length} score={this.state.score} round={this.state.round} nextQuestion={this.nextQuestion} increaseScore={this.increaseScore} realanswer={this.state.realanswer} question={this.state.question} answer1={this.state.answer1} answer2={this.state.answer2} answer3={this.state.answer3} answer4={this.state.answer4} /> : null}

                {this.state.finished ? <Ending score={this.state.score} lenght={this.state.data["results"].length}/> : null}

                
                
            </div>
        );


    }

}

export default Trivia