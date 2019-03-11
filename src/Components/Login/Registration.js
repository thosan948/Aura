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
    BackHandler,
    View } from "react-native";
    
// Import Image
import ic_Background from '../../Media/Background/BackgroundLogin.png';
import ic_logo from '../../Media/Logo/aura.png'
import ic_bg from '../../Media/Background/bg_dk.png';
import ic_phone from '../../Media/Icon/ic_phone.png';
import ic_user from '../../Media/Icon/ic_user.png';
import ic_lock from '../../Media/Icon/lock.png';
import ic_ok from '../../Media/Icon/ok_01.png';
import ic_quan from '../../Media/Icon/ic_quan.png';
import ic_home from '../../Media/Icon/ic_home.png';


// Import Dependencies
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';
import Spinner from 'react-native-loading-spinner-overlay';


import StyleRegistration from '../../Styles/Login/StyleRegistration';
const styles = StyleRegistration.styleRegistration;


// Get Width - Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Registration extends Component {

    constructor(props) {

        super(props);
        this.state = {
            check_erro: '',
            fail: '',
            show_false: false,
            emdn: '',
            checked: false,
            show_true: false,
            visible: false,

        };

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    };

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    handleClose = () => {

        this.setState({ 
            show_false: false,
            show_true: false, 
        })

    };
    handleTrue = () => {

        this.setState({ show_true: false })
        this.props.navigation.resetTo('Login');

    };

    Registration(){

        this.setState({visible: true});

        check_name = this.state.name;
        check_phone = this.state.phone;			
        check_pass = this.state.pass;
        check_pass1 = this.state.pass1;

		if ( 
            check_name == "" || 
            check_phone == "" || 
            check_pass == "" || 
            check_pass1 == "" ) {
			this.setState({
                visible: false,
				fail: "Thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				show_false: true
			});
		}else if( 
            check_name == null || 
            check_phone == null || 
            check_pass == null || 
            check_pass1 == null  ) {
			this.setState({
                visible: false,
				fail: "Thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				show_false: true
			});
        } else if(check_pass != check_pass1   ) {

			this.setState({
                visible: false,
				fail: "Thất bại",
				check_erro: "Mật khẩu của bạn không trùng khớp với nhau",
				show_false: true
			});
        }        else if (check_pass.length < 6 || check_pass1.length < 6) {
            this.setState({
                visible: false,
                fail: "Thất Bại",
                check_erro: "Độ dài mật khẩu của bạn phải lớn hơn 6 ký tự !",
                show_false: true
            });
        }

        else if (check_pass.length > 30 || check_pass1.length > 30) {
            this.setState({
                visible: false,
                fail: "Thất Bại",
                check_erro: "Độ dài mật khẩu của bạn không được vượt quá 30 ký tự !",
                show_false: true
            });
        }

        else if (check_phone.length != 10) {
            this.setState({
                visible: false,
                fail: "Thất Bại",
                check_erro: "Số điện thoại của bạn phải đủ 10 số !",
                show_false: true
            });
        }else{

			fetch("http://library.limcom.vn/API/signup.php", {

				method: "POST",

				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
                    "FNAME": check_name,
					"PHONE": check_phone,		
					"PASS": check_pass
				})

			})

			.then((response) => response.json())

			.then((responseJson) => {
                
                    if (responseJson.Connect == 1) {

                        this.setState({
                            visible: false,
                            show_true: true,
                            fail: "Thành Công",
                            check_erro: "Chúc mừng bạn đã đăng ký tài khoản thành công"
                        })

                    }

                    else if (responseJson.Connect == 0) {

                        this.setState({
                            visible: false,
                            show_false: true,
                            fail: "Thất Bại",
                            check_erro: "Email hoặc số điện thoại đã tồn tại trên hệ thống"
                        })

                    } else if (responseJson.Connect == 3) {

                        this.setState({
                            visible: false,
                            show_false: true,
                            fail: "Thất Bại",
                            check_erro: "Email không tồn tại"
                        })

                    } else if (responseJson.Connect == 2) {

                        this.setState({
                            visible: false,
                            show_false: true,
                            fail: "Thất Bại",
                            check_erro: "Kết nối không thành công, vui lòng kiểm tra lại kết nối Internet"
                        })

                    }

            
				},

			)
			.catch((error) => {

					console.log(error)				
					this.setState({
                        visible: false,
						fail: "Đăng nhập thất bại",
						check_erro: "Kết nối không thành công, vui lòng kiểm tra lại kết nối Internet",
						show_false: true
					});

				}

            );
        }
    }

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    render() {

        const { checked } = this.state;

        return (
            
            <View style = {{ flex: 1}}>

                <Spinner visible={this.state.visible} />

                <ImageBackground
                    source={ic_Background}
                    style={styles.view_Main}>
                    
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>

                        <View style = {styles.view_child_scroll}>

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
                                        onChangeText={(name) => this.setState({ name })}
                                        value={this.state.name}
                                        placeholderTextColor='#fff'
                                        placeholder='Họ và tên'
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>

                                    <View style={styles.fromDN}>

                                        <Image source={ic_phone} style={styles.ImageStyle} />

                                        <TextInput
                                            onChangeText={(phone) => this.setState({ phone })}
                                            value={this.state.phone}
                                            placeholderTextColor='#fff'
                                            placeholder='Số điện thoại'
                                            keyboardType="numeric"
                                            underlineColorAndroid='transparent'
                                            style={styles.style_TextInput} />

                                    </View>

                                    <View style={styles.fromDN}>

                                        <Image source={ic_lock} style={styles.ImageStyle} />

                                        <TextInput
                                            onChangeText={(pass) => this.setState({ pass })}
                                            value={this.state.pass}
                                            placeholderTextColor='#fff'
                                            placeholder='Mật khẩu'
                                            secureTextEntry
                                            underlineColorAndroid='transparent'
                                            style={styles.style_TextInput} />

                                    </View>
                                    <View style={styles.fromDN}>

                                        <Image source={ic_lock} style={styles.ImageStyle} />

                                        <TextInput
                                            onChangeText={(pass1) => this.setState({ pass1 })}
                                            value={this.state.pass1}
                                            placeholderTextColor='#fff'
                                            placeholder='Nhập lại mật khẩu'
                                            secureTextEntry
                                            underlineColorAndroid='transparent'
                                            style={styles.style_TextInput} />

                                    </View>
                                </View>

                            <TouchableOpacity 
                                onPress={() => this.Registration()}
                                style = {styles.view_DN}>

                                <Text style = {styles.text_DN}>ĐĂNG KÝ</Text>

                            </TouchableOpacity>

                            <TouchableOpacity 
                                style = {styles.view_DK}
                                onPress={() => this.handleBackPress()}>

                                <Text style = {styles.text_DK}>Hủy</Text>
                                
                            </TouchableOpacity>

                        </View>

                        <SCLAlert
                                show={this.state.show_false}
                                onRequestClose={this.handleClose}
                                theme="info"
                                title={this.state.fail}
                                subtitle={this.state.check_erro}>

                                <SCLAlertButton theme="info" onPress={this.handleClose}>OK</SCLAlertButton>

                        </SCLAlert>

                        <SCLAlert
                                show={this.state.show_true}
                                onRequestClose={this.handleTrue}
                                theme="info"
                                title={this.state.fail}
                                headerIconComponent={ <Image style={{ width: 50, height: 50, }} source={ic_ok}/>}
                                subtitle={this.state.check_erro}>

                                <SCLAlertButton theme="info" onPress={this.handleTrue}>OK</SCLAlertButton>

                        </SCLAlert>

                    </ScrollView>

                </ImageBackground>

            </View>

        );

    }

}