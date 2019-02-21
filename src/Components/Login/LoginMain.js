import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    BackHandler,
    ToastAndroid,
    Dimensions,
    View } from "react-native";

import ic_Background from '../../Media/Background/BackgroundLogin.png';
import ic_welcome from '../../Media/Background/welcome.png';
import ic_logo from '../../Media/Logo/logo.png'

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class LoginMain extends Component {

    constructor(props) {

        super(props);

    };

    componentDidMount() {

        this._backPress = 0;

        BackHandler.addEventListener('backPress', () => {

            setTimeout(() => {

                this._backPress = 0;

            }, 3000);

            this._backPress += 1;

            if (this._backPress <= 1) {

                this._backPress += 1;

                ToastAndroid.showWithGravity("Ấn trở về thêm một lần nữa để thoát ", ToastAndroid.SHORT, ToastAndroid.BOTTOM);

                return true;

            }

            BackHandler.exitApp();

        });

    }
    componentWillUnmount() {

        BackHandler.removeEventListener('backPress');

    }

    gotoLogin(){

        const { navigation } = this.props;
        navigation.push( 'Login' );

    };

    gotoRegistration(){

        const { navigation } = this.props;
        navigation.push( 'Registration' );

    };

    render() {

        return (
            
            <View style = {{ flex: 1 }}>

                <ImageBackground
                    source={ic_Background}
                    style={styles.view_Main}>

                    <View>

                        <View>
                            <Image source={ic_logo} style = {styles.style_logo}/>
                        </View>

                        <View>
                            <Image source={ic_welcome} style = {styles.style_welcome}/>
                        </View>

                        <TouchableOpacity 
                            style = {styles.view_DN}
                            onPress={() => this.gotoLogin()}>

                            <Text style = {styles.text_DN}>ĐĂNG NHẬP</Text>

                        </TouchableOpacity>

                        <TouchableOpacity 
                            style = {styles.view_DK}
                            onPress={() => this.gotoRegistration()}>

                            <Text style = {styles.text_DK}>Đăng Ký</Text>
                            
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>

        );

    }

}

const styles = StyleSheet.create({
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
        // fontWeight: 'bold',
        color: "#fff",
        fontSize: 16,
        marginTop:  deviceHeight*0.01,
        fontFamily: "helveticaneue",
        textDecorationLine: 'underline'
    },
    text_DN:{
        textAlign : 'center',
        fontFamily: "helveticaneue",
        fontSize: 16,
        textDecorationLine: 'underline'
    }

});
