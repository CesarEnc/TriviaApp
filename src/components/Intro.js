import React from 'react'

class Intro extends React.Component {

    render() {
        return (
            <div className="intro border border-dark rounded text-center" style={{ marginBottom: "30px" }}>

                <div className="row d-flex justify-content-center  " style={{ marginTop: "30px" }}>
                    <h1>Welcome to this <b>{this.props.category} Trivia</b></h1>
                </div>
                <div className="row d-flex justify-content-center  ">
                    <h4>For each question, <b>choose the correct answer.</b></h4>
                </div>

                <div className="row   " style={{ margin: "10px" }}>
                    <div className="col d-flex justify-content-center"><p><b> Points:</b> {this.props.score}</p></div>
                    <div className="col d-flex justify-content-center"><p><b> Round:</b> {this.props.round}</p></div>


                </div>
            </div>
        );


    }

}

export default Intro