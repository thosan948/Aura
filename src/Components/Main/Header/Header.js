import React, { Component } from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    AsyncStorage,
    Dimensions,
    View } from "react-native";

// Import Image

import ic_back from '../../../Media/Icon/back.png';
import ic_logo from '../../../Media/Logo/6.png';
import ic_user from '../../../Media/Icon/user.png';
import ic_menu from '../../../Media/Icon/menu.png';

// Import Dependencies

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class Header extends Component {

    constructor(props) {

        super(props);
        this.state = {

        };

    }

    componentDidMount(){
        this._GetData();
    }

    _GetData = async () => {


        try {
            var get_image = await AsyncStorage.getItem("@Image:key");
            this.setState({
                get_image: get_image,
            });

        } catch (error) {
            console.log(error);
        }

    };

    render() {

        return (
            
            <View style = {{ height: 46, marginTop: 10}}>

                <View style = {styles.view_warp}>

                    <View style = {styles.view_menu}>

                        <TouchableOpacity onPress={() => this.props.gotoBack()}>

                            <Image source = {ic_back} style = {styles.img_back} />

                        </TouchableOpacity>

                        <TouchableOpacity>

                            <Image source = {ic_logo} style = {styles.img_icon} />

                        </TouchableOpacity>

                    </View>

                    <View style = {styles.view_menu}>

                        <TouchableOpacity style = {{justifyContent: 'center'}}>

                        <ImageBackground source = {{uri: this.state.get_image}} style = {styles.img_user} />

                        </TouchableOpacity>

                        <TouchableOpacity>

                            <Image source = {ic_menu} style = {styles.img_icon} />

                        </TouchableOpacity>

                    </View>

                </View>

                <View style = {styles.view_bottom}></View>
                
            </View>

        );

    }

}

const styles = StyleSheet.create({

    img_back: {
        height: 45,
        width: 45 * 105 / 150,
    },
    img_icon: {
        height: 45,
        width: 45,
        borderRadius: 30,
    },
    img_user: {
        height: 40,
        width: 40,
        borderRadius: 180,
        overflow: "hidden",
    },
    view_warp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_menu: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view_bottom: {
        backgroundColor: '#735934',
        width: '100%',
        height: 0.7,
    },
});
