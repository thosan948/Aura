import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    BackHandler,
    NetInfo,
    FlatList,
    View } from "react-native";

// Import Image
import ic_setting from '../../../Media/Icon/setting.png';

// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';
import OpenSettings from 'react-native-open-settings';

// Import Components
import Header from '../Header/Header';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Status extends Component {

    constructor(props) {

        super(props);
        this.state = {

            emdn: '',
            checked: false,
            dataSource: [],
            show_false: false,
            fail: '',
            check_erro: '',

        };

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            // console.log(
            //   'Initial, type: ' +
            //     connectionInfo.type +
            //     ', effectiveType: ' +
            //     connectionInfo.effectiveType,
            // );
            if(connectionInfo.type == "none"){

                this.setState({ 
                    show_false: true, 
                    fail: 'Lỗi kết nối',
                    check_erro: 'Bạn hãy kiểm tra lại kết nối Internet hoặc Wifi',
                });

            }else{

                fetch("http://library.limcom.vn/API/getNewAuto.php", {

                    method: "POST",
        
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
        
                })
        
                .then((response) => response.json())
        
                .then(
                    (responseJson) => {
        
                        dataSourceAPI = responseJson;
                        this.setState({
                            dataSource: dataSourceAPI,
                        });
        
                    },
        
                )
                .catch((error) => { console.log(error) });
            }

        });

    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    }

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    handleClose = () => {

        this.setState({ 
            show_false: false 
        });

    };

    handleOK = () => {

        this.setState({ 
            show_false: false 
        });
        OpenSettings.openSettings();

    };

    goBack(){
        const { navigation } = this.props;
        navigation.pop();
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

                    <View style = {{
                        flex: 1,
                        backgroundColor: '#e6e7e8',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        padding: 5,
                        margin: 10,
                        borderRadius: 30}}>

                        <View style = {{
                            flex: 1,
                            backgroundColor: '#e6e7e8',
                            flexDirection: 'column',
                            borderRadius: 30}}>

                            <View style = {{margin: 10}}>

                                <Header gotoBack={this.goBack.bind(this)} />

                            </View>

                            <View style = {{ flex: 1 }}>
                                <View>
                                    <Text style = {styles.text_pass}>TIN TỨC</Text>
                                </View>
                                <View style = {{flex: 1, marginTop: deviceHeight * 0.02,margin: 5}}>

                                    <ScrollView 
                                        // showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        style = {{flex: 1, }}>

                                        <View style = {{justifyContent: 'space-between', flex: 1}}>

                                            <FlatList
                                                data={this.state.dataSource}
                                                showsVerticalScrollIndicator={false}
                                                keyExtractor={item => item.date }
                                                renderItem={({ item }) => {

                                                    const item_child = (

                                                        <View style = {{marginBottom: 5, marginLeft: 5}}>

                                                            <TouchableOpacity 
                                                                onPress={() => this.props.gotoWedview(links = item.url)}
                                                                style = {{flexDirection: 'row', flex: 1}}>

                                                                <View style = {{flex: 1}}>

                                                                    <Image 
                                                                        source = {{ uri: item.image }}
                                                                        style = {{
                                                                            width: 50,
                                                                            borderRadius: 5,
                                                                            height: 50
                                                                        }}
                                                                    />

                                                                </View>

                                                                <View style = {{justifyContent: 'center', height: 50, flex: 5 ,paddingLeft: 10,}}>
                                                                    
                                                                    <Text style =  {{color: '#3f301d', fontSize: 13}}>{item.title}</Text>
                                                                
                                                                </View>

                                                            </TouchableOpacity>

                                                            <View style ={{backgroundColor: '#99856a', height: 0.5, marginTop: 5}}/>
                                                        
                                                        </View>

                                                    );

                                                    const item_main = (

                                                        <View>

                                                            <TouchableOpacity 
                                                                onPress={() => this.props.gotoWedview(links = item.url)}
                                                                style = {{
                                                                    backgroundColor: '#fff', 
                                                                    borderRadius: 10,
                                                                    height: deviceHeight * 0.45}}>

                                                                <Image source = {{ uri: item.image }}
                                                                    style = {{
                                                                        borderTopLeftRadius: 10,
                                                                        borderTopRightRadius: 10,
                                                                        height: deviceHeight * 0.3}}/>

                                                                    <Text 
                                                                        style = {{
                                                                            marginLeft: 10, 
                                                                            marginRight:10, 
                                                                            fontWeight: '900',
                                                                            fontSize: 14,
                                                                            color: '#735934',
                                                                            marginTop: 5}}>{item.title}</Text>

                                                                    <Text 
                                                                        style = {{
                                                                            marginLeft: 15, 
                                                                            marginRight:15, 
                                                                            fontSize: 12,
                                                                            color: '#474646',
                                                                            marginTop: 5}}>{item.content}</Text>

                                                            </TouchableOpacity>

                                                            <View style = {{height: 0.5, marginTop: 8, backgroundColor: '#99856a', marginBottom: 8}}/>
                                                        
                                                        </View>
                                                    );
                                            
                                                    if(item.id == 0){

                                                        kaiser = item.content;
                                                        adc = kaiser.length;

                                                        if(adc >= 150){

                                                            item.content = kaiser.slice(0,150) + "...";

                                                        }else if(adc < 150){

                                                            item.content = kaiser;

                                                        }

                                                        check_item = item_main

                                                    }else{

                                                        check_item = item_child

                                                    };
                                                    
                                                        return (

                                                            <View> 
                                                                {check_item} 
                                                            </View>

                                                        );

                                                    }

                                                }
                                                
                                            />

                                        </View>

                                    </ScrollView>

                                </View>

                            </View>

                        </View>

                        <View>

                            <TouchableOpacity style={{height: 50, width: 50, margin: 5,}}>

                                <Image source={ic_setting} style={{height: 50, width: 50, }}/>

                            </TouchableOpacity>
                            
                        </View>

                    </View>

                    <SCLAlert
                        show={this.state.show_false}
                        onRequestClose={this.handleClose}
                        theme="info"
                        title={this.state.fail}
                        subtitle={this.state.check_erro}>

                        <SCLAlertButton theme="info" onPress={this.handleOK}>OK</SCLAlertButton>

                    </SCLAlert>

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
    text_pass:{
        fontFamily: "helveticaneue",
        color: '#6e5532',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
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
    view_top: {
        backgroundColor: '#6e5532',
        justifyContent: 'center',
        width: deviceWidth * 0.25,
        height: 30,
        marginLeft: 2,
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
    view_main: {
        flexDirection: 'row'
    },

});