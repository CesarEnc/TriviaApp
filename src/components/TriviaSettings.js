import React from 'react'
const data = JSON.parse(GetData("https://opentdb.com/api_category.php"))
function GetData(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;

}

function GenerateCategories(data) {
    data["trivia_categories"].forEach(element => {
        var option = document.createElement("option");
        option.value = element["id"]
        option.text = element["name"]
        
        document.getElementById("categorias").add(option)
    });

}
class TriviaSettings extends React.Component {
    constructor(props) {
        super(props)

        this.handleChangeNumero = this.handleChangeNumero.bind(this)
        this.handleChangeId = this.handleChangeId.bind(this)
    }

    componentDidMount() {
        GenerateCategories(data)

    }

    handleChangeNumero(e){
        this.props.handleChangeNquestions(e.target.value)
        this.setState({
            numero : e.target.value
        })
    }

    handleChangeId(e){
        this.props.handleChangeCategory(e.target.value)
    }


    render() {
        return (

            <div className="intro border border-dark rounded text-center" style={{ marginBottom: "30px" }}>

                <div className="row d-flex justify-content-center  " style={{ marginTop: "30px" }}>
                    <h1>Welcome to TriviaApp</h1>
                </div>

                <div className="row d-flex justify-content-center  " style = {{margin : "20px"}}>
                    <h4>Choose a category </h4> 

                </div>
                <div className="row d-flex justify-content-center  " style = {{margin : "20px"}}>
        
                    <select name="categorias" id="categorias" onChange = {this.handleChangeId}>

                    </select>
                </div>

                <div className="row d-flex justify-content-center  " style = {{margin : "20px"}}>
                    <h4>Select the number of questions</h4>
                   
                </div>

                <div className="row d-flex justify-content-center  ">
                <input type="range"  min="1" max="9" onChange = {this.handleChangeNumero}></input>
        <h4 >{this.props.nquestions}</h4>
                </div>
        <button className="btn btn-dark " onClick={this.props.getTrivia} style={{ margin: "10px" }}>Get Trivia</button>
        
            </div>
        );

     

    }

}

export default TriviaSettings