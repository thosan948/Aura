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
import NumberFormat from 'react-number-format';
import OpenSettings from 'react-native-open-settings';
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';

// Import Components
import Header from '../Header/Header';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Status extends Component {

    constructor(props) {

        super(props);
        this.state = {
            show_false: false,
            checkWifi: false,
            fail: '',
            fail: '',
            check_erro: '',
            emdn: '',
            checked: false,
            dataSource: [],

        };

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this._LoadData();
    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    }
    _LoadData(){

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if(connectionInfo.type == "none"){
                this.setState({ 
                    checkWifi: true,
                    fail: 'Lỗi kết nối',
                    check_erro: 'Bạn hãy kiểm tra lại kết nối Internet hoặc Wifi',
                    show_false: true, 

                })
            }else{

                fetch("http://library.limcom.vn/API/getOrders.php", {

                    method: "POST",
        
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
        
                    body: JSON.stringify({
                        "IDCUS": "1523"
                    })
        
                })
        
                .then((response) => response.json())
        
                .then(
                    (responseJson) => {
        
                        console.log(responseJson)
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

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    handleWifi = () => {

        this.setState({ 
            show_false: false,
            checkWifi: false,
        });
        OpenSettings.openSettings();

    }
    handleClose = () => {

        this.setState({ 
            show_false: false 
        })

    }

    goBack(){

        const { navigation } = this.props;
        navigation.pop();
        return true;

    }

    render() {

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

                                    <Text style = {styles.text_pass}>HÓA ĐƠN</Text>

                                </View>

                                <View style = {{flexDirection: 'row', marginTop: deviceHeight * 0.03, alignSelf: 'center',}}>
                                    
                                    <ScrollView 
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        horizontal={true}>

                                        <View>

                                            <View style = {styles.view_main}>

                                                <View style = {[styles.view_top, {marginLeft: 0}]}>

                                                    <Text style = {styles.text_top}>Ngày</Text>

                                                </View>

                                                <View style = {styles.view_top}>

                                                    <Text style = {styles.text_top}>Tên Hóa Đơn</Text>

                                                </View>

                                                <View style = {styles.view_top}>

                                                    <Text style = {styles.text_top}>Tổng tiền</Text>

                                                </View>

                                                <View style = {styles.view_top}>

                                                    <Text style = {styles.text_top}>Đã thu</Text>

                                                </View>

                                                <View style = {styles.view_top}>

                                                    <Text style = {styles.text_top}>Còn lại</Text>

                                                </View>

                                            </View>

                                            <FlatList
                                                style = {{height: deviceHeight * 0.5}}
                                                data={this.state.dataSource}
                                                showsVerticalScrollIndicator={false}
                                                keyExtractor={item => item.id}
                                                renderItem={({item}) =>

                                                    <TouchableOpacity onPress={() => this.props.gotoChitiet(id_order = item.orderid)}>

                                                        <View style = {styles.view_main}>

                                                            <View style = {[styles.view_bottom, {marginLeft: 0}]}>
                                                                
                                                                <Text style = {styles.text_bottom}>{item.datetime}</Text>
                                                            
                                                            </View>

                                                            <View style = {styles.view_bottom}>

                                                                <Text style = {styles.text_bottom}>{item.orderid}</Text>

                                                            </View>

                                                            <View style = {styles.view_bottom}>

                                                                <NumberFormat
                                                                    value={item.total}
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    // format="### ###" 
                                                                    renderText={value => <Text style = {[styles.text_bottom,{color: '#0a0a0a'}]}>{value}</Text>}
                                                                />

                                                            </View>

                                                            <View style = {styles.view_bottom}>

                                                                <NumberFormat
                                                                    value={item.dathu}
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    // format="### ###" 
                                                                    renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
                                                                />

                                                            </View>

                                                            <View style = {styles.view_bottom}>

                                                                <NumberFormat
                                                                    value={item.conno}
                                                                    displayType={'text'}
                                                                    thousandSeparator={true}
                                                                    // format="### ###" 
                                                                    renderText={value => <Text style = {[styles.text_bottom,{color: '#cc0000'}]}>{value}</Text>}
                                                                />

                                                            </View>
                                                            
                                                        </View>

                                                    </TouchableOpacity>
                                                    

                                                }

                                            />

                                        </View>

                                        <SCLAlert
                                            show={this.state.show_false}
                                            onRequestClose={this.handleClose}
                                            theme="info"
                                            title={this.state.fail}
                                            subtitle={this.state.check_erro}>

                                            {/* <SCLAlertButton theme="info" onPress={this.handleClose}>OK</SCLAlertButton> */}
                                            {Thongbao}
                                        </SCLAlert>
                                        
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
        marginTop: deviceHeight * 0.025,
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