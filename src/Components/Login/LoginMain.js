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


import StyleLoginMain from '../../Styles/Login/StyleLoginMain';
const styles = StyleLoginMain.styleLoginMain;

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

    gotoLogin() {

        const { navigation } = this.props;
        navigation.push( 'Login' );
        // OpenSettings.openSettings()

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
