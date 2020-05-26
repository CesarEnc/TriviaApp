import React from 'react'
import Intro from './Intro'
import Questions from './Questions'
import Footer from './Footer'

class Main extends React.Component{


constructor(props){
    super(props)

    this.state ={
        index : 0,
        question: "How many values can a single byte represent?",
        realanswer: "256",
        answer1 : "1",
        answer2 : "256",
        answer3 : 	"8",
        answer4 : 	"1024",
        round: 1,
        score: 0
    }
    this.nextQuestion = this.nextQuestion.bind(this)
    this.increaseScore = this.increaseScore.bind(this)
}

increaseScore(){
    this.setState({
        score:(parseInt(this.state.score)+1).toString()
    })
}

nextQuestion(){
    this.setState({
        round : (parseInt(this.state.round)+1).toString()
    })
}

    render(){
        return(
<div className ="container">

<Intro round = {this.state.round} score = {this.state.score}/>
<Questions increaseScore = {this.increaseScore} realanswer = {this.state.realanswer}  question = {this.state.question} answer1 = {this.state.answer1} answer2= {this.state.answer2}  answer3 = {this.state.answer3} answer4 = {this.state.answer4} />

<button onClick = {this.nextQuestion}>Next Question</button>

<Footer/>

</div>
        );

        
    }

}

export default Main