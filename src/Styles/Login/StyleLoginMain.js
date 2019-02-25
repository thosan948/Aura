import { Dimensions, StyleSheet } from 'react-native';

var deviceHeight  = Dimensions.get('window').height;
var deviceWidth = Dimensions.get("window").width;

class StyleLoginMain{

    static styleLoginMain = StyleSheet.create({
        view_Main: {
            justifyContent: 'center',
            flex: 1,
        },
    
        view_DN: {
            alignSelf: "center",
            height: 35,
            width: "60%",
            backgroundColor: "#ffffff",
            borderRadius: 180,
            justifyContent: 'center',
            marginTop: deviceHeight*0.01,
        },
        view_DK:{
            // backgroundColor: '#fff',
            alignSelf:'center',
            width: 100,
        },
    
        style_logo: {
            alignSelf: "center",
            marginTop:  - deviceHeight*0.1,
            width: 200,
            height: 200,
        },
        style_welcome: {
            alignSelf: "center",
            marginTop:  deviceHeight*0.015,
            width: 200,
            height: 200*150/500,
        },
        text_DK: {
            textAlign: 'center',
            fontWeight: 'bold',
            color: "#fff",
            fontSize: 16,
            marginTop:  deviceHeight*0.01,
            fontFamily: "helveticaneue",
            // textDecorationLine: 'underline'
        },
        text_DN:{
            fontWeight: 'bold',
            textAlign : 'center',
            fontFamily: "helveticaneue",
            fontSize: 16,
            // textDecorationLine: 'underline'
        }
    })
    
}

export default StyleLoginMain;