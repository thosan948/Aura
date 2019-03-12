import { Dimensions, StyleSheet } from 'react-native';

var deviceHeight  = Dimensions.get('window').height;
var deviceWidth = Dimensions.get("window").width;

class StyleRegistration {

    static styleRegistration = StyleSheet.create({

        ImageStyle: {
            padding: 10,
            margin: 10,
            height: 10,
            width: 10,
            resizeMode : 'stretch',
            alignItems: 'center'
        },
        view_Main: {
            justifyContent: 'center',
            flex: 1,
        },

        view_child_scroll:{
            alignSelf: 'center',
            justifyContent: 'center',
            flex: 1,
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
            // fontWeight: 'bold',
            color: "#fff",
            fontSize: 16,
            marginTop:  deviceHeight*0.01,
            fontFamily: "helveticaneue",
            // textDecorationLine: 'underline'
        },

        view_check:{
            width: deviceWidth * 0.7,
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',

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
        fromDN: {
            width: deviceWidth * .7,
            flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            // alignSelf: "center",
            // backgroundColor: '#fff',
            height: 45,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#fff',
            marginBottom: 5,
        },

        text_NTK:{
            fontFamily: "helveticaneue",
            color: '#fff',
            marginTop: 12,
            marginLeft: -7,
            fontSize: 12,
        },
        text_QMK:{
            fontFamily: "helveticaneue",
            color: '#fff',
            marginTop: 12,
            fontSize: 12,
            // textDecorationLine: 'underline'
        },
        style_TextInput: {
            flex:1,
            // backgroundColor: 'white',
            // borderRadius: 30,
            // width: deviceWidth * 0.7,
            fontSize: 15,
            color: '#fff',
            fontFamily: "helveticaneue",
        },

        view_input:{
            alignSelf: 'center',
            marginTop: deviceHeight * 0.05
        },

        text_DN:{
            textAlign : 'center',
            fontFamily: "helveticaneue",
            fontSize: 16,
            fontWeight: 'bold',            
            // textDecorationLine: 'underline'
        }

    });
}
export default StyleRegistration;