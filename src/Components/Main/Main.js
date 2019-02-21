import React, { Component } from 'react';

// Commit thành công cmnr anh em ơi

import { 
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    AsyncStorage,
    Dimensions,
    BackHandler,
    ToastAndroid,
    View } from "react-native";

import ic_Background from '../../Media/Background/1.png';
import ic_Logo from '../../Media/Logo/6.png';
import ic_Click from '../../Media/Icon/bg.png';
import ic_7 from '../../Media/Icon/7.png';
import ic_1 from '../../Media/Icon/1.png';
import ic_2 from '../../Media/Icon/2.png';
import ic_3 from '../../Media/Icon/3.png';
import ic_4 from '../../Media/Icon/4.png';
import ic_5 from '../../Media/Icon/5.png';
import ic_setting from '../../Media/Icon/setting.png';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Main extends Component {

    constructor(props) {

        super(props);
        this.state = {
            get_img: '',
            get_name: '',
            get_code: '',
            kaiser: '',
            Text: '',
            Text1: '',
            Text2: '',
        };

    }

    componentDidMount() {

        this._GetData();

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

    gotoLogin = async () => {

        try {
            var get_checked = await AsyncStorage.getItem("@Check:key");

            if(get_checked == "false"){

                try {

                    await AsyncStorage.setItem("@User:key", "");
                    await AsyncStorage.setItem("@Login:key", "false");
                    await AsyncStorage.setItem("@Pass:key", "");
                    // await AsyncStorage.setItem("@Cusname:key", "");
                    // await AsyncStorage.setItem("@Cusphone:key", this.state.cusphone);
                    // await AsyncStorage.setItem("@Birthdate:key", this.state.birthdate);
                    // await AsyncStorage.setItem("@Cmnd:key", this.state.cmnd);
                    // await AsyncStorage.setItem("@Gender:key", this.state.gender);
                    // await AsyncStorage.setItem("@Tinh:key", this.state.tinh);
                    // await AsyncStorage.setItem("@Quan:key", this.state.quan);
                    // await AsyncStorage.setItem("@Diachi:key", this.state.diachi);
                    // await AsyncStorage.setItem("@Image:key", "");
                    console.log("Remove ok")
        
                } catch (error) {
        
                    console.log(error);
        
                }

                this.props.navigation.push('LoginMain');

            } else {

                try {

                    await AsyncStorage.setItem("@Login:key", "false");
                    console.log('false')
        
                } catch (error) {
        
                    console.log(error);
        
                }

                this.props.navigation.push('LoginMain');

            }

        } catch (error) {

            console.log(error);

        }

    };

    gotoReport(){
        this.props.navigation.push('Report');

    };
    gotoSales(){
        this.props.navigation.push('Sales');
    }
    gotoLieutrinh(){
        this.props.navigation.push('LieuTrinh');
    };
    gotoStatus(){
        this.props.navigation.push('Status');
    };
    gotoSetting(){
        this.props.navigation.push('Info');
    };

    _GetData = async () => {

        try {
            var get_img = await AsyncStorage.getItem("@Image:key");
            var get_name = await AsyncStorage.getItem("@Cusname:key");
            var get_code = await AsyncStorage.getItem("@Cuscode:key");
            this.setState({
                get_img: get_img,
                get_name: get_name,
                get_code: get_code,
            });
            console.log(get_img);
        } catch (error) {
            console.log(error);
        }

    };

    render() {

        return (
            
            <View style = {{ flex: 1}}>
                
                <ImageBackground
                    source={ic_Background}
                    style={styles.view_Main}>

                    <View 
                        style = {{flex: 1,
                            backgroundColor: '#e6e7e8',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            margin: 10,
                            borderRadius: 30}}>

                        <View>

                            <View>

                                <ImageBackground
                                    imageStyle={{
                                        borderRadius: 180,
                                        borderWidth: 2,
                                        borderColor: '#fff'
                                    }}
                                    source={this.state.get_img != "" ? { uri: this.state.get_img } : ic_Logo}
                                    style={styles.imageProfile} >

                                </ImageBackground>

                                <Text 
                                    style = {{
                                        fontSize: 20,
                                        fontFamily: "helveticaneue",
                                        fontWeight: 'bold',
                                        color: '#6e5532',
                                        textAlign: 'center',
                                        marginTop: deviceHeight * 0.005
                                    }}>{this.state.get_name}

                                </Text>

                                <Text 
                                    style = {{
                                        fontSize: 18,
                                        fontFamily: "helveticaneue",
                                        color: '#6e5532',
                                        textAlign: 'center'
                                    }}>{this.state.get_code}
                                </Text>

                            </View>

                            <View>

                                <View style = {{
                                    marginTop: deviceHeight * 0.05,
                                    alignSelf: 'center',
                                    flexDirection: 'row'}}>

                                    <TouchableOpacity onPress={() => this.gotoLieutrinh()}>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={[styles.view_Click,{marginRight: 15}]}>

                                            <Image source={ic_7} style={styles.icon}/>

                                            <Text style = {styles.text_icon}>Liệu trình &</Text>

                                            <Text style = {[styles.text_icon,{marginTop: -5}]}>Tiến độ</Text>

                                        </ImageBackground>

                                    </TouchableOpacity>

                                    <TouchableOpacity>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={[styles.view_Click,{marginRight: 15}]}>

                                            <Image source={ic_1} style={styles.icon}/>

                                            <Text style = {styles.text_icon}>Chương trình</Text>
                                            
                                            <Text style = {[styles.text_icon,{marginTop: -5}]}>khuyến mãi</Text>
                                            
                                        </ImageBackground>

                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.gotoReport()}>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={styles.view_Click}>
                                            
                                            <Image source={ic_2} style={[styles.icon,{width: 80}]}/>

                                            <Text style = {styles.text_icon}>Phản hồi</Text>

                                            <Text style = {[styles.text_icon,{marginTop: -5}]}></Text>

                                        </ImageBackground>

                                    </TouchableOpacity>

                                </View>

                            </View>

                            <View>

                                <View style = {{
                                    alignSelf: 'center',
                                    marginTop: 15,
                                    flexDirection: 'row'}}>

                                    <TouchableOpacity onPress = {() => this.gotoSales() }>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={[styles.view_Click,{marginRight: 15}]}>
                                            
                                            <Image source={ic_3} style={styles.icon}/>

                                            <Text style = {styles.text_icon}>Bảng giá</Text>

                                            <Text style = {[styles.text_icon,{marginTop: -5}]}>dịch vụ</Text>

                                        </ImageBackground>

                                    </TouchableOpacity>

                                    <TouchableOpacity>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={[styles.view_Click,{marginRight: 15}]}>
                                            
                                            <Image source={ic_4} style={styles.icon}/>

                                            <Text style = {styles.text_icon}>Tiện ích</Text>

                                            <Text style = {[styles.text_icon,{marginTop: -5}]}>mua sắm</Text>

                                        </ImageBackground>

                                    </TouchableOpacity>

                                    <TouchableOpacity onPress = {() => this.gotoStatus() }>

                                        <ImageBackground                     
                                            source={ic_Click}
                                            style={styles.view_Click}>

                                            <Image source={ic_5} style={[styles.icon,{width: 60}]}/>

                                            <Text style = {styles.text_icon}>Tin tức</Text>

                                            <Text style = {[styles.text_icon,{marginTop: -5}]}> </Text>
                                            
                                        </ImageBackground>

                                    </TouchableOpacity>

                                </View>

                            </View>

                            <View>

                                <TouchableOpacity
                                    style = {styles.view_btn}
                                    onPress={() => this.gotoLogin()}>

                                    <Text style = {styles.text_DN}>ĐĂNG XUẤT</Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                        <TouchableOpacity onPress={() => this.gotoSetting()} style={{height: 50, width: 50, margin: 10,}}>
                            
                            <Image source={ic_setting} style={{height: 50, width: 50, }}/>

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

    imageProfile: {
        width: deviceWidth * 0.3,
        height: deviceWidth * 0.3,
        alignSelf: 'center',
        marginTop: deviceHeight * 0.075

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
        color: '#fff',
        textDecorationLine: 'underline'
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
});
