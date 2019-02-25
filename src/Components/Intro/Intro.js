import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Image,
	AsyncStorage,
	Dimensions,
	StatusBar,
	TouchableOpacity,
	ImageBackground,
	Animated,
} from 'react-native';
import ic_Logo from '../../Media/Logo/logo.png'
import ic_Background from '../../Media/Background/BackgroundLogin.png'

const { width, height } = Dimensions.get('window');

export default class Intro extends Component {

	constructor(props) {
		super(props)
		this.state = {
			FadeInAnim: new Animated.Value(0),
		}
	}

	componentDidMount(){
		this._GetData();
		StatusBar.setBarStyle( 'light-content',true)
		StatusBar.setBackgroundColor("#735934")
	}

	_GetData = async () => {


		try {
				var get_checked = await AsyncStorage.getItem("@Login:key");
				this.setState({
						click: get_checked
				});
		} catch (error) {
				console.log(error);
		}

};

Check(){
	if(this.state.click == "true"){
		
		// const { navigator } = this.props;
		this.props.navigation.push('Main');
		
} else {
	this.props.navigation.push('LoginMain');
}
}

	componentWillMount() {

			Animated.timing(
				this.state.FadeInAnim, {
					duration: 1000,
					toValue: 1,
				}
			).start();
	
			var timer = setInterval(
				() => {
					{
						this.Check();
					}
	
					clearInterval(timer);
				},
				2000);
		}
    // }

	render() {
		const { FadeInAnim } = this.state;
		return (

			// <View style={vaa00.box}>

			<ImageBackground
				source={ic_Background}
				style={{
					height: "100%",
					width: '100%',
					justifyContent: 'center',
				}}
			>

				<TouchableOpacity>
					<Image style={{
						width: 250,
						height: 250,
						alignSelf: 'center'
					}}
						source={ic_Logo} />

				</TouchableOpacity>

				</ImageBackground>

			// </View>

		)
	}
}

const vaa00 = StyleSheet.create({
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {

	},

});