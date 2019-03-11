import React, { Component } from 'react';

import { 
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    BackHandler,
    AsyncStorage,
    Alert,
    TextInput,
    ToastAndroid,
    NetInfo,
    FlatList,
    View } from "react-native";

// Import Image
import ic_setting from '../../../Media/Icon/setting.png';
import ic_them from '../../../Media/Icon/them.png';
import ic_huy from '../../../Media/Icon/icon_exit.png';
import ic_search from '../../../Media/Icon/search.png';

// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';
import NumberFormat from 'react-number-format';
import OpenSettings from 'react-native-open-settings';
// import { DialogComponent }from 'react-native-dialog-component';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';

// Import Components
import Header from '../Header/Header';

// Import Style
import StyleOrder from '../../../Styles/Main/Order/StyleOrder';
// import { TextInput } from 'react-native-paper';
const styles = StyleOrder.styleOrder;

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

var dataSourceAPI = [] , dataDVAPI = [], dataFinal = [], item_show = false;


export default class Order extends Component {

    constructor(props) {

        super(props);
        this.state = {

            show_false: false,
            check_erro: '',
            checkWifi: false,
            dialogDV: false,
            dialogVisible: false,
            fail: '',
            dataSource: [],
            nameSP: '',
            nameDV: '',
            check_sttSP: false,
            a: 1,

        };

    }

    componentDidMount(){
        this._LoadData();
        this._GetData();
    }

    _GetData = async () => {


        try {
            var get_id = await AsyncStorage.getItem("@Id:key");
            this.setState({
                get_id: get_id,
            });
        } catch (error) {
            console.log(error);
        }

    };

    _LoadData = async () => {

        try {
            var get_id = await AsyncStorage.getItem("@Id:key");
            this.setState({
                get_id: get_id,
            });
        } catch (error) {
            console.log(error);
        }

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if(connectionInfo.type == "none"){
                this.setState({ 
                    checkWifi: true,
                    fail: 'Lỗi kết nối',
                    check_erro: 'Bạn hãy kiểm tra lại kết nối Internet hoặc Wifi',
                    show_false: true, 

                })
            }else{

                fetch("http://library.limcom.vn/API/getAllMypham.php", {

                    method: "GET",
        
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
        
                })
        
                .then((response) => response.json())
        
                .then(
                    (responseJson) => {
        
                        dataSourceAPI = responseJson;
                        // console.log( dataSourceAPI + " aaaaaaaaa")
                        if(dataSourceAPI != "EMPTY ORDER"){
                            this.setState({
                                dataSource: dataSourceAPI,
                            });
                        }else if (dataSourceAPI == "EMPTY ORDER"){
                            ToastAndroid.showWithGravity("Không có dữ liệu", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                        }

        
                    },
        
                )
                .catch((error) => { console.log(error) });

                fetch("http://library.limcom.vn/API/getAllDichvu.php", {

                    method: "GET",
        
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
        
                })
        
                .then((response) => response.json())
        
                .then(
                    (responseJson) => {
        
                        dataDVAPI = responseJson;
                        // console.log( dataSourceAPI + " aaaaaaaaa")
                        if(dataDVAPI != "EMPTY ORDER"){
                            this.setState({
                                dataSourceDV: dataDVAPI,
                            });
                        }else if (dataDVAPI == "EMPTY ORDER"){
                            ToastAndroid.showWithGravity("Không có dữ liệu", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                        }

        
                    },
        
                )
                .catch((error) => { console.log(error) });

            }

        });

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

    };

    _changeSP(txtSP){
        this.setState({ txtSP });
        data = dataSourceAPI.filter(dataSourceAPI => dataSourceAPI.brandname.toUpperCase().indexOf(txtSP.toUpperCase()) >= 0);
        this.setState({
            // options: dataoptions.filter(dataoptions => dataoptions.tinhthanh == emdn),
            dataSource: data
        });
    };
    
