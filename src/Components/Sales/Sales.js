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
    View,
    FlatList,
} from 'react-native';


// Import Image
import ic_setting from '../../Media/Icon/setting.png';


// Import Dependencies
import LinearGradient from 'react-native-linear-gradient';


// Import Component
import Header from '../Main/Header/Header';


// Get Width - Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default class Sales extends Component {
    constructor(props) {

        super(props);
        this.state = {
            dataSource: [],
        };

    };

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        fetch("http://library.limcom.vn/API/getLoaidichvu.php", {

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


    };

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    handleBackPress = () => {

        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    gotoCT( cus, title ){
        
        this.props.navigation.push('SaleCT', cus, title);
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

                            <Header gotoBack={this.goBack.bind(this)} />

                            <ScrollView 
                                showsVerticalScrollIndicator={false}
                                style = {styles.view_ScrollView}>

                                <FlatList
                                    data={this.state.dataSource}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={item => item.id }
                                    renderItem={({ item }) => 

                                        <TouchableOpacity 
                                            onPress  = {() => {this.gotoCT(cus = item.id, title = item.typename)}}
                                            style = {styles.view_Child}>

                                            <LinearGradient 
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={['#735934', '#b99b64']}
                                                style={styles.view_Linear_Child}>

                                                <View>

                                                    <Text style = {styles.txt_Item}>{item.typename}</Text>

                                                </View>

                                            </LinearGradient>

                                        </TouchableOpacity>

                                    }

                                />

                            </ScrollView>

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
        marginTop: 5,
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


    //Style Text
    txt_Item:{
        fontWeight: 'bold',
        color: '#fff'
    }

});