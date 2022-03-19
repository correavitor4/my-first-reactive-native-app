import React from "react"; 
import { Alert, Text,TouchableOpacity } from "react-native";


import PropTypes from 'prop-types'
import { Styles } from "../Screens/Styles";



export class CalculatorButtons extends React.Component{

    onPressedButton = ()=>{
        this.props.parentCallback(this.props.textValue)
        
    }
    
    static propTypes ={
        textValue: PropTypes.string.isRequired

    }

    // handlePress = ()=>{
    //     if(this.props.textValue==='='){

    //     }
    //     else{

    //     }
    // }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity style={this.props.buttonStyle} onPress={this.onPressedButton}>
                <Text style={this.props.textButtonStyle}>{this.props.textValue}</Text>
            </TouchableOpacity>
        )
    }
}


function printV(a){
    console.log(a)
}