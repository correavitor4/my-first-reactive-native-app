import React from "react";
import { View ,StyleSheet, Text, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles} from "./Styles";


function Display(){
    return(
        <View style = {Styles.View}>
            <View style = {Styles.ViewDisplay}>
                <Text style={Styles.OperationsText}>Operações aqui</Text>
                <Text style={Styles.ResultText}>Resultado</Text>
            </View>
            <View style= {Styles.ViewButtonsAndFunctions}>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>7</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>8</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>9</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>-</Text></TouchableOpacity>

                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>4</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>5</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>6</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>+</Text></TouchableOpacity>

                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>1</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>2</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>3</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>*</Text></TouchableOpacity>

                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>/</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtons} ><Text style={Styles.TextButtonNumbers}>0</Text></TouchableOpacity>
                <TouchableOpacity style={Styles.NumberButtonsEquals} ><Text style={Styles.TextButtonNumbers}>=</Text></TouchableOpacity>
            </View>
        </View>
    )
}


export default Display
