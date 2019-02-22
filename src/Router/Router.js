import React, { Component } from 'react';
import {View, Text, BackHandler,NetInfo, StatusBar } from 'react-native';
import MainNavigator from './AppNavigation';

// Import Dependencies
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';
import OpenSettings from 'react-native-open-settings';

export default class Router extends Component {

    constructor(props) {

        super(props);
        this.state = {
            show_false: false,
            fail: '',
            check_erro: '',
        };

    };

    componentDidMount() {
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#b99b64")
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this._CheckConnect();

    }
    componentWillUnmount() {

        NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };
    _CheckConnect(){

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
                })
            }
          });

         handleFirstConnectivityChange = (connectionInfo) => {
            // console.log(
            //   'First change, type: ' +
            //     connectionInfo.type +
            //     ', effectiveType: ' +
            //     connectionInfo.effectiveType,
            // );
            // NetInfo.removeEventListener(
            //     'connectionChange',
            //     handleFirstConnectivityChange,
            // );
            if(connectionInfo.type == "none"){
                this.setState({ 
                    show_false: true, 
                    fail: 'Lỗi kết nối',
                    check_erro: 'Bạn hãy kiểm tra lại kết nối Internet hoặc Wifi',
                })
            }
        }
        NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    };

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

    render(){

        return (

            <View style = {{flex: 1}}>

                <MainNavigator/>

                <SCLAlert
                    show={this.state.show_false}
                    onRequestClose={this.handleClose}
                    theme="info"
                    title={this.state.fail}
                    subtitle={this.state.check_erro}>

                    <SCLAlertButton theme="info" onPress={this.handleOK}>OK</SCLAlertButton>

                </SCLAlert>

            </View>
            
        );

    }

}