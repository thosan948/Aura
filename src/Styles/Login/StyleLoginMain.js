import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const deviceHeight  = Dimensions.get('window').height;
var deviceWidth = Dimensions.get("window").width;

class StyleLoginMain{

    static styleLoginMain = EStyleSheet.create({
        view_DN: {
            height: 40,
            width: "60%",
            backgroundColor: "#ffffff",
            borderRadius: 180,
        },
        view_Main: {
            height: "100%",
            width: '100%',
            justifyContent: "center"
        },
    })
    
}

export default StyleLoginMain;