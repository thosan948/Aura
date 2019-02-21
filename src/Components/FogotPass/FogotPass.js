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
    View
} from 'react-native';

// Import Image
import ic_Background from '../../Media/Background/BackgroundLogin.png';
import ic_logo from '../../Media/Logo/aura.png'
import ic_cus from '../../Media/Background/bg_cus.png';
import ic_phone from '../../Media/Icon/ic_phone.png';
import ic_lock from '../../Media/Icon/lock.png';
import ic_card from '../../Media/Icon/ic_card.png';


// Import Dependencies
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';


// Get Width , Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class FogotPass extends Component {
    constructor(props) {

        super(props);
        this.state = {
            check_erro: '',
            fail: '',
            dn_show: false,
            show_true: false,
        };

    };

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);


    };

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    handleClose = () => {

        this.setState({ 
            dn_show: false 
        })

    };

    handleTrue = () => {

        this.setState({ 
            show_true: false 
        });

        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    gotoFogot(){

        check_cmnd = this.state.cmnd;
        check_phone = this.state.phone;			
        check_pass = this.state.pass;
        check_pass1 = this.state.pass1;

		if ( 
            check_cmnd == "" || 
            check_phone == "" || 
            check_pass == "" || 
            check_pass1 == "" ) {
			this.setState({
				fail: "Thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				dn_show: true
			});
		}else if( 
            check_cmnd == null || 
            check_phone == null || 
            check_pass == null || 
            check_pass1 == null  ) {
			this.setState({
				fail: "Thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				dn_show: true
			});
        } else if(check_pass != check_pass1   ) {

			this.setState({
				fail: "Thất bại",
				check_erro: "Mật khẩu của bạn không trùng khớp với nhau",
				dn_show: true
			});
        } else{

			fetch("http://library.limcom.vn/API/resetpass.php", {

				method: "POST",

				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
                    "PHONE": check_phone,	
                    "CMND": check_cmnd,                    	
					"PASS": check_pass
				})

			})

			.then((response) => response.json())

			.then((responseJson) => {

                if(responseJson.Connect == 1){
					this.setState({
						fail: "Thành công",
						check_erro: "Chúc mừng bạn đã lấy lại mật khẩu thành công",
						show_true: true
					});
                }else if(responseJson.Connect == 0){
					this.setState({
						fail: "Thất bại",
						check_erro: "Số chứng minh thư hoặc số điện thoại không chính xác",
						dn_show: true
					});
                }else{
                    this.setState({
						fail: "Đăng nhập thất bại",
						check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
						dn_show: true
					});
                }
			},

			)
			.catch((error) => {

					console.log(error)				
					this.setState({
						fail: "Đăng nhập thất bại",
						check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
						dn_show: true
					});

				}

            );
        }
    };

    render(){

        return (

            <View style = {{flex: 1}}>
                
                <ImageBackground source = {ic_Background} style = {{flex: 1}}>

                    <ScrollView>

                    <View style = {styles.view_warp}>

                            <Image source={ic_logo} style={styles.image_logo}/>

                            <Text style = {styles.txt_fogot}>QUÊN MẬT KHẨU</Text>

                            <Image source = {ic_cus} style = {styles.image_cus}/>

                            <View style = {styles.view_textinput}>


                                <View style={styles.view_fromDN}>

                                    <Image source={ic_phone} style={styles.image_icon} />

                                    <TextInput
                                        onChangeText={(phone) => this.setState({ phone })}
                                        value={this.state.phone}
                                        placeholderTextColor='#fff'
                                        placeholder='Số điện thoại'
                                        keyboardType="numeric"
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>

                                <View style={styles.view_fromDN}>

                                    <Image source={ic_card} style={styles.image_icon} />

                                    <TextInput
                                        onChangeText={(cmnd) => this.setState({ cmnd })}
                                        value={this.state.cmnd}
                                        placeholderTextColor='#fff'
                                        placeholder='Số chứng minh thư'
                                        keyboardType="numeric"
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>
                                <View style={styles.view_fromDN}>

                                    <Image source={ic_lock} style={styles.image_icon} />

                                    <TextInput
                                        onChangeText={(pass) => this.setState({ pass })}
                                        value={this.state.pass}
                                        placeholderTextColor='#fff'
                                        placeholder='Mật khẩu'
                                        secureTextEntry
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>
                                <View style={styles.view_fromDN}>

                                    <Image source={ic_lock} style={styles.image_icon} />

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

                            <View>

                                <TouchableOpacity 
                                    onPress={() => this.gotoFogot()}
                                    style = {styles.view_DN}>

                                    <Text style = {styles.text_DN}>XÁC NHẬN</Text>

                                </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={() => this.handleBackPress()}
                                    style = {styles.view_DK}>

                                    <Text style = {styles.text_DK}>Hủy</Text>

                                </TouchableOpacity>

                            </View>

                        </View>
                        <SCLAlert
                                show={this.state.dn_show}
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
                                subtitle={this.state.check_erro}>

                                <SCLAlertButton theme="info" onPress={this.handleTrue}>OK</SCLAlertButton>

                            </SCLAlert>

                    </ScrollView>

                </ImageBackground>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({

    //Style Image
    image_logo: {
        alignSelf: "center",
        width: 100,
        height: 100,
    },
    image_cus: {
        height: deviceWidth * 0.7 * 50 / 400,
        width: deviceWidth * 0.7,
        alignSelf: "center",
        marginBottom: 15,
    },
    image_icon: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },


    //Style View
    view_warp:{
        marginTop: deviceHeight * 0.075,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    view_textinput:{
        alignSelf: 'center',
        marginTop:deviceHeight * 0.0175
    },
    view_fromDN: {
        width: deviceWidth * .7,
        flexDirection: 'row',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 5,
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


    //Style Text
    txt_fogot: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    },
    style_TextInput: {
        flex:1,
        fontSize: 15,
        color: '#fff',
        fontFamily: "helveticaneue",
    },
    text_DN:{
        textAlign : 'center',
        fontFamily: "helveticaneue",
        fontSize: 16,
        fontWeight: 'bold',
        // textDecorationLine: 'underline'
    },
    text_DK: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 16,
        marginTop:  deviceHeight*0.01,
        fontFamily: "helveticaneue",
        // textDecorationLine: 'underline'
    },
});