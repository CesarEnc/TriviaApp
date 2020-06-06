import React from 'react'

class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",
            checked: false,
            isOne : false,
            isTwo : false,
            isThree : false,
            isFour : false,
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.check = this.check.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.endTrivia = this.endTrivia.bind(this)
    }

    handleOptionChange(e) {
        if(!this.state.checked){
            this.clearRadio()
            this.setState({
                selectedOption: e.target.value,
             
            })
           // document.getElementById("td"+e.target.id).style.backgroundColor ="green"  
            if(e.target.id === "1"){
                this.setState({
                    isOne : true
                 
                })
            }
    
            if(e.target.id === "2"){
                this.setState({
                    isTwo : true
                 
                })
            }
    
            if(e.target.id === "3"){
                this.setState({
                    isThree : true
                 
                })
            }
    
            if(e.target.id === "4"){
                this.setState({
                    isFour : true
                 
                })
            }
    
        }
        
    }

    check() {
            if (this.state.selectedOption === "") {
                return;
            }
            if (this.state.selectedOption === this.props.realanswer) {
                this.props.increaseScore()
                this.setState({
                    checked: true
                })
                document.getElementById(this.state.selectedOption).style.backgroundColor= "green"
            }else{
                document.getElementById(this.state.selectedOption).style.backgroundColor = "red"
                document.getElementById(this.props.realanswer).style.backgroundColor= "green"
            }
            
            this.setState({
                checked: true
            })

        
    }

    endTrivia() {
        this.props.endMainTrivia()
    }

    clearRadio(){
        this.setState({
            isOne : false,
            isTwo : false,
            isThree :false,
            isFour : false,
        })
    }
    nextQuestion() {
        document.getElementById(this.state.selectedOption).style.backgroundColor = ""
        document.getElementById(this.props.realanswer).style.backgroundColor = ""
        this.props.nextQuestion()
        this.clearRadio()
        this.setState({
            checked: 0, 
            selectedOption: ""
        })
    }
    render() {
        return (
            <div className="container">

                <div className="row text-center d-flex justify-content-center"><h1>{this.props.question}</h1></div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <table className="table table-bordered ">
                            <tbody>
                                <tr>
                                    <td className="text-center" id={this.props.answer1} ><input type="radio" id="1" value={this.props.answer1} name="answer" checked={this.state.isOne} onChange={this.handleOptionChange} ></input>{this.props.answer1}</td>
                                    <td className="text-center" id={this.props.answer2}><input type="radio" id="2" value={this.props.answer2} name="answer" checked={this.state.isTwo} onChange={this.handleOptionChange}  ></input>{this.props.answer2}</td>

                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td className="text-center" id={this.props.answer3} ><input type="radio" id="3" value={this.props.answer3} name="answer" checked={this.state.isThree} onChange={this.handleOptionChange}></input>{this.props.answer3}</td>
                                    <td className="text-center "id={this.props.answer4}><input type="radio" id="4" value={this.props.answer4} name="answer" checked={this.state.isFour} onChange={this.handleOptionChange}></input>{this.props.answer4}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
                <div className="row  d-flex justify-content-center"  >







                    {this.props.round <= this.props.lenght && !this.state.checked ? <button disabled={this.state.checked} className="btn btn-dark " onClick={this.check} style={{ margin: "30px" }}>Check</button> : null}
                    {this.state.checked && this.props.round < this.props.lenght ? <button className="btn btn-info " onClick={this.nextQuestion} style={{ margin: "30px" }}>Next Question</button> : null}
                    {this.state.checked && this.props.round === this.props.lenght  ? <button className="btn btn-info " onClick={this.endTrivia} style={{ margin: "30px" }}>End Trivia</button> : null}


                </div>
                <button className="btn btn-danger d-flex p-2" onClick={()=> window.location.reload()} >New trivia</button>


            </div>



        );


    }

}

export default Questions