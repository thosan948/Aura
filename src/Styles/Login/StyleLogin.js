import { Dimensions, StyleSheet } from 'react-native';

var deviceHeight  = Dimensions.get('window').height;
var deviceWidth = Dimensions.get("window").width;

class StyleLogin{

    static styleLogin = StyleSheet.create({

        view_bg_Main: {
            justifyContent: 'center',
            flex: 1,
        },

        view_Main:{
            flex: 1,
            marginTop: deviceHeight * 0.125 ,
            alignSelf: 'center',
            justifyContent: 'center'
        },
    
        view_DN: {
            alignSelf: "center",
            height: 35,
            width: deviceWidth* 0.6,
            backgroundColor: "#ffffff",
            borderRadius: 180,
            justifyContent: 'center',
            marginTop: deviceHeight*0.05,
        },
        view_DK:{
            // backgroundColor: '#fff',
            alignSelf:'center',
            width: 100,
        },
    
        text_DK: {
            textAlign: 'center',
            color: "#fff",
            fontSize: 16,
            marginTop:  deviceHeight*0.01,
            fontWeight: 'bold',
            fontFamily: "helveticaneue",
            // textDecorationLine: 'underline'
        },
    
        fromDN: {
            width: deviceWidth * .7,
            flexDirection: 'row',
            height: 45,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            marginBottom: 5,
        },
    
        view_check:{
            width: deviceWidth * 0.7,
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
    
        },
    
        ImageStyle: {
            padding: 10,
            margin: 10,
            height: 10,
            width: 10,
            resizeMode : 'stretch',
            alignItems: 'center'
        },
    
        image_logo: {
            alignSelf: "center",
            width: 100,
            height: 100,
        },
        image_bg: {
            alignSelf: "center",
            marginTop:  deviceHeight*0.01,
            width: 200,
            height: 200*150/400,
        },
    
        text_NTK:{
            fontFamily: "helveticaneue",
            color: '#fff',
            marginTop: 13,
            marginLeft: -7,
            fontSize: 13,
        },
        text_QMK:{
            fontFamily: "helveticaneue",
            color: '#fff',
            marginTop: 13,
            fontSize: 13,
            // textDecorationLine: 'underline'
        },
        TextInput: {
            // flex:1,
            // backgroundColor: 'white',
            borderRadius: 30,
            width: deviceWidth * 0.7,
            fontSize: 15,
            color: '#fff',
            fontFamily: "helveticaneue",
        },
    
        view_input:{
            alignSelf: 'center',
        },
    
        text_DN:{
            textAlign : 'center',
            fontWeight: 'bold',
            fontFamily: "helveticaneue",
            fontSize: 16,
            // textDecorationLine: 'underline'
        }
    
    });
}
export default StyleLogin;