    _changeDV(){
        this.setState({ txtDV });
        data = dataSourceAPI.filter(dataSourceAPI => dataSourceAPI.brandname.toUpperCase().indexOf(txtDV.toUpperCase()) >= 0);
        this.setState({
            // options: dataoptions.filter(dataoptions => dataoptions.tinhthanh == emdn),
            dataSource: data
        });
    };

    _checkSP(name){
        this.setState({ 
            nameSP: name,
            dialogVisible: false,
            sttSP: "1",
        })
    };

    _checkDV(name){
        this.setState({ 
            nameDV: name,
            dialogDV: false,
            sttDV: "1",
        })
    };

    _deleteFinal = (code) => {
        objIndex = dataFinal.findIndex(obj => obj.code === code);
        dataFinal.splice(objIndex, 1);
        item_show = false;
        this.setState({a: 1});

    };

    _addSP = () => {
        this.setState({a : Number(this.state.a + 1)});
        
        if (this.state.nameSP == ''){
            this.setState({
                show_false: true,
                check_erro: "Bạn cần chọn sản phẩm trước khi thêm",
                fail: "Thất bại",
            });
        }else{
            var data = dataFinal.filter(dataFinal => dataFinal.brandname == this.state.nameSP);
            dataAPI = dataSourceAPI.filter(dataSourceAPI => dataSourceAPI.brandname == this.state.nameSP);

            if(dataFinal.findIndex(obj => obj.code === dataAPI[0]['code']) >= 0){
                numberST = Number(data[0]['soluong']) + Number(this.state.sttSP);
                objIndex = dataFinal.findIndex(obj => obj.code === data[0]['code']);
                updatedObj = { ...dataFinal[objIndex], 
                    brandname : data[0]['brandname'],
                    code : data[0]['code'],
                    donvi : data[0]['donvi'],
                    dongia : data[0]['dongia'],
                    // 'soluong' : data[0]['price'],
                    thanhtien : Number(data[0]['dongia']) * numberST,
                    soluong: numberST,};
                dataFinal.splice(objIndex, 1)

                dataFinal.unshift(updatedObj)
                // var obj = {
                //     'brandname' : data[0]['brandname'],
                //     'code' : data[0]['code'],
                //     'donvi' : data[0]['donvi'],
                //     'price' : data[0]['price'],
                //     'soluong' : numberSTT,
                //     'thanhtien' : Number(data[0]['price']) * numberSTT,
        
                    
                // };
                // dataFinal.push(obj);
                // dataFinal = check_data;

                this.setState({
                    code: '',
                });
                item_show = false;
          

            }else{
            numberSTT = this.state.sttSP;
            data = dataSourceAPI.filter(dataSourceAPI => dataSourceAPI.brandname == this.state.nameSP);
            var obj = {
                brandname : data[0]['brandname'],
                code : data[0]['code'],
                donvi : data[0]['donvi'],
                dongia : data[0]['price'],
                soluong : Number(this.state.sttSP),
                thanhtien : Number(data[0]['price']) * numberSTT,


                
            };
            dataFinal.unshift(obj);
            this.setState({
                check_sttSP: true,
                sttSP: String(numberSTT)}
            );
            }
        }
        
    }

