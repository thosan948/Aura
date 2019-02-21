import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
    Image,
    Dimensions,
    BackHandler,
    View } from "react-native";

// Import Image
import ic_back from '../../Media/Icon/back.png';
import ic_setting from '../../Media/Icon/adc.png';
import icCamera from '../../Media/Icon/camera.png';
import ic_info from '../../Media/Background/fb.jpg';

// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default  class Info extends Component {

    constructor(props) {

        super(props);
        this.state = {

            emdn: '',
            checked: false

        };

    }

    componentDidUpdate(){
        if(this.state.Kaiser == "a"){
        console.log("OKKKKKKKKKKKKKKKK")
        }
    }

    componentDidMount() {

        this.GetData();

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);


    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    }

    goBack(){
        const { navigation } = this.props;
        navigation.pop();
        return true;
    };

    refresh = async () => {
        this.GetData();
    }

    gotoCustom(){
        this.props.navigation.push('Custom', {
            // sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
            onGoBack: () => this.refresh(),
          });

    }

    GetData = async () => {


        try {
            var get_name = await AsyncStorage.getItem("@Cusname:key");
            var get_code = await AsyncStorage.getItem("@Cuscode:key");
            var get_cmnd = await AsyncStorage.getItem("@Cmnd:key");
            var get_phone = await AsyncStorage.getItem("@Cusphone:key");
            var get_birthdate = await AsyncStorage.getItem("@Birthdate:key");
            var get_gioitinh = await AsyncStorage.getItem("@Gender:key");
            var get_tinh = await AsyncStorage.getItem("@Tinh:key");
            var get_quan = await AsyncStorage.getItem("@Quan:key");
            var get_diachi = await AsyncStorage.getItem("@Diachi:key");

            this.setState({
                _name: get_name,
                _code: get_code,
                _cmnd: get_cmnd,
                _phone: get_phone,
                _birthdate: get_birthdate,
                _tinh: get_tinh,
                _quan: get_quan,
                _diachi: get_diachi,
            });
            if(get_gioitinh == '1'){

                this.setState({_gioitinh: "Nam",});
                
            } else if(get_gioitinh == '0'){
                this.setState({_gioitinh: "Nữ",});
            }else{
                this.setState({_gioitinh: "",});
            }

        } catch (error) {
            console.log(error);
        }

    };


    handleBackPress = () => {

        const { navigator } = this.props;
        navigator.pop();
        return true;

    }


    render() {

        return (
            
            <View style = {{ flex: 1}}>
            
                <LinearGradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#b99b64', '#735934']}
                    style={styles.view_Main}>

                    <View style = {styles.view_container}>

                        <View style = {styles.view_warp}>

                            <TouchableOpacity onPress = {() => {this.goBack();}}>
                                <Image source = {ic_back} style = {styles.img_back}/>
                            </TouchableOpacity>


                            <TouchableOpacity onPress = {() => {this.gotoCustom()}}>
                                <Image source = {ic_setting} style = {styles.img_setting}/>
                            </TouchableOpacity>
                        </View>
                            
                        <View>

                            <View style={{
                                    width: deviceWidth * 0.35,
                                    height: deviceWidth * 0.35,
                                    marginTop: - deviceHeight * 0.05,
                                    alignSelf: 'center',
                                    justifyContent: 'flex-end',
                                }}>

                                    <ImageBackground
                                        imageStyle={{
                                            borderRadius: 180,
                                            borderWidth: 2,
                                            borderColor: '#fff'
                                        }}
                                        source={ic_info}
                                        style={styles.imageProfile} >

                                        <TouchableOpacity
                                            style={styles.touchable}
                                            // onPress={this.selectPhoto.bind(this)}
                                            >

                                            <Image source={icCamera} style={styles.ic_camera} />

                                        </TouchableOpacity>

                                    </ImageBackground>

                                </View>

                            <View>
                                <Text style = {[styles.style_txt, {marginTop: deviceHeight * 0.025, fontWeight: 'bold'}]}>{this.state._name}</Text>
                                <Text style = {styles.style_txt}>{this.state._code}</Text>
                            </View>

                        </View>

                                <View>
                                    <View style = {styles.txt_main}>
                                        <Text style = {styles.txt_top}>CMND:</Text>
                                        <Text style = {styles.txt_bottom}>{this.state._cmnd}</Text>
                                    </View>
                                    <View style = {styles.txt_main}>
                                        <Text style = {styles.txt_top}>Số điện thoại:</Text>
                                        <Text style = {styles.txt_bottom}>{this.state._phone}</Text>
                                    </View>
                                    <View style = {styles.txt_main}>
                                        <Text style = {styles.txt_top}>Ngày sinh:</Text>
                                        <Text style = {styles.txt_bottom}>{this.state._birthdate}</Text>
                                    </View>
                                    <View style = {styles.txt_main}>
                                        <Text style = {styles.txt_top}>Địa chỉ:</Text>
                                        <Text style = {styles.txt_bottom}>{this.state._diachi},{" " + this.state._quan},{" " + this.state._tinh}</Text>
                                    </View>
                                    <View style = {styles.txt_main}>
                                        <Text style = {styles.txt_top}>Giới tính:</Text>
                                        <Text style = {styles.txt_bottom}>{this.state._gioitinh}</Text>
                                    </View>
                                </View>


                            <TouchableOpacity style = { [styles.container, {marginBottom: deviceHeight * 0.05}] }>
                                <LinearGradient 
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={['#b99b64', '#735934']}
                                    style = { styles.container }>

                                    <Text style = {{textDecorationLine: 'underline', fontSize: 14, color: '#fff', textAlign: 'center'}}>Đăng Xuất</Text>

                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                </LinearGradient>

            </View>

        );

    }

}

const styles = StyleSheet.create({

    container: {
        height: 35,
        width: 180,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: 'center'
    },

    touchable: {
        alignSelf: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
        height: deviceWidth * 0.1,
        width: deviceWidth * 0.1,
    },

    ic_camera: {
        alignSelf: 'center',
        borderRadius: 180,
        borderWidth: 2,
        borderColor: '#fff',
        height: deviceWidth * 0.1,
        width: deviceWidth * 0.1,
    },

    view_container: {
        flex: 1,
        margin: 10,
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#e6e7e8',
        borderRadius: 30
    },

    imageProfile: {
        width: deviceWidth * 0.40,
        height: deviceWidth * 0.40,
        alignSelf: 'center',
    },
    view_Main: {
        justifyContent: 'center',
        flex: 1,
    },
    view_warp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img_back: {
        height: 45,
        width: 45,
    },
    txt_top: {
        width: '45%',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#735934'
    },
    txt_bottom: {
        fontSize: 14,
        width: '45%',
        color: '#735934',
    },
    txt_main:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 4,
    },
    img_setting:{
        marginRight: 5,
        height: 40,
        width: 40,
    },
    style_txt: {
        textAlign: 'center',
        fontSize: 17,
        color: '#735934',
    }
});