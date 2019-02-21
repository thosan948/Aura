import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    BackHandler,
    FlatList,
    View } from "react-native";

// Import Image
import ic_setting from '../../../Media/Icon/setting.png';

// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';
import NumberFormat from 'react-number-format';

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

        };

    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        fetch("http://library.limcom.vn/API/getOrderdetail.php", {

            method: "POST",

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "IDORDERS": this.props.get_id_order
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

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    }

    handleBackPress = () => {

        const { navigator } = this.props;
        navigator.pop();
        return true;

    }

    goBack(){
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

                            <View  style = {{ flex: 1 }}>

                                    <View>

                                        <Text style = {styles.text_pass}> CHI TIẾT HÓA ĐƠN</Text>

                                    </View>

                                    <View style = {{flexDirection: 'row', marginTop: deviceHeight * 0.03, alignSelf: 'center',}}>

                                        <ScrollView 
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                            horizontal={true}>

                                            <View>

                                                <View style = {styles.view_main}>

                                                    <View style = {[styles.view_top, {marginLeft: 0}]}>

                                                        <Text style = {styles.text_top}>Dịch vụ</Text>

                                                    </View>

                                                    <View style = {styles.view_top}>

                                                        <Text style = {styles.text_top}>Mã dịch vụ</Text>

                                                    </View>

                                                    <View style = {[styles.view_top,{width: deviceWidth * 0.2}]}>

                                                        <Text style = {styles.text_top}>Số lần</Text>

                                                    </View>

                                                    <View style = {[styles.view_top,{width: deviceWidth * 0.2}]}>

                                                        <Text style = {styles.text_top}>Đơn vị</Text>

                                                    </View>

                                                    <View style = {styles.view_top}>

                                                        <Text style = {styles.text_top}>Giá tiền</Text>

                                                    </View>

                                                    <View style = {styles.view_top}>

                                                        <Text style = {styles.text_top}>Giảm giá</Text>
                                                        
                                                    </View>

                                                    <View style = {styles.view_top}>

                                                        <Text style = {styles.text_top}>Thành tiền</Text>

                                                    </View>

                                                </View>

                                                <FlatList
                                                    style = {{height: deviceHeight * 0.5}}
                                                    data={this.state.dataSource}
                                                    showsVerticalScrollIndicator={false}
                                                    keyExtractor={item => item.id_order}
                                                    renderItem={({item}) =>

                                                        <View>

                                                            <View style = {styles.view_main}>

                                                                <View style = {[styles.view_bottom, {marginLeft: 0}]}>

                                                                    <Text style = {styles.text_bottom}>{item.brand_name}</Text>

                                                                </View>

                                                                <View style = {styles.view_bottom}>

                                                                    <Text style = {styles.text_bottom}>{item.id_brand}</Text>

                                                                </View>

                                                                <View style = {[styles.view_bottom,{width: deviceWidth * 0.2}]}>

                                                                    <Text style = {styles.text_bottom}>{item.qty}</Text>

                                                                </View>

                                                                <View style = {[styles.view_bottom,{width: deviceWidth * 0.2}]}>

                                                                    <Text style = {styles.text_bottom}>{item.donvi}</Text>

                                                                </View>

                                                                <View style = {styles.view_bottom}>

                                                                    <NumberFormat
                                                                        value={item.price}
                                                                        displayType={'text'}
                                                                        thousandSeparator={true}
                                                                        // format="### ###" 
                                                                        renderText={value => <Text style = {[styles.text_bottom,{color: '#0a0a0a'}]}>{value}</Text>}
                                                                    />

                                                                </View>

                                                                <View style = {styles.view_bottom}>

                                                                    <NumberFormat
                                                                        value={item.giagiam}
                                                                        displayType={'text'}
                                                                        thousandSeparator={true}
                                                                        // format="### ###" 
                                                                        renderText={value => <Text style = {[styles.text_bottom,{color: '#007005'}]}>{value}</Text>}
                                                                    />

                                                                </View>

                                                                <View style = {styles.view_bottom}>

                                                                    <NumberFormat
                                                                        value={item.price * item.qty}
                                                                        displayType={'text'}
                                                                        thousandSeparator={true}
                                                                        // format="### ###" 
                                                                        renderText={value => <Text style = {[styles.text_bottom,{color: '#0a0a0a'}]}>{value}</Text>}
                                                                    />

                                                                </View>

                                                            </View>

                                                        </View>

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