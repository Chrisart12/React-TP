import React, { Component } from 'react'
import { connect } from "react-redux";
import { resetAll } from "../redux";

class FinishMessage extends Component {
    render() {
        const { scoreData } = this.props
        return (
            <div className="finishmessage-container" >
                <div className="alert alert-info" role="alert">
                    Partie terminée, vous pouvez cliquer sur resetAll pour recommencer
                    <br />
                    Votre score : <span className="finishmessage-score">{ scoreData }</span> 
                    <br />
                    <button className="btn btn-primary btn-number" onClick={this.props.resetAll} > RESSET ALL</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    
    return {
        scoreData: state.response.score,
        nbrOfQuestionData: state.response.nbrOfQuestion,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetAll: () => dispatch(resetAll()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishMessage);



