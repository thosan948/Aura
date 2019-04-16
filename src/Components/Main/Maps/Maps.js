import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

// Import Image 
import ic_test from '../../../Media/Icon/ic_map.png'


// Import Dependencies
import MapView, {Marker} from 'react-native-maps';

export default class Maps extends Component {

    constructor(props) {

        super(props);
        this.state = {
            region: {
                latitude: 10.0198214,
                longitude: 105.7631659,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            marker: {
                latitude: 10,
                longitude: 106
            }

        };

    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition( (position) =>{
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                },
                marker: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
        },(error) => console.log(error),
        {enableHighAccuracy: true, timeout: 20000, maxinumAge: 1000});
    }

    render(){

        return(

            // <View style = {{flex: 1}}>

                <MapView
                    style = {{flex: 1}}
                    loadingBackgroundColor="#eeeeee"
                    moveOnMarkerPress = {false}
                    showsUserLocation={true}
                    showsCompass={true}
                    showsPointsOfInterest = {false}
                    initialRegion={this.state.region
                    }>

                        <Marker
                        // style = {{width: 10, height: 10}}
                        // image = {ic_test}
                        // styleImage = {{width: 20, height: 20}}
                        coordinate={{
                            latitude: 10.0198215,
                            longitude: 105.76252,
                        }}
                        >

                        <Image style = {{width: 40, height: 40}} source = {ic_test}></Image>
                            {/* <View style = {{
                                width: 40,
                                height: 40,
                                borderRadius: 40/2,
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: 'rgba(0, 122, 255, 0.3)',
                                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                                justifyContent: 'center',
                                }}>

                                <View style = {{
                                    height: 15,
                                    width: 15,
                                    borderRadius: 15/2,
                                    borderColor: '#fff',
                                    overflow: 'hidden',
                                    backgroundColor: '#007AFF'
                                }}></View>

                            </View> */}
                        </Marker>

                </MapView>

            // </View>

        );

    }

}
