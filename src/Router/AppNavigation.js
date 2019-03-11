import {createStackNavigator, createAppContainer} from 'react-navigation';

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
import Fogot from '../Components/FogotPass/FogotPass';
import Sales from '../Components/Sales/Sales';
import SaleCT from '../Components/Sales/SaleCT';
import Shopping from '../Components/Main/Shopping/Shopping';
import Order from '../Components/Main/Order/Order';

const MainNavigator = createStackNavigator({
	
	Intro: {
		screen: Intro ,
		navigationOptions: {
			header: null ,
		}
	},
	
		Order: {
		screen: Order ,
		navigationOptions: {
			header: null ,
		}
	},
	Sales: {
		screen: Sales ,
		navigationOptions: {
			header: null ,
		}
	},
	SaleCT: {
		screen: SaleCT ,
		navigationOptions: {
			header: null ,
		}
	},
	Shopping: {
		screen: Shopping ,
		navigationOptions: {
			header: null ,
		}
  },
	Info: {
		screen: Info ,
		navigationOptions: {
			header: null ,
		}
    },
    ChitietHD: {
		screen: ChitietHD ,
		navigationOptions: {
			header: null ,
		}
    },
    Status: {
		screen: Status ,
		navigationOptions: {
			header: null ,
		}
    },
    MyWed: {
		screen: MyWed ,
		navigationOptions: {
			header: null ,
		}
    },
    LieuTrinh: {
		screen: LieuTrinh ,
		navigationOptions: {
			header: null ,
		}
    },
    Report: {
		screen: Report ,
		navigationOptions: {
			header: null ,
		}
    },
    Main: {
		screen: Main ,
		navigationOptions: {
			header: null ,
		}
    },
    Header: {
		screen: Header ,
		navigationOptions: {
			header: null ,
		}
    },
    Custom: {
		screen: Custom ,
		navigationOptions: {
			header: null ,
		}
    },

    Registration: {
		screen: Registration ,
		navigationOptions: {
			header: null ,
		}
    },
    LoginMain: {
		screen: LoginMain ,
		navigationOptions: {
			header: null ,
		}
    },
    Login: {
		screen: Login ,
		navigationOptions: {
			header: null ,
		}
		},
		Fogot: {
			screen: Fogot ,
			navigationOptions: {
				header: null ,
			}
		},
    
});

const App = createAppContainer(MainNavigator);

export default App;