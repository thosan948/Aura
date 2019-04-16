import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    BackHandler,
    View } from "react-native";

// Import Image
import ic_ok from '../../../Media/Icon/ok.png';
import ic_setting from '../../../Media/Icon/setting.png';

// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';
import Maps from '../Maps/Maps';
// Import Components
import Header from '../Header/Header';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Status extends Component {

    constructor(props) {

        super(props);
        this.state = {

            emdn: '',
            checked: false

        };

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    }

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    goBack(){
        const { navigation } = this.props;
        navigation.pop();
        return true;
    }


    render() {

        const Comment = 
        (
            <ScrollView style = {{flex: 1}}>

                <View style = {styles.view_input}>

                    <TextInput
                        onChangeText={(emdn) => this.setState({ emdn })}
                        value={this.state.emdn}
                        placeholderTextColor='#6e5532'
                        placeholder='Ngày làm dịch vụ'
                        underlineColorAndroid='#6e5532'
                        style={[styles.TextInput,{marginTop: deviceHeight * 0.05}]} /> 

                    <View style = {{height: deviceHeight *0.35}}>

                        <TextInput
                            onChangeText={(phone_dk) => this.setState({ phone_dk })}
                            value={this.state.phone_dk}
                            placeholderTextColor='#6e5532'
                            placeholder='Nội dung phản hồi'
                            multiline={true}
                            underlineColorAndroid='#6e5532'
                            style={styles.TextInput} />

                    </View>

                </View>

            </ScrollView>
        );

        const CheckPass = 
        (
            <View style = {{flex: 1, justifyContent: 'center'}}>

                <Text style = {styles.text_pass}>XÁC NHẬN PHẢN HỒI</Text>

                <Text style = {styles.text_pass}>THÀNH CÔNG</Text>

                <Image source = {ic_ok} style = {styles.img_ok}/>

            </View>
        );

        const Bottom = 
        (
            <View>

                <TouchableOpacity style = { [styles.container, {marginTop: 20}] }>

                    <LinearGradient 
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#b99b64', '#735934']}
                        style = { styles.container }>

                            <Text style = {{textDecorationLine: 'underline', fontSize: 14, color: '#fff', textAlign: 'center'}}>XÁC NHẬN</Text>

                    </LinearGradient>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Image source={ic_setting} style={{height: 50, width: 50, margin: -5, marginTop: 10,}}/>
                
                </TouchableOpacity>
            
            </View>

        );

        return (
            
            <View style = {{ flex: 1}}>
            
                <LinearGradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#b99b64', '#735934']}
                    style={styles.view_Main}>

                    <View style = {{
                        flex: 1,
                        backgroundColor: '#e6e7e8',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        padding: 15,
                        margin: 10,
                        borderRadius: 30}}>

                        <View style = {{
                            flex: 1,
                            // padding: 15,
                            // margin: 10,
                            backgroundColor: '#e6e7e8',
                            flexDirection: 'column',
                            borderRadius: 30}}>

                            <Header gotoBack={this.goBack.bind(this)} />

                            {/* {Comment} */}
                            <Maps/>

                        </View>

                        {/* {Bottom} */}

                    </View>

                </LinearGradient>

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

    container: {
        height: 40,
        width: 200,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: 'center'
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

    view_check:{
        width: deviceWidth * 0.7,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    image_logo: {
        alignSelf: "center",
        width: 100,
        height: 100,
    },
    img_ok:{
        marginTop: deviceHeight * 0.025,
        height: 60,
        width: 60,
        alignSelf: 'center',
    },
    image_bg: {
        alignSelf: "center",
        marginTop:  deviceHeight*0.01,
        width: 200,
        height: 200*150/400,
    },

    text_pass:{
        fontFamily: "helveticaneue",
        color: '#6e5532',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    TextInput: {
        // flex:1,
        // backgroundColor: 'white',
        borderRadius: 30,
        width: deviceWidth * 0.7,
        fontSize: 15,
        color: '#6e5532',
        fontFamily: "helveticaneue",
    },

    view_input:{
        alignSelf: 'center',
    },

    text_DN:{
        textAlign : 'center',
        fontFamily: "helveticaneue",
        fontSize: 16,
        textDecorationLine: 'underline'
    }

});