    _addDV = () => {
        
        if (this.state.nameDV == ''){
            this.setState({
                show_false: true,
                check_erro: "Bạn cần chọn dịch vụ",
                fail: "Thất bại",
            });
        }else{
            var data = dataFinal.filter(dataFinal => dataFinal.brandname == this.state.nameDV);
            dataAPI = dataDVAPI.filter(dataDVAPI => dataDVAPI.brandname == this.state.nameDV);

            if(dataFinal.findIndex(obj => obj.code === dataAPI[0]['code']) >= 0){
                numberDV = Number(data[0]['soluong']) + Number(this.state.sttDV);
                objIndex = dataFinal.findIndex(obj => obj.code === data[0]['code']);
                updatedObj = { ...dataFinal[objIndex], 
                    brandname : data[0]['brandname'],
                    code : data[0]['code'],
                    donvi : data[0]['donvi'],
                    dongia : data[0]['dongia'],
                    // 'soluong' : data[0]['price'],
                    thanhtien : Number(data[0]['dongia']) * numberDV,
                    soluong: numberDV,};
                dataFinal.splice(objIndex, 1)

                dataFinal.unshift(updatedObj)
                // var obj = {
                //     'brandname' : data[0]['brandname'],
                //     'code' : data[0]['code'],
                //     'donvi' : data[0]['donvi'],
                //     'price' : data[0]['price'],
                //     'soluong' : numberSTT,
                //     'thanhtien' : Number(data[0]['price']) * numberSTT,
        
                    
                // };
                // dataFinal.push(obj);
                // dataFinal = check_data;

                this.setState({
                    check_sttDV: true,
                    code: '',
                });
                item_show = false;
          

            }else{
            numberSTT = this.state.sttDV;
            data = dataDVAPI.filter(dataDVAPI => dataDVAPI.brandname == this.state.nameDV);
            var obj = {
                brandname : data[0]['brandname'],
                code : data[0]['code'],
                donvi : data[0]['donvi'],
                dongia : data[0]['price'],
                soluong : Number(this.state.sttDV),
                thanhtien : Number(data[0]['price']) * numberSTT,


                
            };
            dataFinal.unshift(obj);
            this.setState({
                check_sttDV: true,
                sttSP: String(numberSTT)}
            );
            }
        }
        
    };

