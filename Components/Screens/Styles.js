
import React from "react"
import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    View:{
        height:'100%',
        width:'100%',
        flexDirection:'column'
    },
    ViewDisplay: {
        
        flex:2,
        backgroundColor: 'black'

    },

    ViewButtonsAndFunctions:{
        flex:3,
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
        minWidth:'20%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },

    NumberButtonsEquals:{
        minHeight:'25%',
        minWidth:'40%',
        alignItems:'center',
        justifyContent:'center',
        textAlign:"center",
        
        backgroundColor:'white'
    },

    TextButtonNumbers:{
        
        
        alignItems:'center',
        justifyContent:'center',
        textAlign:"center",
        color:'black',
        fontSize:21
    }
    
})

export {Styles}