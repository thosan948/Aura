import { Dimensions, StyleSheet } from 'react-native';

var deviceWidth = Dimensions.get("window").width;

class StyleOrder {

    static styleOrder = StyleSheet.create({

        // Style View

        view_Gradient : {
            justifyContent: 'center',
            flex: 1,
        },
        view_MainWhite : {
            flex: 1,
            backgroundColor: '#e6e7e8',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: 5,
            margin: 10,
            borderRadius: 30
        },
        view_Order: {
            flexDirection: 'row',
            margin: 8,
            // justifyContent: 'center',
            justifyContent: 'space-between',
        },
        view_TouchabOrder: {
            padding: 5,
            borderWidth: 1,
            borderColor: '#735934',
            justifyContent: 'center',
            borderRadius: 5,
            width: deviceWidth * 0.6,
            paddingLeft: 8,
            paddingRight: 8,
        },
        view_TextInput: {
            height: 30,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#735934',
            textAlign: 'center',
            justifyContent: 'center',
            width: 40,
        },
        view_top: {
            backgroundColor: '#6e5532',
            justifyContent: 'center',
            width: deviceWidth * 0.25,
            height: 30,
            marginLeft: 2,
        },
        view_IconOrder:{
            height: 30,
            width: 30,
            backgroundColor: '#6e5532',
            justifyContent: 'center',
            borderRadius: 5,
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

        // Style Image
        img_Order: {
            height: 25,
            width: 25,
            alignSelf: 'center',
        },

        // Style Text
        txt_SanPham: {
            // textAlign: 'center',
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

    });

}
export default StyleOrder;