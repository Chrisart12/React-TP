import React from 'react';
import PropTypes from 'prop-types'
import './App.scss';
import { connect } from "react-redux"
import Pad from './components/Pad';
import Message from './components/Message';
import Accueil from './components/Accueil';
import FinishMessage from './components/FinishMessage';
// import { increment, decrement } from "./redux";

class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      const { nbrOfQuestionData } = this.props;
      let finishPartie;
      console.log("nbrOfQuestionData", this.props.nbrOfQuestionData)
      if(nbrOfQuestionData === 0) {
        finishPartie = <FinishMessage />
      } else {
        finishPartie = ""
      }

      return (
        <div className="container app">
            { finishPartie }
            <Accueil />
            <Message />
            <Pad />
        </div>
      )
  }
}


const mapStateToProps = (state) => {
    
    return {
        countData: state.count.count,
        scoreData: state.response.score,
        nbrOfQuestionData: state.response.nbrOfQuestion,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // increment: () => dispatch(increment()),
        // decrement: () => dispatch(decrement()),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



