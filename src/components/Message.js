import React, { Component } from 'react'
import { connect } from "react-redux";
import { getNumber } from "../redux";
import Multiplication from './Multiplication';
import Information from './Information';

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { userResponseData } = this.props
        return (
            <div className="message-container">
                <div className="alert alert-primary" role="alert">
                    <Multiplication /> <span className="message-response" > { userResponseData }</span>
                </div>
                <Information />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        userResponseData: state.response.userResponse,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getNumber: (number) => dispatch(getNumber(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);



