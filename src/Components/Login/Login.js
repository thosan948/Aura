import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage,
    Linking,
    ToastAndroid,
    BackHandler,
    View,
    NetInfo,
} from "react-native";

// Import Image
import ic_Background from '../../Media/Background/BackgroundLogin.png';
import ic_logo from '../../Media/Logo/aura.png';
import ic_bg from '../../Media/Background/bg.png';
import ic_user from '../../Media/Icon/ic_user.png';
import ic_lock from '../../Media/Icon/lock.png';


// Import Dependencies
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';
import { Checkbox } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import OpenSettings from 'react-native-open-settings';

import StyleLogin from '../../Styles/Login/StyleLogin';
const styles = StyleLogin.styleLogin;

export default class Login extends Component {

    constructor(props) {

        super(props);
        this.state = {
            visible: false,
            show_false: false,
            show_check: false,
            checkWifi: false,
            id : '',
            cuscode: '',
            cusname: '',
            cusphone: '',
            birthdate: '',
            cmnd: '',
            gender: '',
            tinh: '',
            quan: '',
            diachi: '',
            image: '',
            check_erro: '',
            fail: '',
            emdn: "",
            passdn: "",
        };

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this._GetData();

    }

    componentWillUnmount() {

        NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    gotoFogot(){
        this.props.navigation.push('Fogot');
    }

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    _GetData = async () => {


        try {
            var get_user = await AsyncStorage.getItem("@User:key");
            var get_checked = await AsyncStorage.getItem("@Check:key");
            var get_pass = await AsyncStorage.getItem("@Pass:key");
            this.setState({
                emdn: get_user,
                passdn: get_pass,
            });
            if(get_checked == "true"){

                this.setState({checked: true, click: true,});
                
            } else {
                this.setState({click: false,});
            }
        } catch (error) {
            console.log(error);
        }

    };

    gotoMain  = async () => {


        if(this.state.click == true){
            await AsyncStorage.setItem("@User:key", this.state.emdn);
            await AsyncStorage.setItem("@Check:key", String(this.state.click));
            await AsyncStorage.setItem("@Pass:key", this.state.passdn);
        } else{
            await AsyncStorage.setItem("@Check:key", 'false');
        }

        try {

            await AsyncStorage.setItem("@Login:key", 'true');
            await AsyncStorage.setItem("@Id:key", this.state.id);
            await AsyncStorage.setItem("@Cuscode:key", this.state.cuscode);
            await AsyncStorage.setItem("@Cusname:key", this.state.cusname);
            await AsyncStorage.setItem("@Cusphone:key", this.state.cusphone);
            await AsyncStorage.setItem("@Birthdate:key", this.state.birthdate);
            await AsyncStorage.setItem("@Cmnd:key", this.state.cmnd);
            await AsyncStorage.setItem("@Gender:key", this.state.gender);
            await AsyncStorage.setItem("@Tinh:key", this.state.tinh);
            await AsyncStorage.setItem("@Quan:key", this.state.quan);
            await AsyncStorage.setItem("@Diachi:key", this.state.diachi);
            await AsyncStorage.setItem("@Image:key", "http://library.limcom.vn/API/dist/images/users/" + this.state.image);

            console.log(this.state.id);

        } catch (error) {

            console.log(error);

        }
        this.setState({visible: false});
        this.props.navigation.push('Main');
    }
    gotoRegistration(){
        this.props.navigation.push('Registration');
    };

    handleWifi = () => {

        this.setState({ 
            show_false: false,
            checkWifi: false,
        });
        // OpenSettings.openSettings();
        Linking.openURL("App-Prefs:root=WIFI");
        
    }

    handleClose = () => {

        this.setState({ 
            show_false: false
        })

    }

	Login() {

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if(connectionInfo.type == "none"){
                // console.log(connectionInfo.type)
                this.setState({ 
                    checkWifi: true,
                    show_false: true, 
                    fail: 'Lỗi kết nối',
                    check_erro: 'Bạn hãy kiểm tra lại kết nối Internet hoặc Wifi',
                });
            } else {
                this.setState({visible: true});

                check_Phone = this.state.emdn;			
                check_Pass = this.state.passdn;
        
                if ( check_Phone == "" || check_Pass == "" ) {
        
                    this.setState({
                        visible: false,
                        fail: "Đăng nhập thất bại",
                        check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
                        show_false: true
                    });
                    
                }else if( check_Phone == null || check_Pass == null ) {
        
                    this.setState({
                        visible: false,
                        fail: "Đăng nhập thất bại",
                        check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
                        show_false: true
                    });
                    
                }else{
        
                    fetch("http://library.limcom.vn/API/login.php", {
        
                        method: "POST",
        
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                        },
        
                        body: JSON.stringify({
                            "PHONE": check_Phone,		// POST biến MAIL
                            "PASS": check_Pass
                        })
        
                    })
        
                    .then((response) => response.json())
        
                    .then((responseJson) => {
        
                            if (responseJson.info.Result == "1") {					
                                info_id = responseJson.info.id;					
                                info_cuscode = responseJson.info.cuscode;			
                                info_cusname = responseJson.info.cusname;
                                info_cusphone = responseJson.info.cusphone;
                                info_birthdate = responseJson.info.birthdate;
                                info_cmnd = responseJson.info.cmnd;
                                info_gender = responseJson.info.gender;
                                info_tinh = responseJson.info.tinh;
                                info_diachi = responseJson.info.diachi;
                                info_quan = responseJson.info.quan;
                                info_image = responseJson.info.image;
                                console.log(info_diachi)
                                
                                if(info_diachi == null){
                                    info_diachi = " "
                                }
                                if (info_quan == null){
                                    info_quan = " "
                                }
                                if (info_tinh == ""){
                                    info_tinh = " "
                                }
                                this.setState({
                                    id : info_id,
                                    cuscode: info_cuscode,
                                    cusname: info_cusname,
                                    cusphone: info_cusphone,
                                    birthdate: info_birthdate,
                                    cmnd: info_cmnd,
                                    gender: info_gender,
                                    tinh: info_tinh,
                                    quan: info_quan,
                                    diachi: info_diachi,
                                    image: info_image
                                });
                                this.gotoMain();
        
                            } else if (responseJson.info.Result == "0") {				
                                
                                this.setState({
                                    visible: false,
                                    fail: "Đăng nhập thất bại",
                                    check_erro: "Số điện thoại hoặc mật khẩu không chính xác",
                                    show_false: true
                                });
        
                            }else{
        
                                this.setState({
                                    visible: false,
                                    fail: "Đăng nhập thất bại",
                                    check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
                                    show_false: true
                                });
                                
                            }
        
                        },
        
                    )
                    .catch((error) => {
        
                            console.log(error)				
                            this.setState({
                                visible: false,
                                fail: "Đăng nhập thất bại",
                                check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
                                show_false: true
                            });
        
                        }
        
                    );

                }

            }

        });



    }
    
    Click(){
        this.setState({ click: !this.state.click });
    }

    render() {

        const { checked } = this.state;

        const OK_Wifi = (
            <SCLAlertButton theme="info" onPress={this.handleWifi}>OK</SCLAlertButton>
        );
        const OK_TB = (
            <SCLAlertButton theme="info" onPress={this.handleClose}>OK</SCLAlertButton>
        );

        let Thongbao;

        if(this.state.checkWifi == true){

            Thongbao = OK_Wifi;
            
        }else{
            Thongbao = OK_TB;
        }

        return (
            
            <View style = {{ flex: 1}}>

                <ImageBackground
                    source={ic_Background}
                    style={styles.view_bg_Main}>
                    
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>

                        <View style = {styles.view_Main}>

                            <View>

                                <Image source={ic_logo} style={styles.image_logo}/>

                            </View>

                            <View>

                                <Image source={ic_bg} style={styles.image_bg}/>

                            </View>

                            <View style = {styles.view_input}>

                                <View style={styles.fromDN}>

                                    <Image source={ic_user} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(emdn) => this.setState({ emdn })}
                                        value={this.state.emdn}
                                        placeholderTextColor='#fff'
                                        placeholder='Số điện thoại'
                                        keyboardType="numeric"
                                        underlineColorAndroid='transparent'
                                        style={styles.TextInput} />

                                </View>

                                <View style={styles.fromDN}>

                                    <Image source={ic_lock} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(passdn) => this.setState({ passdn })}
                                        value={this.state.passdn}
                                        placeholderTextColor='#fff'
                                        placeholder='Mật khẩu'
                                        secureTextEntry
                                        underlineColorAndroid='transparent'
                                        style={styles.TextInput} />

                                </View>

                            </View>

                            <View style = {styles.view_check}>

                                <View style = {{flexDirection: 'row',}}>

                                    <Checkbox
                                        status={checked ? 'checked' : 'unchecked'}
                                        color = '#fff'
                                        uncheckedColor = '#fff'
                                        onPress={() => { this.setState({ checked: !checked,}); this.Click();}}/>

                                    <TouchableOpacity onPress={() => { this.setState({ checked: !checked }); this.Click();}}>
                                        
                                        <Text style = {styles.text_NTK}> Nhớ tài khoản</Text>
                                    
                                    </TouchableOpacity>

                                </View>

                                <TouchableOpacity onPress={() => this.gotoFogot()}>

                                    <Text style = {styles.text_QMK}>Quên mật khẩu?</Text>
                                
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity 
                                style = {styles.view_DN}
                                onPress={() => this.Login()}>

                                <Text style = {styles.text_DN}>ĐĂNG NHẬP</Text>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                style = {styles.view_DK}
                                onPress={() => this.gotoRegistration()}>

                                <Text style = {styles.text_DK}>Đăng Ký</Text>

                            </TouchableOpacity>

                            <Spinner visible={this.state.visible} />

                            <SCLAlert
                                show={this.state.show_false}
                                onRequestClose={this.handleClose}
                                theme="info"
                                title={this.state.fail}
                                subtitle={this.state.check_erro}>

                                {Thongbao}

                            </SCLAlert>

                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>

        );

    }

}
