import React,{useState} from "react";
import { View ,StyleSheet, Text, Button} from "react-native";
import { Styles} from "./Styles";
import  {CalculatorButtons}  from "../CalculatorButtons/CalculatorButtons";
import { func } from "prop-types";
import { boolean, expression, i, string } from "mathjs";
import CalculatorScript from "../../Scripts/CalculatorScript";






export default function CalculatorScreen(){
    
    const calcScript = new CalculatorScript()
    
  
    const [OperationsText,setOperationsText] = useState('')
    const [ResultText,setResultText] = useState('0')


    

    function handleCallback(childElementData){
        if(childElementData==='='){
            if(!validateExpression(OperationsText)){
                
                setResultText('Entrada inválida!')
                
            }
            else{
                setResultText(calcScript.calculate(OperationsText))
                
            
            }

            return 
        }
        if(childElementData==='AC'){
            setOperationsText('')
            setResultText('0')
            return
        }

        if(childElementData==='<-'){
            let newString = OperationsText.slice(0,-1)
            setOperationsText(newString)
            return
        }

        
        setOperationsText(OperationsText+childElementData)
        
        
    }

    function validateExpression(expression){
        let lastIsNumber= false
        let changeLastIsNumberToFalseFlag = false 

        const notNumbers = ['-','+','*','/']

        for (let index = 0; index < expression.length; index++) {
            changeLastIsNumberToFalseFlag=false
            const element = expression[index];
            for (let i = 0; i< notNumbers.length; i++) {
                const notNumberElement = notNumbers[i];
                if(notNumberElement==element){
                    
                    if(lastIsNumber==false){
                        
                        return false
                    }
                    lastIsNumber=false
                    changeLastIsNumberToFalseFlag=true
                }
                else{
                    
                }
                
            }

            if(!changeLastIsNumberToFalseFlag){
                lastIsNumber=true
            }

            
            
        }

        for (let index = 0; index < notNumbers.length; index++) {
            const element = notNumbers[index];
            if(element===expression[expression.length-1]){
                return false
            }
            
        }

        return true
       
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
                <CalculatorButtons textValue={'AC'}  buttonStyle ={Styles.NumberButtonsEquals} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>

                <CalculatorButtons textValue={'4'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'5'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'6'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'+'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'<-'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>


                <CalculatorButtons textValue={'1'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'2'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'3'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'*'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'-'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>


                <CalculatorButtons textValue={'/'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'0'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                <CalculatorButtons textValue={'.'}  buttonStyle ={Styles.NumberButtons} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
                
                <CalculatorButtons textValue={'='}  buttonStyle ={Styles.NumberButtonsEquals} textButtonStyle={Styles.TextButtonNumbers} parentCallback={handleCallback}/>
            </View>
        </View>
    )

    
}


