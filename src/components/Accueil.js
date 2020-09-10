import React from 'react'
import { connect } from "react-redux";

function Accueil({nbrOfQuestionData }) {

    return (
        <div className="alert alert-info" role="alert">
            Vous avez { nbrOfQuestionData } multiplications à faire. Utiliser les touches du clavier pour répondre.
            Bonne chance !
        </div>
    )
}


const mapStateToProps = (state) => {
    
    return {
        nbrOfQuestionData: state.response.nbrOfQuestion,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getNumber: (number) => dispatch(getNumber(number)),
    }
}

export default connect(mapStateToProps, null)(Accueil);








