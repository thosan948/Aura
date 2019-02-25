import { Dimensions, StyleSheet } from 'react-native';

var deviceWidth = Dimensions.get("window").width;

class StyleMain {

    static styleMain = StyleSheet.create({

        view_Main: {
            justifyContent: 'center',
            flex: 1,
        },
    
        imageProfile: {
            width: deviceWidth * 0.3,
            height: deviceWidth * 0.3,
            alignSelf: 'center',
        },
    
        view_btn: {
            backgroundColor: '#6e5532',
            width: '60%',
            height: 35,
            marginTop: 30,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center'
        },
    
        text_DN:{
            textAlign : 'center',
            fontFamily: "helveticaneue",
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            // textDecorationLine: 'underline'
        },
    
        view_Click: {
            justifyContent: 'center',
            height: deviceWidth * 0.27,
            width: deviceWidth * 0.27,
        },
    
        icon: {
            height: 50,
            width: 50,
            alignSelf: 'center'
        },
    
        text_icon: {
            fontFamily: "helveticaneue",
            color: '#6e5532',
            textAlign: 'center',
            textDecorationLine: 'underline'
        }
    })
}
export default StyleMain;