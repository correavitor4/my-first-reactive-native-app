
import React from "react"
import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    View:{
        height:'100%',
        width:'100%',
        flexDirection:'column'
    },
    ViewDisplay: {
        
        flex:1,
        backgroundColor: 'black'

    },

    ViewButtonsAndFunctions:{
        flex:2,
        backgroundColor:'gray',
        flexDirection:"row",
        flexWrap:'wrap'
        
    },
    OperationsText:{
        flex:1,
        color:'white',
        fontSize:30,
        textAlignVertical:'bottom',
        textAlign:'right'
    },

    ResultText:{
        flex:1,
        color:'white',
        fontSize:50,
        textAlignVertical:'bottom',
        textAlign:'right'
    },
    NumberButtons:{
        minHeight:'25%',
        minWidth:'25%',
       
        
        backgroundColor:'white'
    },

    NumberButtonsEquals:{
        minHeight:'25%',
        minWidth:'50%',
        textAlignVertical:"center",
        
        backgroundColor:'white'
    },

    TextButtonNumbers:{
        
        textAlign:"center",
        color:'black'
    }
    
})

export {Styles}