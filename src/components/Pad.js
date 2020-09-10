import React, { Component } from 'react';
import { connect } from "react-redux";
import { getNumber, resetChoice, getMultiplication, incrementScore, resetAll } from "../redux";
import  { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Component de notification pour l'échec de connexion
const GoodResponseToast = () => {
    return (
        <div style={{ textAlign: "center", fontSize: "15px"}} >
            Bonne réponse, bravo !
        </div>
    )
}

//Component de notification pour l'échec de connexion
const BadResponseToast = (props) => {
    return (
        <div style={{ textAlign: "center", fontSize: "15px"}} >
            Raté, { props.correction.numberOneData } x { props.correction.numberTwoData } = { props.correction.totalData }
        </div>
    )
}

//configuration de notification
toast.configure();

//Fonction de notification appelée en cas d'échec de connexion
const goodResponseToastnotify = () => {
    toast.success(<GoodResponseToast />, {position: toast.POSITION.TOP_CENTER, autoClose: 5000 })
}

//Fonction de notification appelée en cas d'échec de connexion
const badResponseToastnotify = (correction) => {
    toast.error(<BadResponseToast correction={correction} />, {position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
}



class Pad extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // pads: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            pads: [...Array(10).keys()].reverse()
        }
    }


     randNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }
    
   

    proposeMultiplication = () => {

        let numb_1 = this.randNumber(1, 20);
        let numb_2 = this.randNumber(1, 20);

        // let total = numb_1 * numb_2;
        const objectNumber = {
            numbOne: numb_1,
            numbTwo: numb_2
        }
        console.log("objectNumber", objectNumber)
        console.log("objectNumber", objectNumber.numbOne)
        console.log("objectNumber", objectNumber.numbTwo)

        this.props.getMultiplication(objectNumber)
    }

    verifyUserResponse = () => {
        console.log("userResponseData", this.props.userResponseData)
        console.log("totalData", this.props.totalData)

        if(this.props.userResponseData == this.props.totalData) {
            this.props.incrementScore(1)
            goodResponseToastnotify();
        } else {

            const correction = {
                numberOneData: this.props.numberOneData,
                numberTwoData: this.props.numberTwoData,
                totalData: this.props.totalData
            }
            console.log("correction", correction)

            badResponseToastnotify(correction);
            this.props.incrementScore(0)
        }
    }

    
    render() {
        const { pads } = this.state;
        const { numberOneData, numberTwoData, userResponseData, totalData, nbrOfQuestionData } = this.props;
        let btnDisabled;
        if(numberOneData === 0 || numberTwoData === 0 || nbrOfQuestionData === 0 ) {
            btnDisabled = 'login-btn_disabled'
        } else {
            btnDisabled = ''
        }

        let btnGoDisabled;
        if(userResponseData === 0 || userResponseData === '' || nbrOfQuestionData === 0) {
            btnGoDisabled = 'login-btn_disabled'
        } else {
            btnGoDisabled = ''
        }

        let btnCalculDisabled;
        if(nbrOfQuestionData === 0 ) {
            btnCalculDisabled = 'login-btn_disabled'
        } else {
            btnCalculDisabled = ''
        }


        return (
            <div className="pad-number">
                {
                    pads &&
                    pads.map(pad => 
                    <button key={pad} className={`${btnDisabled} btn btn-dark btn-number`}
                        onClick={() => this.props.getNumber(pad)} >{pad}
                    </button>
                    )
                }
                <button className={`${btnGoDisabled} btn btn-primary btn-number`}
                    onClick={this.verifyUserResponse} > GO! </button>
                <button className="btn btn-danger btn-number" onClick={this.props.resetChoice} > RESSET </button>
                <button className="btn btn-danger btn-number" onClick={this.props.resetAll} > RESSET ALL</button>
                <button className= {`${btnCalculDisabled} btn btn-info btn-number`}
                    onClick={this.proposeMultiplication} > CALCUL</button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    
    return {
        userResponseData: state.response.userResponse,
        totalData: state.response.total,
        numberOneData: state.response.numberOne,
        numberTwoData: state.response.numberTwo,
        nbrOfQuestionData: state.response.nbrOfQuestion,
        // userResponseData: state.response.total,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNumber: (number) => dispatch(getNumber(number)),
        resetChoice: () => dispatch(resetChoice()),
        getMultiplication: (objectNumber) => dispatch(getMultiplication(objectNumber)),
        incrementScore: (value) => dispatch(incrementScore(value)), 
        resetAll: () => dispatch(resetAll()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pad);


