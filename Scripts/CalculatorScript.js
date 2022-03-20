import * as  math from "mathjs";
import { func } from "prop-types";
import React from "react";


export default class CalculatorScript{
    
    constructor(){
        this.expression = ''
    }

    addToExpression (expressionToAdd){
        this.expression += expressionToAdd
    }
    
    getExpression(){
        return this.expression
    }

    calculate(expression){
        
        return math.evaluate(expression)
    }

}



