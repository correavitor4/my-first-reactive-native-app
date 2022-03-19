import React from "react";
import { View ,StyleSheet} from "react-native";
import { Styles } from "./Styles";


function Display(){
    return(
        <View style = {Styles.View}>
            <View style = {Styles.ViewDisplay}></View>
            <View style= {Styles.ViewButtonsAndFunctions}></View>
        </View>
    )
}


export default Display
