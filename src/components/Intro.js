import React from 'react'

class Intro extends React.Component{

    render(){
        return(
            <div class="intro">
<p>Welcome to this <b>computer science trivia</b></p>
<p>You have 10 questions,<b>select the correct answer.</b></p>
    <p><b> Points: {this.props.score}</b></p>
    <p><b> Round {this.props.round}</b></p>
</div>
        );

        
    }

}

export default Intro