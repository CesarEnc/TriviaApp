import React from 'react'
import TriviaSettings from './TriviaSettings'
import Trivia from './Trivia'
class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            category : "9",
            nquestions : 30,
            selected : false
        }

        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeNquestions = this.handleChangeNquestions.bind(this)
        this.getTrivia = this.getTrivia.bind(this)
    }

    handleChangeCategory(varcategory){
        this.setState({
            category : varcategory
        })
    }

    handleChangeNquestions(varnquestions){
        this.setState({
            nquestions : varnquestions
        })
    }

    getTrivia(){
        this.setState({
            selected : true
        })
    }

    render() {
        return (

            <div className="text-center" style={{ marginBottom: "30px" }}>
            {!this.state.selected ? <TriviaSettings getTrivia = {this.getTrivia} nquestions = {this.state.nquestions}handleChangeNquestions = {this.handleChangeNquestions} handleChangeCategory = {this.handleChangeCategory}/> : null}               
            
            {this.state.selected ? <Trivia category = {this.state.category} nquestions = {this.state.nquestions}/> : null}

            </div>
        );

     

    }

}

export default Main