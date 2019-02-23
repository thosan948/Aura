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
import ic_setting from '../../../Media/Icon/setting.png';
import ic_tiki from '../../../Media/Logo/tiki.png';
import ic_laza from '../../../Media/Logo/laza.png';
import ic_grab from '../../../Media/Logo/grab.png';
import ic_cgv from '../../../Media/Logo/cvg.png';
import ic_toky from '../../../Media/Logo/toky.png';
import ic_coop from '../../../Media/Logo/coop.png';


// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';


// Import Component
import Header from '../../Main/Header/Header';

// Get Width - Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default class Sales extends Component {
    constructor(props) {

        super(props);
        this.state = {
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
                    end={{ x: 0, y: 1 }}
                    colors={['#b99b64', '#735934']}
                    style={styles.view_Linear}>

                    <View style = {styles.view_Warp}>

                        <View style = {styles.view_Main}>


                            <View>

                                <Header gotoBack={this.goBack.bind(this)} />

                                <Text style = {styles.txt_sacombank}>SACOMBANK</Text>

                                <View style = {{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_tiki}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>
                                            <Text style = {styles.txt_chon}>CHỌN</Text>
                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_laza}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_grab}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                </View>

                                <View style = {{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_cgv}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_toky}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_coop}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                </View>

                                <Text style = {styles.txt_sacombank}>KIENLONGBANK</Text>

                                <View style = {{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_tiki}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>
                                            <Text style = {styles.txt_chon}>CHỌN</Text>
                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_laza}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_grab}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                </View>

                                <View style = {{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between'}}>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_cgv}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_toky}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style = {styles.tou_item}>

                                        <View style = {styles.view_image}>

                                            <Image style = {styles.image_item} source = {ic_coop}></Image>

                                        </View>

                                        <View style = {styles.view_txt_Item}>

                                            <Text style = {styles.txt_chon}>CHỌN</Text>

                                        </View>

                                    </TouchableOpacity>

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
    image_item:{
        height: 50,
        width: 50,
        alignSelf: 'center',

    },

    //Style View
    view_Linear: {
        justifyContent: 'center',
        flex: 1,
    },
    view_Warp:{
        flex: 1,
        backgroundColor: '#e6e7e8',
        flexDirection: 'column',
        padding: 15,
        margin: 10,
        borderRadius: 30,
    },
    view_Main:{
        flex: 1,
        backgroundColor: '#e6e7e8',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderRadius: 30,
    },
    tou_item: {
        width: deviceWidth * 0.25,
        height: deviceWidth * 0.25,
        borderColor: '#6e5532',
        borderWidth: 1,
        borderRadius: 15,
    },
    view_image:{
        flex: 2,
        justifyContent: 'center',
        // borderTopLeftRadius: 15,
        // borderTopRightRadius: 15,
        // backgroundColor: '#aaa'
    },
    view_txt_Item: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#6e5532',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
    },

    //Style Text
    txt_sacombank:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#735934',
        textAlign: 'center',
    },
    txt_chon:{
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
    

});