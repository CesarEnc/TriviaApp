import React from 'react'

class Questions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ""
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.check = this.check.bind(this);

    }

    handleOptionChange(e) {
        this.setState({
            selectedOption: e.target.value
        })

    }

    check() {
        if (this.state.selectedOption === "") {
            return;
        }
        if (this.state.selectedOption === this.props.realanswer) {
            this.props.increaseScore()
        } else {
        }

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
                                    <td className="text-center"><input type="radio" value={this.props.answer1} name="answer" onChange={this.handleOptionChange} ></input>{this.props.answer1}</td>
                                    <td className="text-center"><input type="radio" value={this.props.answer2} name="answer" onChange={this.handleOptionChange}  ></input>{this.props.answer2}</td>

                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td className="text-center" ><input type="radio" value={this.props.answer3} name="answer" onChange={this.handleOptionChange}></input>{this.props.answer3}</td>
                                    <td className="text-center"><input type="radio" value={this.props.answer4} name="answer" onChange={this.handleOptionChange}></input>{this.props.answer4}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                </div>
                <div className= "row  d-flex justify-content-center"  >
                
     

                <button className="btn btn-dark " onClick={this.check} style = {{margin: "30px"}}>Check</button>
               
              

        
                <button className="btn btn-secondary " onClick={this.props.nextQuestion} style = {{margin: "30px"}}>Next Question</button>
              
                </div>
            </div>



        );


    }

}

export default Questions