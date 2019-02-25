// import StyleSheet from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';

var deviceWidth = Dimensions.get("window").width;

class StyleIntro {

    static styleIntro = StyleSheet.create({

        box: {
            fontSize: 20,
            fontFamily: "helveticaneue",
            fontWeight: 'bold',
            color: '#6e5532',
            textAlign: 'center',
            // marginTop: deviceHeight * 0.005  
        }
    })
}
export default StyleIntro;