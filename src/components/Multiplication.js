import React, { Component } from 'react'
import { connect } from "react-redux";

class Multiplication extends Component {

    render() {
        const { numberOneData, numberTwoData} =  this.props;
        return (
            <>
                Calculer : { numberOneData } x { numberTwoData} = 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        // userResponseData: state.response.userResponse,
        numberOneData: state.response.numberOne,
        numberTwoData: state.response.numberTwo,
        // userResponseData: state.response.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getNumber: (number) => dispatch(getNumber(number)),
        // resetChoice: () => dispatch(resetChoice()),
        // getMultiplication: (numb_1, numb_2, total) => dispatch(getMultiplication(numb_1, numb_2, total)),
    }
}

export default connect(mapStateToProps, null)(Multiplication);


