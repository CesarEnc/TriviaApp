import React from 'react'

class Questions extends React.Component{
    
constructor(props){
    super(props);
    this.state ={
        selectedOption : ""
    }
    this.handleOptionChange = this.handleOptionChange.bind(this); 
    this.check = this.check.bind(this);

}

handleOptionChange(e){
    this.setState({
        selectedOption: e.target.value
    })
  
      }
      
check(){
        if(this.state.selectedOption === ""){
            return;
        }
        if(this.state.selectedOption === this.props.realanswer){
            console.log("Correcto")
            this.props.increaseScore()
        }else{
            console.log("Falso")
        }

    }
    render(){
        return(

<div class="preguntas">
        <h1>{this.props.question}</h1>
            <table>
                <tr>
        <td><input type="radio" value = {this.props.answer1} name = "answer" onChange ={this.handleOptionChange} ></input>{this.props.answer1}</td>
        <td><input type="radio" value = {this.props.answer2}  name = "answer" onChange ={this.handleOptionChange}  ></input>{this.props.answer2}</td>
                </tr>

                <tr>
        <td><input type="radio" value = {this.props.answer3} name = "answer" onChange ={this.handleOptionChange}></input>{this.props.answer3}</td>
        <td><input type="radio" value = {this.props.answer4} name = "answer" onChange ={this.handleOptionChange}></input>{this.props.answer4}</td>
                </tr>
            </table>
        <button onClick = {this.check}>Check</button>
</div>


        );

        
    }

}

export default Questions