    _gotoOrder = () =>{


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

                if ( String(dataFinal) == '' || String(dataFinal) == null ) {
        
                    this.setState({
                        visible: false,
                        fail: "Đặt hàng thất bại",
                        check_erro: "Vui lòng chọn sản phẩm hoặc dịch vụ mà bạn cần",
                        show_false: true
                    });
                    
                }else{

                    fetch("http://library.limcom.vn/API/cusorder.php", {
        
                        method: "POST",
        
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                        },
        
                        body: JSON.stringify({
                            "ID": this.state.get_id,		// POST biến MAIL
                            "LIST": dataFinal
                        })
        
                    })
        
                    .then((response) => response.json())
        
                    .then((responseJson) => {
    
        
                            if (responseJson.Connect == "1") {				
                                
                                dataFinal = [];

                                this.setState({
                                    visible: false,
                                    nameSP: '',
                                    nameDV: '',
                                    fail: "Đặt hàng thành công",
                                    check_erro: "Bạn đã đặt hàng thành công, chúng tôi sẽ liên hệ với bạn sau",
                                    show_false: true
                                });
        
                            }else{
        
                                this.setState({
                                    visible: false,
                                    fail: "Đặt hàng thất bại",
                                    check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
                                    show_false: true
                                });
                                
                            }
        
                        },
        
                    )
                    .catch((error) => {
        
                            console.warn(error)				
                            // this.setState({
                            //     visible: false,
                            //     fail: "0000 Đăng nhập thất bại",
                            //     check_erro: "0000 Bạn hãy kiểm tra lại kết nối",
                            //     show_false: true
                            // });
        
                        }
        
                    );

                }

            }

        });

    };
    
    goBack(){
        const { navigation } = this.props;
        navigation.pop();
        return true;
    }

    render(){

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

            <View style = {{flex: 1}}>
            
                <LinearGradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#b99b64', '#735934']}
                    style={styles.view_Gradient}>

                    <View style = { styles.view_MainWhite}>

                        <Header gotoBack={this.goBack.bind(this)}/>

                        <View style = {{flex: 1,justifyContent:'space-between'}}>

                            <View>

                                <View style = {[styles.view_Order,{marginTop: 16}]}>

                                    <TouchableOpacity 
                                        onPress={() => {
                                            this.setState({dialogVisible: true, check_sttSP: false})
                                            }}
                                        style = {styles.view_TouchabOrder}>

                                        <Text style = {styles.txt_SanPham}>{this.state.nameSP != "" ? this.state.nameSP : "Tìm sản phẩm"}</Text>

                                    </TouchableOpacity>

                                    <TextInput 
                                        underlineColorAndroid='transparent'
                                        value={this.state.nameSP != "" ? this.state.sttSP : ""}
                                        onChangeText={(sttSP) => this.setState({ sttSP })}
                                        style = {styles.view_TextInput}>

                                    </TextInput>

                                    <TouchableOpacity 
                                        style = {styles.view_IconOrder}
                                        onPress={() => this._addSP()}>

                                        <Image source = {ic_them} style = {styles.img_Order}/>

                                    </TouchableOpacity>

                                </View>

                                <View style = {[styles.view_Order,{marginBottom: 20}]}>

                                    <TouchableOpacity 
                                        onPress={() => {
                                            this.setState({dialogDV: true});
                                            }}
                                        style = {styles.view_TouchabOrder}>

                                        <Text style = {styles.txt_SanPham}>{this.state.nameDV != "" ? this.state.nameDV : "Tìm dịch vụ"}</Text>

                                    </TouchableOpacity>

                                    <TextInput 
                                        onChangeText={(sttDV) => this.setState({ sttDV })}
                                        underlineColorAndroid='transparent'
                                        value={this.state.nameDV != "" ? this.state.sttDV : ""}
                                        style = {styles.view_TextInput}>

                                    </TextInput>

                                    <TouchableOpacity 
                                        style = {styles.view_IconOrder}
                                        onPress={() => this._addDV()}>


                                        <Image source = {ic_them} style = {styles.img_Order}/>

                                    </TouchableOpacity>

                                </View>

                            </View>

                            <ScrollView 
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                horizontal={true}>

                                <View style = {{flexDirection: 'column'}}>

                                    <View style = {{flexDirection: 'row'}}>

                                        <View style = {[styles.view_top, {width: deviceWidth * 0.25, marginLeft: 0}]}>

                                            <Text style = {styles.text_top}>Mã SP-DV</Text>

                                        </View>

                                        <View style = {[styles.view_top, {width: deviceWidth * 0.35}]}>

                                            <Text style = {styles.text_top}> Tên SP-DV</Text>

                                        </View>

                                        <View style = {[styles.view_top,{width: deviceWidth * 0.2}]}>

                                            <Text style = {styles.text_top}>Đơn vị</Text>

                                        </View>

                                        <View style = {[styles.view_top,{width: deviceWidth * 0.2}]}>

                                            <Text style = {styles.text_top}>Số lượng</Text>

                                        </View>

                                        <View style = {styles.view_top}>

                                            <Text style = {styles.text_top}>Đơn giá</Text>

                                        </View>

                                        <View style = {styles.view_top}>

                                            <Text style = {styles.text_top}>Thành tiền</Text>

                                        </View>

                                    </View>

                                    <FlatList
                                        style = {{height: deviceHeight * 0.55, width: '100%'}}
                                        data={dataFinal}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={item => item.code}
                                        renderItem={({item}) =>

                                            <View style = {{flexDirection: "column"}}>
                                                <TouchableOpacity 
                                                    onPress={() => {
                                                        this.setState({code: item.code, dialogCT: true});
                                                    }}
                                                    style = {{flexDirection: 'row', }}>
                                                    

                                                    <View style = {[styles.view_bottom, {marginLeft: 0}]}>
                                                        {this._check(code = item.code, item)}
                                                        
                                                        <Text style = {styles.text_bottom}>{item.code}</Text>
                                                    
                                                    </View>

                                                    <View style = {[styles.view_bottom, {width : deviceWidth * 0.35}]}>

                                                        <Text style = {styles.text_bottom}>{item.brandname}</Text>

                                                    </View>

                                                    <View style = {[styles.view_bottom,{width : deviceWidth * 0.2}]}>

                                                        <Text style = {styles.text_bottom}>{item.donvi}</Text>

                                                    </View>

                                                    <View style = {[styles.view_bottom,{width : deviceWidth * 0.2}]}>

                                                        <Text style = {styles.text_bottom}>{item.soluong}</Text>

                                                    </View>

                                                    <View style = {styles.view_bottom}>

                                                        <NumberFormat
                                                            value={item.dongia}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            // format="### ###" 
                                                            renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
                                                        />

                                                    </View>

                                                    <View style = {styles.view_bottom}>

                                                        <NumberFormat
                                                            value={item.thanhtien}
                                                            displayType={'text'}
                                                            thousandSeparator={true}
                                                            // format="### ###" 
                                                            renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
                                                        />

                                                    </View>
                                                    
                                                </TouchableOpacity>

                                                {/* {this._check_ModalLoad(code = item.code, item)} */}

                                            </View>
                                            

                                        }

                                    />
                                </View>

                            </ScrollView>

                        </View>

                        <ConfirmDialog
                            title="Tìm kiếm dịch vụ"
                            message="Are you sure about that?"
                            visible={this.state.dialogDV}
                            contentStyle = {{padding: null}}
                            onTouchOutside={() => this.setState({dialogDV: false})}
                            positiveButton={{
                                title: "OK",
                                onPress: () => this.setState({dialogDV: false})
                            }}
                            // negativeButton={{
                            //     title: "NO",
                            //     onPress: () => alert("No touched!") 
                            // }}
                            >
                            <View style = {{width: '100%'}}>

                                <View style = {{flexDirection: 'row', paddingLeft: 10, 
                                paddingBottom: 5,paddingRight: 10}}>

                                    <Image source = {ic_search} style = {{height: 35, width: 35}}></Image>

                                    <TextInput 
                                        onChangeText={(txtDV) => this._changeDV(txtDV)}
                                        underlineColorAndroid='transparent'
                                        placeholder='Nhập tên dịch vụ'
                                        placeholderTextColor="#777777"
                                        value={this.state.txtDV}
                                        style = {{flex: 1, paddingLeft: 5}}></TextInput>

                                </View>
                                
                                <FlatList
                                    style = {{height: deviceHeight * 0.55, width: '100%'}}
                                    data={this.state.dataSourceDV}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) =>
                                        <TouchableOpacity 
                                            onPress={() => {
                                                this._checkDV(name = item.brandname);
                                            }}
                                            style = {{
                                                paddingLeft: 5,
                                                justifyContent: 'center',
                                                borderTopWidth: 0.2,
                                                borderTopColor: '#aaa',
                                                height: 30, 
                                                width: '100%'}}>
                                            <Text>{item.brandname}</Text>
                                        </TouchableOpacity>
                                    }

                                />
                                </View>

                        </ConfirmDialog>

                        <ConfirmDialog
                            title="Tìm kiếm sản phẩm"
                            message="Are you sure about that?"
                            visible={this.state.dialogVisible}
                            contentStyle = {{padding: null}}
                            onTouchOutside={() => this.setState({dialogVisible: false})}
                            positiveButton={{
                                title: "OK",
                                onPress: () => this.setState({dialogVisible: false})
                            }}
                            // negativeButton={{
                            //     title: "NO",
                            //     onPress: () => alert("No touched!") 
                            // }}
                            >
                            <View style = {{width: '100%'}}>

                                <View style = {{flexDirection: 'row', paddingLeft: 10, 
                                paddingBottom: 5,paddingRight: 10}}>

                                    <Image source = {ic_search} style = {{height: 35, width: 35}}></Image>

                                    <TextInput 
                                        onChangeText={(txtSP) => this._changeSP(txtSP)}
                                        underlineColorAndroid='transparent'
                                        placeholder='Nhập tên sản phẩm'
                                        placeholderTextColor="#777777"
                                        value={this.state.txtSP}
                                        style = {{flex: 1, paddingLeft: 5}}></TextInput>

                                </View>
                                
                                <FlatList
                                    style = {{height: deviceHeight * 0.55, width: '100%'}}
                                    data={this.state.dataSource}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) =>
                                        <TouchableOpacity 
                                            onPress={() => {
                                                this._checkSP(name = item.brandname);
                                            }}
                                            style = {{
                                                paddingLeft: 5,
                                                justifyContent: 'center',
                                                borderTopWidth: 0.2,
                                                borderTopColor: '#aaa',
                                                height: 30, 
                                                width: '100%'}}>
                                            <Text>{item.brandname}</Text>
                                        </TouchableOpacity>
                                    }

                                />
                                </View>

                        </ConfirmDialog>




                            <TouchableOpacity 
                                onPress={() => {
                                    this._gotoOrder();
                                }}
                                style={{
                                    height: 35,
                                    borderRadius: 180,
                                    width: deviceWidth * 0.5,
                                    justifyContent: 'center',
                                    backgroundColor: '#735934',
                                    alignSelf: 'center',
                                    marginBottom: 10,}}>

                            <Text 
                                style = {{
                                    color: '#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    }}>Đặt hàng</Text>
                                
                            </TouchableOpacity>


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

                    {/* <DialogComponent
                        ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
                    >
                        <View>
                        <Text>Hello</Text>
                        </View>
                    </DialogComponent> */}



                </LinearGradient>

            </View>

        );
    }

    // _check_ModalLoad = (code, item) => {
    //     if(this.state.code == code && item_show == true){

    //         // AlertIOS.alert('Reset Data',
    //         // 'Are you sure you want to reset your data?',
    //         // [{text:'Yes', onPress: () => console.log('FIRE')},
    //         //  {text:'No'}]);
    //         // this.setState({a: 1})
    //         return(
    //             <View 
    //                 style = {{
    //                     borderWidth: 0.5,
    //                     borderTopWidth: 0,
    //                     padding: 5,
    //                     backgroundColor: '#fff',
    //                     borderColor: '#6e5532',}}>
    //                 <View>
    //                     <Text style = {{color: '#6e5532', fontSize: 14, fontWeight: 'bold'}}>Thông tin chi tiết: </Text>  
    //                 </View>
    //                 <View style = {{flexDirection: 'row'}}>
    //                     <Text> Mã SP-DV: </Text>  
    //                     <Text style = {{fontSize: 14,}}>{item.code}</Text>                 
    //                 </View>
    //                 <View style = {{flexDirection: 'row'}}>
    //                     <Text> Tên SP-DV: </Text>  
    //                     <Text style = {{fontSize: 14,}}>{item.brandname}</Text>                 
    //                 </View>
    //                 <View style = {{flexDirection: 'row'}}>
    //                     <Text> Số lượng: </Text>  
    //                     <Text style = {{fontSize: 14,}}>{item.soluong}</Text>                 
    //                 </View>
    //                 <View style = {{flexDirection: 'row'}}>
    //                     <Text> Đơn giá: </Text>  
    //                     <NumberFormat
    //                         value={item.dongia}
    //                         displayType={'text'}
    //                         thousandSeparator={true}
    //                         // format="### ###" 
    //                         renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
    //                     />                 
    //                 </View>
    //                 <View style = {{flexDirection: 'row'}}>
    //                     <Text> Thành tiền: </Text>  
    //                     <NumberFormat
    //                         value={item.dongia}
    //                         displayType={'text'}
    //                         thousandSeparator={true}
    //                         // format="### ###" 
    //                         renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
    //                     />                    
    //                 </View>

    //             </View>



    //         );
    //     }else if(this.state.code == code && item_show == false){
    //         return(
    //             <View>
    //             </View>
    //         );
    //     }else{
    //         return(
    //             <View>
    //                 {/* <Text>aaaaaaaaa</Text> */}
    //             </View>
    //         );
    //     }
    // };

    _check = (code, item) => {
        if(this.state.code == code && item_show == false){

            // this.setState({a: 1})
            item_show = true;

            // Alert.alert(
            //     'Thông tin chi tiết',
            //     '',
            //     [
            //       {text: 'Mã SP-DV: ' + item.brandname, onPress: () => console.log('Ask me later pressed')},
            //       {
            //         text: 'Cancel',
            //         onPress: () => console.log('Cancel Pressed'),
            //         style: 'cancel',
            //       },
            //       {text: 'OK', onPress: () => console.log('OK Pressed')},
            //     ],
            //     {cancelable: false},
              
            // );
            // this.setState({a: 1})
            return(
                <View>

                    <TouchableOpacity 
                        onPress={() => {
                            this._deleteFinal(code);
                        }}
                        style = {{height: 22, width: 22, marginTop: -12, position: 'absolute'}}>

                        <Image source = {ic_huy} style = {{ width: 15, height: 15}}/>
                   
                    </TouchableOpacity>

                    <ConfirmDialog
                        title="Thông tin chi tiết"
                        // message="Are you sure about that?"
                        visible={this.state.dialogCT}
                        contentStyle = {{padding: 10}}
                        onTouchOutside={() => {item_show = false; this.setState({dialogCT: false})}}
                        positiveButton={{
                            title: "OK",
                            onPress: () => {item_show = false; this.setState({dialogCT: false})}
                        }}>
                        <View style = {{ width: '100%', flexDirection: 'column'}}>

                            <View style = {{flexDirection: 'row', marginTop: 5}}>
                                <View style = {{ width: "30%"}}>
                                    <Text> Mã SP-DV: </Text>  
                                </View>
                                <View style = {{ width: "70%"}}>
                                    <Text style = {{fontSize: 14, color:'#A50808'}}>{item.code}</Text>    
                                </View>             
                            </View>

                            <View style = {{flexDirection: 'row', marginTop: 5}}>
                                <View style = {{backgroundColor: '#eee', width: "30%"}}>
                                    <Text> Tên SP-DV: </Text>  
                                </View>
                                <View style = {{ width: "70%"}}>
                                    <Text style = {{fontSize: 14,}}>{item.brandname}</Text>    
                                </View>             
                            </View>

                            <View style = {{flexDirection: 'row', marginTop: 5}}>
                                <View style = {{ width: "30%"}}>
                                    <Text> Số lượng: </Text>  
                                </View>
                                <View style = {{ width: "70%"}}>
                                    <Text style = {{fontSize: 14,}}>{item.soluong}</Text>    
                                </View>             
                            </View>

                            <View style = {{flexDirection: 'row', marginTop: 5}}>
                                <View style = {{ width: "30%"}}>
                                    <Text> Đơn giá: </Text>  
                                </View>
                                <View style = {{width: "70%"}}>
                                    <NumberFormat
                                        value={item.dongia}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        // format="### ###" 
                                        renderText={value => <Text style = {[styles.text_bottom,{textAlign: null,color: '#007005'}]}>{value} đ</Text>}
                                    /> 
                                </View>             
                            </View>

                            <View style = {{flexDirection: 'row', marginTop: 5}}>
                                <View style = {{ width: "30%"}}>
                                    <Text> Thành tiền: </Text>  
                                </View>
                                <View style = {{ width: "70%"}}>
                                    <NumberFormat
                                        value={item.thanhtien}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        // format="### ###" 
                                        renderText={value => <Text style = {[styles.text_bottom,{textAlign: null,color: '#007005'}]}>{value} đ</Text>}
                                    /> 
                                </View>             
                            </View>

                        </View>

                    </ConfirmDialog>

                </View>
            );
        }else if(this.state.code == code && item_show == true){
            item_show = false;
            return(
                <View>
                </View>
            );
        }else{
            return(
                <View>
                    {/* <Text>aaaaaaaaa</Text> */}
                </View>
            );
        }
    };



}