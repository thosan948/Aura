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
    ToastAndroid,
    View,
    FlatList,
} from 'react-native';


// Import Image
import ic_setting from '../../Media/Icon/setting.png';


// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';
import NumberFormat from 'react-number-format';


// Import Component
import Header from '../Main/Header/Header';


// Get Width - Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default class SaleCT extends Component {
    constructor(props) {

        super(props);
        this.state = {
            dataSource: [],
            cus: cus,
            title: title,
        };

    };

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this._LoadData();

    };

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    _LoadData = () =>{

        fetch("http://library.limcom.vn/API/getDichvu.php", {

            method: "POST",

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                "TYPEID": this.state.cus
            })

        })

        .then((response) => response.json())

        .then(
            (responseJson) => {

                dataSourceAP = responseJson;

                if(dataSourceAP != "EMPTY ORDER"){

                    this.setState({
                        dataSourceAP: dataSourceAP,
                    });

                }else if(dataSourceAP == "EMPTY ORDER"){

                    ToastAndroid.showWithGravity("Không có dữ liệu", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                
                }

            },

        )
        .catch((error) => { console.log(error) });

    }

    gotoCT(){
        
        this.props.navigation.push('Custom', cus = 'Kaiser');
    };

    goBack(){

        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    render(){

        return (

            <View style = {{flex: 1}}>

                <LinearGradient 
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#b99b64', '#735934']}
                    style={styles.view_Linear}>

                    <View style = {styles.view_Warp}>

                        <View style = {styles.view_Main}>

                            <Header gotoBack={this.goBack.bind(this)} />

                            <View style = {{marginLeft: -5, marginRight: -5, flex: 1}}>

                                <LinearGradient 
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={['#735934', '#b99b64']}
                                        style={styles.view_Linear_Btn}>

                                        <View>

                                            <Text style = {styles.txt_Title}>{this.state.title}</Text>
                                            
                                        </View>

                                    </LinearGradient>

                                <View style = {styles.view_Warp_Scr}>

                                    {/* <View style = {{backgroundColor: '#aaa', height: 30}}></View> */}



                                    <ScrollView 
                                        showsVerticalScrollIndicator={false}
                                        style = {styles.view_ScrollView}>

                                        <FlatList
                                            data={this.state.dataSourceAP}
                                            showsVerticalScrollIndicator={false}
                                            keyExtractor={item => item.id }
                                            renderItem={({ item }) => 

                                                <View style = {styles.view_Child}>


                                                    <View style = {{flexDirection: 'row', justifyContent: 'space-between',flex : 1}}>

                                                        <TouchableOpacity style = {styles.view_Item}>

                                                            <Text style = {styles.txt_Item}>{item.brandname}</Text>
                                                        
                                                        </TouchableOpacity>

                                                        <View style = {{justifyContent: 'center', flex : 1, marginTop: -10}}>

                                                            {/* <View style = {{ justifyContent: 'flex-end'}}>

                                                                <View style = {{ justifyContent: 'flex-end'}}>


                                                                    <Text> </Text>
                                                                    <View> */}

                                                                        <NumberFormat
                                                                            value={item.price}
                                                                            displayType={'text'}
                                                                            thousandSeparator={true}
                                                                            // format="### ###" 
                                                                            renderText={value => <Text style = {styles.text_Gia}>{value + ' đ'}</Text>}
                                                                        />

                                                                        <View style = {{height: 1, backgroundColor:'#735934'}}></View>

                                                                    {/* </View>

                                                                </View> */}

                                                            {/* </View>


                                                            <View style = {{}}>
                                                                <Text> </Text>
                                                            </View> */}

                                                        </View>

                                                        <View style = {{justifyContent: 'center'}}>

                                                            <TouchableOpacity style = {styles.view_Datlich}>

                                                                <Text style = {styles.txt_Datlich}>Đặt lịch ngay</Text>

                                                            </TouchableOpacity>

                                                        </View>

                                                    </View>


                                                </View>

                                            }

                                        />

                                    </ScrollView>

                                </View>

                            </View>

                            <View>

                                <TouchableOpacity style={{height: 50, width: 50, marginTop: 5}}>

                                    <Image source={ic_setting} style={{height: 50, width: 50, }}/>

                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                </LinearGradient>

            </View>
            
        );

    }

}

const styles = StyleSheet.create({

    //Style Image


    //Style View
    view_Linear: {
        justifyContent: 'center',
        flex: 1,
    },
    view_Child:{
        marginTop: 5,
    },
    view_Linear_Child:{
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        // marginTop: 5,
    },
    view_ScrollView:{
        flex: 1,
        marginTop: 30,
        marginBottom: 10,
    },
    view_Warp_Scr: {
        flex: 1, 
        borderRightWidth: 0.75,
        borderBottomWidth: 0.75,
        marginTop: -24,
        borderLeftWidth: 0.75,
        borderBottomColor: '#94794c',
        borderRightColor: '#94794c',
        borderLeftColor: '#94794c',
        // backgroundColor: '#aaa'
        // marginTop: 20,
    },
    view_Warp:{
        flex: 1,
        backgroundColor: '#e6e7e8',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 15,
        margin: 10,
        borderRadius: 30,
    },
    view_Main:{
        flex: 1,
        backgroundColor: '#e6e7e8',
        flexDirection: 'column',
        borderRadius: 30
    },
    view_Item:{
        width: deviceWidth * 0.4,
        borderColor: '#94794c',
        borderWidth: 0.75,
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5, 
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 5,
    },
    view_Datlich:{
        borderColor: '#94794c',
        borderWidth: 0.75,
        borderRadius: 20,
        height: 30,
        width: 85,
        justifyContent: 'center',
        marginRight: 5,
    },
    view_Linear_Btn: {
        borderRadius: 30,
        marginTop: 20, 
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },


    //Style Text
    txt_Item:{
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#735934'
    },
    txt_Title:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    txt_Datlich:{
        textAlign: 'center',
        fontSize: 12,
        color: '#735934',
    },
    text_Gia:{
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#735934',
    },

});