import React, { Component } from 'react'
import { connect } from "react-redux";

class Information extends Component {
    render() {
        const { scoreData, nbrOfQuestionData } = this.props
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">Nombre de question(s) restante(s) : { nbrOfQuestionData } </li>
                    <li className="list-group-item">Score: { scoreData } </li>
                </ul>
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
        // getNumber: (number) => dispatch(getNumber(number)),
    }
}

export default connect(mapStateToProps, null)(Information);


