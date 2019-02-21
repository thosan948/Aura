import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import Intro from '../Components/Intro/Intro';
import LoginMain from '../Components/Login/LoginMain';
import Registration from '../Components/Login/Registration';
import Login from '../Components/Login/Login';
import Main from '../Components/Main/Main';
import Header from '../Components/Main/Header/Header';
import Report from '../Components/Main/Report/Report';
import LieuTrinh from '../Components/Main/LieuTrinh/LieuTrinh';
import ChitietHD from '../Components/Main/LieuTrinh/ChitietHD';
import Info from '../Components/Info/Info';
import Status from '../Components/Main/Status/Status';
import MyWed from '../Components/Main/Status/MyWed';
import Custom from '../Components/Info/Custom';

export default class App extends Component {

    render() {
        const LOGINMAIN = 'LOGINMAIN';
        return (
            <Navigator
                initialRoute={{ name: 'INTRO' }}
                configureScene={
                    (route) => {
                        if (route.name === LOGINMAIN ) {
                            return Navigator.SceneConfigs.FadeAndroid;
                        }
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }
                }
                renderScene={(route, navigator) => {

                    switch (route.name) {

                        case 'INTRO': return (
                            <Intro navigator={navigator}/>
                        );
                        case 'LOGINMAIN': return (
                            <LoginMain navigator={navigator}
                            />
                        );
                        case 'REGISTRATION': return (
                            <Registration navigator={navigator}
                                gotoLogin={() => {
                                    navigator.pop();
                                }}
                            />
                        );
                        case 'LOGIN': return (
                            <Login navigator={navigator}
                            />
                        );

                        case 'MAIN': return (
                            <Main navigator={navigator}
                                gotoReport={() => {
                                        navigator.push({ name: 'REPORT' })
                                    }}
                                gotoLieutrinh={() => {
                                    navigator.push({ name: 'LIEUTRINH' })
                                }}
                                gotoStatus = {() => {
                                    navigator.push({name : 'STATUS'})
                                }}
                                gotoSetting = {() => {
                                    navigator.push({name : 'INFO'})
                                }}
                            />
                        );
                        
                        case 'REPORT': return (
                            <Report navigator={navigator}
                            />
                        );
                        case 'HEADER': return (
                            <Header navigator={navigator}
                            />
                        );
                        case 'LIEUTRINH': return (
                            <LieuTrinh navigator={navigator}
                                gotoChitiet={() => {
                                        navigator.push({ name: 'CHITIETHD',
                                        kaiser: { id_order }})
                                    }}
                            />
                        );
                        case 'INFO': return (
                            <Info navigator={navigator}
                                fetchData={() => {

                                    console.log("OKKKKKKKK");

                                }}
                            />
                        );
                        case 'CHITIETHD': return (
                            <ChitietHD navigator={navigator}
                                get_id_order={route.kaiser.id_order}
                            />
                        );
                        case 'STATUS': return (
                            <Status navigator={navigator}
                                gotoWedview={() => {
                                            navigator.push({ name: 'MYWED',
                                            kaiser: { links }})
                                        }}
                            />
                        );
                        case 'MYWED': return (
                            <MyWed navigator={navigator}
                                get_link={route.kaiser.links}
                            />
                        );

                        case 'CUSTOM': return (
                            
                            <Custom navigator={navigator} {...route.passProps}
                                goBack = {() => {
                                    navigator.resetTo({ 
                                        name: 'INFO'
                                    })
                                }}
                            />
                        );

                    }
                }}

            />
        );
    }
}
