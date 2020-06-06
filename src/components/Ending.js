import React from 'react'

class Ending extends React.Component {
    
    newTrivia() {
        // Recarga la pagina para una nueva trivia
        window.location.reload();
    }
    render() {
        return (
            <div className="intro border border-dark rounded text-center" style={{ marginBottom: "20px" }}>

                <div className="row d-flex justify-content-center  " style={{ marginTop: "20px" }}>
                <h1>Final Score: <b>{this.props.score}</b></h1>
                </div>
                <div className="row d-flex justify-content-center  ">
                {(this.props.score/this.props.lenght)*100 >=65? <h4> <b>Excellent</b>, keep it up</h4>: <h4><b>Better luck</b> next time</h4>}
  
                </div>

                <div className="row  d-flex justify-content-center ">
                <button className="btn btn-success " onClick={this.newTrivia} style={{ margin: "10px" }}>New trivia</button>

                </div>
            </div>
        );


    }

}

export default Ending