import { Dimensions, StyleSheet } from 'react-native';

var deviceHeight  = Dimensions.get('window').height;
var deviceWidth = Dimensions.get("window").width;

class StyleStatus {

    static styleStatus = StyleSheet.create({

        view_Main: {
            justifyContent: 'center',
            flex: 1,
        },
        text_pass:{
            fontFamily: "helveticaneue",
            color: '#6e5532',
            fontSize: 16,
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontWeight: 'bold',
        },
        text_top: {
            color: '#fff',
            // fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'center',
        },
        text_bottom: {
            color: '#6e5532',
            // fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'center',
        },
        view_top: {
            backgroundColor: '#6e5532',
            justifyContent: 'center',
            width: deviceWidth * 0.25,
            height: 30,
            marginLeft: 2,
        },
        view_bottom: {
            backgroundColor: '#fff',
            borderWidth: 0.5,
            borderColor: '#6e5532',
            justifyContent: 'center',
            width: deviceWidth * 0.25,
            height: 35,
            marginTop: 2,
            marginLeft: 2,
        },
        view_main: {
            flexDirection: 'row'
        },
    

    });
    
}
export default StyleStatus;