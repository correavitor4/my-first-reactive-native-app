import React,{useState} from "react";
import { View ,StyleSheet, Text, Button} from "react-native";
import { Styles} from "./Styles";
import  {CalculatorButtons}  from "../CalculatorButtons/CalculatorButtons";
import { func } from "prop-types";


export default function CalculatorScreen(){
    
    var expression = ''
    const [OperationsText,setOperationsText] = useState('')
    const [ResultText,setResultText] = useState('0')


    function handleCallback(childElementData){
        addToExpression(childElementData)
    }
    
    function addToExpression(expressionToAdd){
        expression += expressionToAdd
        console.log(expression)
        setOperationsText(expression)
    }
        

    return(
        <View style = {Styles.View}>
            <View style = {Styles.ViewDisplay}>
                <Text style={Styles.OperationsText}>{OperationsText}</Text>
                <Text style={Styles.ResultText}>{ResultText}</Text>
            </View>
            <View style= {Styles.ViewButtonsAndFunctions}>
                <CalculatorButtons textValue={'7'} buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'8'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'9'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'-'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>

                <CalculatorButtons textValue={'4'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'5'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'6'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'+'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>

                <CalculatorButtons textValue={'1'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'2'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'3'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'*'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>

                <CalculatorButtons textValue={'/'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'0'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'='}  buttonStyle ={Styles.NumberButtonsEquals} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
            </View>
        </View>
    )

    
}


