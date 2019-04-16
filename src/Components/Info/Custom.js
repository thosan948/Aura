import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    ImageBackground,
    BackHandler,
    AsyncStorage,
    Button,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView,
    Picker,
    Image,
} from 'react-native';

// Import Image
import ic_bg from '../../Media/Background/BackgroundLogin.png';
import ic_cus from '../../Media/Background/bg_cus.png';
import ic_logo from '../../Media/Logo/aura.png';
import ic_date from '../../Media/Icon/icon_date.png';
import ic_phone from '../../Media/Icon/ic_phone.png';
import ic_user from '../../Media/Icon/ic_user.png';
import ic_card from '../../Media/Icon/ic_card.png';
import ic_maps from '../../Media/Icon/ic_maps.png';
import ic_quan from '../../Media/Icon/ic_quan.png';
import ic_home from '../../Media/Icon/ic_home.png';

// Import Dependencies
import IOSPicker from 'react-native-ios-picker';
import CheckBox from 'react-native-check-box';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import {
    SCLAlert,
    SCLAlertButton,
} from 'react-native-scl-alert';

// Import Components
import Info from '../Info/Info';

// Get Width , Height
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const { width: WindowWidth } = Dimensions.get('window');

var txtNganhNghe = 0; txtQuanhuyen = 0;
var d = new Date();
    a = d.getFullYear();
    month = Number(d.getMonth() + 1);
    day = d.getDate();
    max_year = Number(a) - 16;
    min_year = Number(a) - 100;
    check_max_year = day + "-" + month + "-" + max_year;
    check_min_year = day + "-" + month + "-" + min_year;

export default class Custom extends Component {
    constructor(props) {

        super(props);
        dataoptions = [

            // TP HCM

            {
                key: 'Quận 1',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 2',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 3',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 3',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 4',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 5',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 6',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 7',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 8',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 9',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 10',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 11',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận 12',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Thủ Đức',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Gò Vấp',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Bình Thạnh',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Tân Bình',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Tân Phú',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Phú Nhuận',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Quận Bình Tân',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Huyện Củ Chi',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Huyện Hóc Môn',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Huyện Bình Chánh',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Huyện Nhà Bè',
                tinhthanh: 'TP. Hồ Chí Minh',
            },
            {
                key: 'Huyện Cần Giờ',
                tinhthanh: 'TP. Hồ Chí Minh',
            },

            // Hà Nội

            {
                key: 'Quận Ba Đình',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Hoàn Kiếm',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Hai Bà Trưng',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Đống Đa',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Tây Hồ',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Cầu Giấy',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Thanh Xuân',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Hoàng Mai',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Long Biên',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Quận Hà Đông',
                tinhthanh: 'Hà Nội',
            }, {
                key: 'Huyện Từ Liêm',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Thanh Trì',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Gia Lâm',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Sóc Sơn',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Đông Anh',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Thị xã Sơn Tây',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Ba Vì',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Phúc Thọ',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Thạch Thất',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Quốc Oai',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Chương Mỹ',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Đan Phượng',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Hoài Đức',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Thanh Oai',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Mỹ Đức',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Ứng Hoà',
                tinhthanh: 'Hà Nội',
            }, {
                key: 'Huyện Thường Tín',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Phú Xuyên',
                tinhthanh: 'Hà Nội',
            },
            {
                key: 'Huyện Mê Linh',
                tinhthanh: 'Hà Nội',
            },

            // Hải Phòng

            {
                key: 'Quận Hồng Bàng',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Quận Lê Chân',
                tinhthanh: 'Hải Phòng',
            }, {
                key: 'Quận Ngô Quyền',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Quận Kiến An',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Quận Hải An',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Quận Đồ Sơn',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Quận Dương Kinh',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện An Lão',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Kiến Thuỵ',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Thủy Nguyên',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện An Dương',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Tiên Lãng',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Vĩnh Bảo',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Cát Hải',
                tinhthanh: 'Hải Phòng',
            },
            {
                key: 'Huyện Bạch Long Vĩ',
                tinhthanh: 'Hải Phòng',
            },

            // Thành Phố Đà Nẵng

            {
                key: 'Quận Hải Châu',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Quận Thanh Khê',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Quận Sơn Trà',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Quận Ngũ Hành Sơn',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Quận Liên Chiểu',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Quận Cẩm Lệ',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Huyện Hoà Vang',
                tinhthanh: 'Đà Nẵng',
            },
            {
                key: 'Huyện Hoàn Sa',
                tinhthanh: 'Đà Nẵng',
            },

            // Cần Thơ

            {
                key: 'Quận Ninh Kiều',
                tinhthanh: 'Cần Thơ',
            }, {
                key: 'Quận Bình Thuỷ',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Quận Cái Răng',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Quận Ô Môn',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Huyện Phong Điền',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Huyện Cờ Đỏ',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Huyện Vĩnh Thạnh',
                tinhthanh: 'Cần Thơ',
            },
            {
                key: 'Huyện Thốt Nốt',
                tinhthanh: 'Cần Thơ',
            },

            // Tỉnh An Giang

            {
                key: 'Thành phố Long Xuyên',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Thành phố Châu Đốc',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện An Phú',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Tân Châu',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Phú Tân',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Tịnh Biên',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Tri Tôn',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Châu Phú',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Chợ Mới',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'An Giang',
            },
            {
                key: 'Huyện Thoại Sơn',
                tinhthanh: 'An Giang',
            },

            // Bà Rịa - Vũng Tàu

            {
                key: 'Thành phố Vũng Tàu',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Thành phố Bà Rịa',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Xuyên Mộc',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Long Điền',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Côn Đảo',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Tân Thành',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Châu Đức',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },
            {
                key: 'Huyện Đất Đỏ',
                tinhthanh: 'Bà Rịa - Vũng Tàu',
            },

            // Tỉnh Bắc Giang

            {
                key: 'Thành phố Bắc Giang',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Yên Thế',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Lục Ngạn',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Sơn Động',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Lục Nam',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Tân Yên',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Hiệp Hoà',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Lạng Giang',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Việt Yên',
                tinhthanh: 'Bắc Giang',
            },
            {
                key: 'Huyện Yên Dũng',
                tinhthanh: 'Bắc Giang',
            },

            // Tỉnh Bắc Kạn

            {
                key: 'THành phố Bắc Kạn',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Chợ Đồn',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Bạch Thông',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Na Rì',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Ngân Sơn',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Ba Bể',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Chợ Mới',
                tinhthanh: 'Bắc Kạn',
            },
            {
                key: 'Huyện Pác Nặm',
                tinhthanh: 'Bắc Kạn',
            },

            // Tỉnh Bạc Liêu

            {
                key: 'Thành phố Bạc Liêu',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Vĩnh Lợi',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Hồng Dân',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Giá Rai',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Phước Long',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Đông Hải',
                tinhthanh: 'Bạc Liêu',
            },
            {
                key: 'Huyện Hoà Bình',
                tinhthanh: 'Bạc Liêu',
            },

            // Tỉnh Bắc Ninh

            {
                key: 'Thành phố Bắc Ninh',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Yên Phong',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Quế Võ',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Tiên Du',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Từ Sơn',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Thuận Thành',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Gia Bình',
                tinhthanh: 'Bắc Ninh',
            },
            {
                key: 'Huyện Lương Tài',
                tinhthanh: 'Bắc Ninh',
            },

            // Tỉnh Bến Tre

            {
                key: 'Thành phố Bến Tre',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Chợ Lách',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Mỏ Cày',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Giồng Trôm',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Bình Đại',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Ba Tri',
                tinhthanh: 'Bến Tre',
            },
            {
                key: 'Huyện Thạnh Phú',
                tinhthanh: 'Bến Tre',
            },

            // Tỉnh Bình Định

            {
                key: 'Thành phố Quy Nhơn',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện An Lão',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Hoài Ân',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Hoài Nhơn',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Phù Mỹ',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Phù Cát',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Vĩnh Thạnh',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Tây Sơn',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Vân Canh',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện An Nhơn',
                tinhthanh: 'Bình Định',
            },
            {
                key: 'Huyện Tuy Phước',
                tinhthanh: 'Bình Định',
            },

            //Tỉnh Bình Dương

            {
                key: 'Thành phố Thủ Dầu Một',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Bến Cát',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Tân Uyên',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Thuận An',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Dĩ An',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Phú Giáo',
                tinhthanh: 'Bình Dương',
            },
            {
                key: 'Huyện Dầu Tiếng',
                tinhthanh: 'Bình Dương',
            },

            // Tỉnh Bình Phước

            {
                key: 'Thành phố Đồng Xoài',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Đồng Phú',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Chơn Thành',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Bình Long',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Lộc Ninh',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Bù Đốp',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Phước Long',
                tinhthanh: 'Bình Phước',
            },
            {
                key: 'Huyện Bù Đăng',
                tinhthanh: 'Bình Phước',
            },

            // Tỉnh Bình Thuận

            {
                key: 'Thành phố Phan Thiết',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Thị xã LaGi',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Tuy Phong',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Bắc Bình',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Hàm Thuận Bắc',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Hàm Thuận Nam',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Hàm Tân',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Đức Linh',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện Tánh Linh',
                tinhthanh: 'Bình Thuận',
            },
            {
                key: 'Huyện đảo Phú Quý',
                tinhthanh: 'Bình Thuận',
            },

            // Tỉnh Cà Mau

            {
                key: 'Thành phố Cà Mau',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Thới Bình',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện U Minh',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Trần Văn Thời',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Cái Nước',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Đầm Dơi',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Ngọc Hiển',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Năm Căn',
                tinhthanh: 'Cà Mau',
            },
            {
                key: 'Huyện Phú Tân',
                tinhthanh: 'Cà Mau',
            },

            // Tỉnh Cao Bằng

            {
                key: 'Thành phố Cao Bằng',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Bảo Lạc',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Thông Nông',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Hà Quảng',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Trà Lĩnh',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Trùng Khánh',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Nguyên Bình',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Hoà An',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Quảng Uyên',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Thạch An',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Hạ Lang',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Bảo Lâm',
                tinhthanh: 'Cao Bằng',
            },
            {
                key: 'Huyện Phục Hoà',
                tinhthanh: 'Cao Bằng',
            },

            // Tỉnh Đắk Lắk

            {
                key: 'Thành phố Buôn Ma Thuột',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Ea H Leo',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Krông Buk',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Krông Năng',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Ea Súp',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Cư M gar',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Krông Pắc',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Ea Kar',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện M`Đrăk',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Krông Ana',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Krông Bông',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Lăk',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Buôn Đôn',
                tinhthanh: 'Đắk Lắk',
            },
            {
                key: 'Huyện Cư Kuin',
                tinhthanh: 'Đắk Lắk',
            },

            // Tỉnh Đắk Nông

            {
                key: 'Thị xã Gia Nghĩa',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Dăk RLấp',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Dăk Mil',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Cư Jút',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Dăk Song',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Krông Nô',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Dăk GLong',
                tinhthanh: 'Đắk Nông',
            },
            {
                key: 'Huyện Tuy Đức',
                tinhthanh: 'Đắk Nông',
            },

            // Tỉnh Điện Biên

            {
                key: 'TP. Điện Biên Phủ',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Thị xã Mường Lay',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Điện Biên',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Tuần Giáo',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Mường Chà',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Tủa Chùa',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Điện Biên Đông',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Mường Nhé',
                tinhthanh: 'Điện Biên',
            },
            {
                key: 'Huyện Mường Ảng',
                tinhthanh: 'Điện Biên',
            },

            // Tỉnh Đồng Nai

            {
                key: 'Thành phố Biên Hoà',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Vĩnh Cửu',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Tân Phú',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Định Quán',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Thống Nhất',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Thị xã Long Khánh',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Xuân Lộc',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Long Thành',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Nhơn Trạch',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Trảng Bom',
                tinhthanh: 'Đồng Nai',
            },
            {
                key: 'Huyện Cẩm Mỹ',
                tinhthanh: 'Đồng Nai',
            },

            // Tỉnh Đồng Tháp

            {
                key: 'Thành phố Cao Lãnh',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Thành phố Sa Đéc',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Tân Hồng',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Hồng Ngự',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Tam Nông',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Thanh Bình',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Cao Lãnh',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Lấp Vò',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Tháp Mười',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Lai Vung',
                tinhthanh: 'Đồng Tháp',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Đồng Tháp',
            },

            // Tỉnh Gia Lai

            {
                key: 'Thành phố Pleiku',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Chư Păh',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Mang Yang',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Kbang',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Thị xã An Khê',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Kông Chro',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Đức Cơ',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Chưprông',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Chư Sê',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Ayunpa',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Krông Pa',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Ia Grai',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Đăk Đoa',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Ia Pa',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Đăk Pơ',
                tinhthanh: 'Gia Lai',
            },
            {
                key: 'Huyện Phú Thiện',
                tinhthanh: 'Gia Lai',
            },

            //Tỉnh Hà Giang

            {
                key: 'Thành phố Hà Giang',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Đồng Văn',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Mèo Vạc',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Yên Minh',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Quản Bạ',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Vị Xuyên',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Bắc Mê',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Hoàng Su Phì',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Xín Mần',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Bắc Quang',
                tinhthanh: 'Hà Giang',
            },
            {
                key: 'Huyện Quang Bình',
                tinhthanh: 'Hà Giang',
            },

            // Tỉnh Hà Nam

            {
                key: 'Thành phố Phủ Lý',
                tinhthanh: 'Hà Nam',
            },
            {
                key: 'Huyện Duy Tiên',
                tinhthanh: 'Hà Nam',
            },
            {
                key: 'Huyện Kim Bảng',
                tinhthanh: 'Hà Nam',
            },
            {
                key: 'Huyện Lý Nhân',
                tinhthanh: 'Hà Nam',
            },
            {
                key: 'Huỵện Thanh Liêm',
                tinhthanh: 'Hà Nam',
            },
            {
                key: 'Huyện Bình Lục',
                tinhthanh: 'Hà Nam',
            },

            // Tỉnh Hà Tĩnh

            {
                key: 'Thành phố Hà Tĩnh',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Thị xã Hồng Lĩnh',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Hương Sơn',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Đức Thọ',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Nghi Xuân',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Can Lộc',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Hương Khê',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Thạch Hà',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Cẩm Xuyên',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Kỳ Anh',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Vũ Quang',
                tinhthanh: 'Hà Tĩnh',
            },
            {
                key: 'Huyện Lộc Hà',
                tinhthanh: 'Hà Tĩnh',
            },

            // Tỉnh Hải Dương

            {
                key: 'Thành phố Hải Dương',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Chí Linh',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Nam Sách',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Kinh Môn',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Gia Lộc',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Tứ Kỳ',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Thanh Miện',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Ninh Giang',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Cẩm Giàng',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Thanh Hà',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Kim Thành',
                tinhthanh: 'Hải Dương',
            },
            {
                key: 'Huyện Bình Giang',
                tinhthanh: 'Hải Dương',
            },

            // Tỉnh Hậu Giang

            {
                key: 'Thành phố Vị Thanh',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Huyện Vị Thuỷ',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Huyện Long Mỹ',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Huyện Phụng Hiệp',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Huyện Châu Thành A',
                tinhthanh: 'Hậu Giang',
            },
            {
                key: 'Thị xã Ngã Bảy',
                tinhthanh: 'Hậu Giang',
            },

            // Tỉnh Hòa Bình

            {
                key: 'Thành phố Hoà Bình',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Đà Bắc',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Mai Châu',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Tân Lạc',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Lạc Sơn',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Kỳ Sơn',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Lương Sơn',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Kim Bôi',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Lạc Thuỷ',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Yên Thuỷ',
                tinhthanh: 'Hòa Bình',
            },
            {
                key: 'Huyện Cao Phong',
                tinhthanh: 'Hòa Bình',
            },

            // Tỉnh Hưng Yên

            {
                key: 'Thành phố Hưng Yên',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Kim Động',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Ân Thi',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Khoái Châu',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Yên Mỹ',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Tiên Lữ',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Phù Cừ',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Mỹ Hào',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Văn Lâm',
                tinhthanh: 'Hưng Yên',
            },
            {
                key: 'Huyện Văn Giang',
                tinhthanh: 'Hưng Yên',
            },

            // Tỉnh Khánh Hòa

            {
                key: 'Thành phố Nha Trang',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Vạn Ninh',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Ninh Hoà',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Diên Khánh',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Khánh Vĩnh',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Thành phố Cam Ranh',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Khánh Sơn',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Trường Sa',
                tinhthanh: 'Khánh Hòa',
            },
            {
                key: 'Huyện Cam Lâm',
                tinhthanh: 'Khánh Hòa',
            },

            // Tỉnh Kiên Giang

            {
                key: 'Thành phố Rạch Giá',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Thị xã Hà Tiên',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Phú Quốc',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Kiên Lương',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Hòn Đất',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Tân Hiệp',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Giồng Riềng',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Gò Quao',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện An Biên',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện An Minh',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Vĩnh Thuận',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện Kiên Hải',
                tinhthanh: 'Kiên Giang',
            },
            {
                key: 'Huyện U Minh Thượng',
                tinhthanh: 'Kiên Giang',
            },

            // Tỉnh Kon Tum

            {
                key: 'Thành phố Kon Tum',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Đăk Glei',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Ngọc Hồi',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Đăk Tô',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Sa Thầy',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Kon Plong',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Đăk Hà',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Kon Rộy',
                tinhthanh: 'Kon Tum',
            },
            {
                key: 'Huyện Tu Mơ Rông',
                tinhthanh: 'Kon Tum',
            },

            // Tỉnh Lai Châu

            {
                key: 'Thành phố Lai Châu',
                tinhthanh: 'Lai Châu',
            },
            {
                key: 'Huyện Tam Đường',
                tinhthanh: 'Lai Châu',
            },
            {
                key: 'Huyện Phong Thổ',
                tinhthanh: 'Lai Châu',
            },
            {
                key: 'Huyện Sìn Hồ',
                tinhthanh: 'Lai Châu',
            },
            {
                key: 'Huyện Mường Tè',
                tinhthanh: 'Lai Châu',
            },
            {
                key: 'Huyện Than Uyên',
                tinhthanh: 'Lai Châu',
            },

            // Tỉnh Lâm Đồng

            {
                key: 'Thành phố Đà Lạt',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Thị xã Bảo Lộc',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Đức Trọng',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Di Linh',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Đơn Dương',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Lạc Dương',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Đạ Huoai',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Đạ Tẻh',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Cát Tiên',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Lâm Hà',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Bảo Lâm',
                tinhthanh: 'Lâm Đồng',
            },
            {
                key: 'Huyện Đam Rông',
                tinhthanh: 'Lâm Đồng',
            },

            // Tỉnh Lạng Sơn

            {
                key: 'Thành phố Lạng Sơn',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Tràng Định',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Bình Gia',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Văn Lãng',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Bắc Sơn',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Văn Quan',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Cao Lộc',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Lộc Bình',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Chi Lăng',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Đình Lập',
                tinhthanh: 'Lạng Sơn',
            },
            {
                key: 'Huyện Hữu Lũng',
                tinhthanh: 'Lạng Sơn',
            },

            // Tỉnh Lào Cai

            {
                key: 'Thành phố Lào Cai',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Xi Ma Cai',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Bát Xát',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Bảo Thắng',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Sa Pa',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Văn Bàn',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Bảo Yên',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Bắc Hà',
                tinhthanh: 'Lào Cai',
            },
            {
                key: 'Huyện Mường Khương',
                tinhthanh: 'Lào Cai',
            },

            // Tỉnh Long An

            {
                key: 'Thành phố Tân An',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Vĩnh Hưng',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Mộc Hoá',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Tân Thạnh',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Thạnh Hoá',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Đức Huệ',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Đức Hoà',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Bến Lức',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Thủ Thừa',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Tân Trụ',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Cần Đước',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Cần Giuộc',
                tinhthanh: 'Long An',
            },
            {
                key: 'Huyện Tân Hưng',
                tinhthanh: 'Long An',
            },

            // Tỉnh Nam Định

            {
                key: 'Thành phố Nam Định',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Mỹ Lộc',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Xuân Trường',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Giao Thủy',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Ý Yên',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Vụ Bản',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Nam Trực',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Trực Ninh',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Nghĩa Hưng',
                tinhthanh: 'Nam Định',
            },
            {
                key: 'Huyện Hải Hậu',
                tinhthanh: 'Nam Định',
            },

            // Tỉnh Nghệ An

            {
                key: 'Thành phố Vinh',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Thị xã Cửa Lò',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Quỳ Châu',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Quỳ Hợp',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Nghĩa Đàn',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Quỳnh Lưu',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Kỳ Sơn',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Tương Dương',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Con Cuông',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Tân Kỳ',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Yên Thành',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Diễn Châu',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Anh Sơn',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Đô Lương',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Thanh Chương',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Nghi Lộc',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Nam Đàn',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Hưng Nguyên',
                tinhthanh: 'Nghệ An',
            },
            {
                key: 'Huyện Quế Phong',
                tinhthanh: 'Nghệ An',
            },

            // Tỉnh Ninh Bình

            {
                key: 'Thành phố Ninh Bình',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Thị xã Tam Điệp',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Nho Quan',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Gia Viễn',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Hoa Lư',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Yên Mô',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Kim Sơn',
                tinhthanh: 'Ninh Bình',
            },
            {
                key: 'Huyện Yên Khánh',
                tinhthanh: 'Ninh Bình',
            },

            // Tỉnh Ninh Thuận

            {
                key: 'Thành phố Phan Rang - Tháp Chàm',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Ninh Sơn',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Ninh Phước',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Bác Ái',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Thuận Bắc',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Thuận Nam',
                tinhthanh: 'Ninh Thuận',
            },
            {
                key: 'Huyện Ninh Hải',
                tinhthanh: 'Ninh Thuận',
            },

            // Tỉnh Phú Thọ

            {
                key: 'Thành phố Việt Trì',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Thị xã Phú Thọ',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Đoan Hùng',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Thanh Ba',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Hạ Hoà',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Cẩm Khê',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Yên Lập',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Thanh Sơn',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Phù Ninh',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Lâm Thao',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Tam Nông',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Thanh Thủy',
                tinhthanh: 'Phú Thọ',
            },
            {
                key: 'Huyện Tân Sơn',
                tinhthanh: 'Phú Thọ',
            },

            // Tỉnh Phú Yên

            {
                key: 'Thành phố Tuy Hoà',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Đồng Xuân',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Sông Cầu',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Tuy An',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Sơn Hoà',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Sông Hinh',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Đông Hoà',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Phú Hoà',
                tinhthanh: 'Phú Yên',
            },
            {
                key: 'Huyện Tây Hoà',
                tinhthanh: 'Phú Yên',
            },

            // Tỉnh Quảng Bình

            {
                key: 'Thành phố Đồng Hới',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Tuyên Hoá',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Minh Hoá',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Quảng Trạch',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Bố Trạch',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Quảng Ninh',
                tinhthanh: 'Quảng Bình',
            },
            {
                key: 'Huyện Lệ Thuỷ',
                tinhthanh: 'Quảng Bình',
            },

            // Tỉnh Quảng Nam

            {
                key: 'Thành phố Tam Kỳ',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Thành phố Hội An',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Duy Xuyên',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Điện Bàn',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Đại Lộc',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Quế Sơn',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Hiệp Đức',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Thăng Bình',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Núi Thành',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Tiên Phước',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Bắc Trà My',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Đông Giang',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Nam Giang',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Phước Sơn',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Nam Trà My',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Tây Giang',
                tinhthanh: 'Quảng Nam',
            },
            {
                key: 'Huyện Phú Ninh',
                tinhthanh: 'Quảng Nam',
            },

            // Tỉnh Quảng Ngãi

            {
                key: 'Thành phố Quảng Ngãi',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Lý Sơn',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Bình Sơn',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Trà Bồng',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Sơn Tịnh',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Sơn Hà',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Tư Nghĩa',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Nghĩa Hành',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Minh Long',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Mộ Đức',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Đức Phổ',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Ba Tơ',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Sơn Tây',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Tây Trà',
                tinhthanh: 'Quảng Ngãi',
            },

            // Tỉnh Quảng Ninh

            {
                key: 'Thành phố Hạ Long',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Thành phố Cẩm Phả',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Thành phố Uông Bí',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Thành phố Móng Cái',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Bình Liêu',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Đầm Hà',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Hải Hà',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Tiên Yên',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Ba Chẽ',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Đông Triều',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Yên Hưng',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Hoành Bồ',
                tinhthanh: 'Quảng Ngãi',
            },
            {
                key: 'Huyện Vân Đồn',
                tinhthanh: 'Quảng Ninh',
            },
            {
                key: 'Huyện Cô Tô',
                tinhthanh: 'Quảng Ninh',
            },

            // Tỉnh Quảng Trị

            {
                key: 'Thành phố Đông Hà',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Thị xã Quảng Trị',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Vĩnh Linh',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Gio Linh',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Cam Lộ',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Triệu Phong',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Hải Lăng',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Hướng Hoá',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện Đăk Rông',
                tinhthanh: 'Quảng Trị',
            },
            {
                key: 'Huyện đảo Cồn Cỏ',
                tinhthanh: 'Quảng Trị',
            },

            // Tỉnh Sóc Trăng

            {
                key: 'Thành phố Sóc Trăng',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Kế Sách',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Mỹ Tú',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Mỹ Xuyên',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Thạnh Trị',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Long Phú',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Vĩnh Châu',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Cù Lao Dung',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Ngã Năm',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Sóc Trăng',
            },
            {
                key: 'Huyện Trần Đề',
                tinhthanh: 'Sóc Trăng',
            },

            // Tỉnh Sơn La

            {
                key: 'Thành phố Sơn La',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Quỳnh Nhai',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Mường La',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Thuận Châu',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Bắc Yên',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Phù Yên',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Mai Sơn',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Yên Châu',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Sông Mã',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Mộc Châu',
                tinhthanh: 'Sơn La',
            },
            {
                key: 'Huyện Sốp Cộp',
                tinhthanh: 'Sơn La',
            },

            // Tỉnh Tây Ninh

            {
                key: 'Thành phố Tây Ninh',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Tân Biên',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Tân Châu',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Dương Minh Châu',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Hoà Thành',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Bến Cầu',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Gò Dầu',
                tinhthanh: 'Tây Ninh',
            },
            {
                key: 'Huyện Trảng Bàng',
                tinhthanh: 'Tây Ninh',
            },

            // Tỉnh Thái Bình

            {
                key: 'Thành phố Thái Bình',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Quỳnh Phụ',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Hưng Hà',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Đông Hưng',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Vũ Thư',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Kiến Xương',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Tiền Hải',
                tinhthanh: 'Thái Bình',
            },
            {
                key: 'Huyện Thái Thuỵ',
                tinhthanh: 'Thái Bình',
            },

            // Tỉnh Thái Nguyên

            {
                key: 'Thành phố Thái Nguyên',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Thị xã Sông Công',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Định Hoá',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Phú Lương',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Võ Nhai',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Đại Từ',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Đồng Hỷ',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Phú Bình',
                tinhthanh: 'Thái Nguyên',
            },
            {
                key: 'Huyện Phổ Yên',
                tinhthanh: 'Thái Nguyên',
            },

            // Tỉnh Thanh Hóa

            {
                key: 'Thành phố Thanh Hoá',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Thị xã Bỉm Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Thị xã Sầm Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Quan Hoá',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Quan Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Mường Lát',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Bá Thước',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Thường Xuân',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Như Xuân',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Như Thanh',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Lang Chánh',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Ngọc Lặc',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Thạch Thành',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Cẩm Thủy',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Thọ Xuân',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Vĩnh Lộc',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Thiệu Hoá',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Triệu Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Nông Cống',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Đông Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Hà Trung',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Hoằng Hoá',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Nga Sơn',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Hậu Lộc',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Quảng Xương',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Tĩnh Gia',
                tinhthanh: 'Thanh Hóa',
            },
            {
                key: 'Huyện Yên Định',
                tinhthanh: 'Thanh Hóa',
            },

            // Tỉnh Thừa Thiên - Huế

            {
                key: 'Thành phố Huế',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Phong Điền',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Quảng Điền',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Hương Trà',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Phú Vang',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Hương Thuỷ',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Phú Lộc',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện Nam Đông',
                tinhthanh: 'Thừa Thiên - Huế',
            },
            {
                key: 'Huyện A Lưới',
                tinhthanh: 'Thừa Thiên - Huế',
            },

            // Tỉnh Tiền Giang

            {
                key: 'Thành phố Mỹ Tho',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Thị xã Gò Công',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Cái Bè',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Cai Lậy',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Chợ Gạo',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Gò Công Tây',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Gò Công Đông',
                tinhthanh: 'Tiền Giang',
            },
            {
                key: 'Huyện Tân Phước',
                tinhthanh: 'Tiền Giang',
            },

            // Tỉnh Trà Vinh

            {
                key: 'Thành phố Trà Vinh',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Càng Long',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Cầu Kè',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Châu Thành',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Trà Cú',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Cầu Ngang',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Duyên Hải',
                tinhthanh: 'Trà Vinh',
            },
            {
                key: 'Huyện Tiểu Cần',
                tinhthanh: 'Trà Vinh',
            },

            // Tỉnh Tuyên Quang

            {
                key: 'Thành phố Tuyên Quang',
                tinhthanh: 'Tuyên Quang',
            },
            {
                key: 'Huyện Na Hang',
                tinhthanh: 'Tuyên Quang',
            },
            {
                key: 'Huyện Chiêm Hoá',
                tinhthanh: 'Tuyên Quang',
            },
            {
                key: 'Huyện Hàm Yên',
                tinhthanh: 'Tuyên Quang',
            },
            {
                key: 'Huyện Yên Sơn',
                tinhthanh: 'Tuyên Quang',
            },
            {
                key: 'Huyện Sơn Dương',
                tinhthanh: 'Tuyên Quang',
            },

            // Tỉnh Vĩnh Long

            {
                key: 'Thành phố Vĩnh Long',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Long Hồ',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Mang Thít',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Bình Minh',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Tam Bình',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Trà Ôn',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Vũng Liêm',
                tinhthanh: 'Vĩnh Long',
            },
            {
                key: 'Huyện Bình Tân',
                tinhthanh: 'Vĩnh Long',
            },

            // Tỉnh Vĩnh Phúc

            {
                key: 'Thành phố Vĩnh Yên',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Thị xã Phúc Yên',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Tam Dương',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Lập Thạch',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Vĩnh Tường',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Yên Lạc',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Bình Xuyên',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Mê Linh',
                tinhthanh: 'Vĩnh Phúc',
            },
            {
                key: 'Huyện Tam Đảo',
                tinhthanh: 'Vĩnh Phúc',
            },

            // Tỉnh Yên Bái

            {
                key: 'Thành phố Yên Bái',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Thị xã Nghĩa Lộ',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Lục Yên',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Văn Yên',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Yên Bình',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Mù Cang Chải',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Văn Chấn',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Trấn Yên',
                tinhthanh: 'Yên Bái',
            },
            {
                key: 'Huyện Trạm Tấu',
                tinhthanh: 'Yên Bái',
            },

        ],

        this.state = {
            isChecked: false,
            options: [],
            tinhthanh: "",
            quanhuyen: "",
            dn_show: false ,
            show_true: false,
            check_erro: '',
            fail: '',
            language: 'js',
            modalIsVisible: false,
            modalAnimatedValue: new Animated.Value(0),
        };

    };


    componentDidMount() {

        this.GetData();
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);


    };

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    };

    _showPickerProvincial = () => {

        this.setState({check_county : 'tinhthanh'});
        this._handlePressOpen();

    };

    _showPickerCounty = () => {

        this.setState({check_county : 'quanhuyen'});
        this._handlePressOpen();

    };

    _handlePressDone = () => {

        this.Check();
        
        Animated.timing(this.state.modalAnimatedValue, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }).start(() => {
          this.setState({ modalIsVisible: false });
        });
      };
    
    _handlePressOpen = () => {
        if (this.state.modalIsVisible) {
          return;
        }
    
        this.setState({ modalIsVisible: true }, () => {
          Animated.timing(this.state.modalAnimatedValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        });
      };
    
     

    GetData = async () => {


        try {
            var get_id = await AsyncStorage.getItem("@Id:key");
            var get_name = await AsyncStorage.getItem("@Cusname:key");
            var get_code = await AsyncStorage.getItem("@Cuscode:key");
            var get_cmnd = await AsyncStorage.getItem("@Cmnd:key");
            var get_phone = await AsyncStorage.getItem("@Cusphone:key");
            var get_birthdate = await AsyncStorage.getItem("@Birthdate:key");
            var get_gioitinh = await AsyncStorage.getItem("@Gender:key");
            var get_tinh = await AsyncStorage.getItem("@Tinh:key");
            var get_quan = await AsyncStorage.getItem("@Quan:key");
            var get_diachi = await AsyncStorage.getItem("@Diachi:key");

            txtTinhThanh = get_tinh;
            txtQuanhuyen = get_quan;
            this.Check();

            this.setState({
                name: get_name,
                id: get_id,
                code: get_code,
                cmnd: get_cmnd,
                phone: get_phone,
                date: get_birthdate,
                tinhthanh: get_tinh,
                history_tinhthanh: get_tinh,
                quanhuyen: get_quan,
                home: get_diachi,
                checked: get_gioitinh,
            });

        } catch (error) {
            console.log(error);
        }

    };

    SaveData = async () => {
        try {

            await AsyncStorage.setItem("@Cusname:key", this.state.name);
            await AsyncStorage.setItem("@Cusphone:key", this.state.phone);
            await AsyncStorage.setItem("@Birthdate:key", this.state.date);
            await AsyncStorage.setItem("@Cmnd:key", this.state.cmnd);
            await AsyncStorage.setItem("@Gender:key", this.state.checked);
            await AsyncStorage.setItem("@Tinh:key", this.state.tinhthanh);
            await AsyncStorage.setItem("@Quan:key", this.state.quanhuyen);
            await AsyncStorage.setItem("@Diachi:key", this.state.home);
            // await AsyncStorage.setItem("@Image:key", this.state.image);

            this.setState({
                fail: "Thành công",
                check_erro: "Chúng mừng bạn đã cập nhật thông tin thành công",
                show_true: true
            });

        } catch (error) {

            console.log(error);

        }
    }

    handleBackPress = () => {
        const { navigation } = this.props;
        navigation.pop();
        return true;

    };

    handleClose = () => {

        this.setState({ 
            dn_show: false 
        })

    };

    handleTrue = () => {

        this.setState({ 
            show_true: false 
        });
        this.props.navigation.state.params.onGoBack();
        this.goBack();

    }

    goBack(){
        const { navigation } = this.props;
        this.props.navigation.pop()
        return true;
    }

    updateUser = (tinhthanh) => {

        this.setState({ tinhthanh: tinhthanh });
        txtTinhThanh = tinhthanh;
        if(this.state.history_tinhthanh != tinhthanh){
            this.setState({quanhuyen: '0'});
        }
    };

    updateQuanhuyen = (quanhuyen) => {

        this.setState({ quanhuyen: quanhuyen });
        txtQuanhuyen = quanhuyen;
    };

    Check = () => {

        if (txtTinhThanh == 0) {

            this.setState({ options: [],});

        } else if (txtTinhThanh != 0 && txtQuanhuyen == 0) {

            this.setState({
                options: dataoptions.filter(dataoptions => dataoptions.tinhthanh == txtTinhThanh)
            });

        } else {
            this.setState({
                options: dataoptions.filter(dataoptions => dataoptions.tinhthanh == txtTinhThanh)
            });
        }
    }

    Update(){

        check_name = this.state.name;			
        check_phone = this.state.phone;	
        check_cmnd = this.state.cmnd;	
        check_birthdate = this.state.date;
        check_gioitinh = this.state.checked;
        check_tinh = this.state.tinhthanh;
        check_quanhuyen = this.state.quanhuyen;
        check_diachi = this.state.home;

		if ( 
            check_name == "" || 
            check_phone == "" ||
            check_cmnd == "" ||
            check_birthdate == "" ||
            check_gioitinh == "" ||
            check_tinh == "0" ||
            check_quanhuyen == "0" ||
            check_diachi == "" ) 
            {
			this.setState({
				fail: "Đăng nhập thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				dn_show: true
			});
		}else if(
            check_name == null || 
            check_phone == null ||
            check_cmnd == null ||
            check_birthdate == null ||
            check_gioitinh == null ||
            check_tinh == null ||
            check_quanhuyen == null||
            check_diachi == null ) 
            {
			this.setState({
				fail: "Đăng nhập thất bại",
				check_erro: "Bạn cần nhập đầy đủ tất cả các thông tin",
				dn_show: true
			});
		}else{

			fetch("http://library.limcom.vn/API/updateprofile.php", {

				method: "POST",

				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					"ID": this.state.id,		
                    "USERNAME": check_name,
                    "PHONE": check_phone,		
                    "BIRTHDATE": check_birthdate,
                    "CMND": check_cmnd,		
                    "GENDER": check_gioitinh,
                    "PROVINCE": check_tinh,
                    "DISTRICT": check_quanhuyen,		
                    "ADDRESS": check_diachi,
				})

			})

			.then((response) => response.json())

			.then((responseJson) => {

					if (responseJson.Result == "1") {					
                        this.SaveData();
					}
					if (responseJson.Result == "0") {				
						
						this.setState({
							fail: "Đăng nhập thất bại",
							check_erro: "Email hoặc mật khẩu không chính xác",
							dn_show: true
						});

					}

				},

			)
			.catch((error) => {

					console.log(error)				
					this.setState({
						fail: "Đăng nhập thất bại",
						check_erro: "Bạn hãy kiểm tra lại kết nối Internet",
						dn_show: true
					});

				}

			);
		}

    }

    renderItem() {
        adc = this.state.options
        items = [];
        for (let item of adc) {
            items.push(<Picker.Item key={item.key} label={item.key} value={item.key} />)
        }
        return items;
    }

    render(){

        const { checked } = this.state;

        return (

            <View style = {{flex: 1}}>
                
                <ImageBackground source = {ic_bg} style = {styles.image_bg}>

                    <ScrollView contentContainerStyle={{flexGrow: 1}}>

                        <View style = {{flex: 1, justifyContent: 'center'}}>

                            <Image source = {ic_logo} style = {styles.image_logo}/>

                            <Text style = {styles.txt_capnhat}>CẬP NHẬT THÔNG TIN</Text>


                            <Image source = {ic_cus} style = {styles.image_cus}/>

                            <View style = {styles.view_textinput}>

                                <View style={styles.fromDN}>

                                    <Image source={ic_user} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(name) => this.setState({ name })}
                                        value={this.state.name}
                                        placeholderTextColor='#fff'
                                        placeholder='Họ và tên'
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>

                                <View style={styles.fromDN}>

                                    <Image source={ic_phone} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(phone) => this.setState({ phone })}
                                        value={this.state.phone}
                                        placeholderTextColor='#fff'
                                        placeholder='Số điện thoại'
                                        keyboardType="email-address"
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>

                                <View style={styles.fromDN}>

                                    <Image source={ic_card} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(cmnd) => this.setState({ cmnd })}
                                        value={this.state.cmnd}
                                        placeholderTextColor='#fff'
                                        placeholder='Số chứng minh thư'
                                        keyboardType="email-address"
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>

                                <View style={styles.fromDN}>
                                    <DatePicker
                                        style={{width: deviceWidth * 0.7, justifyContent: 'center'}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="Ngày Sinh"
                                        format="DD-MM-YYYY"
                                        iconSource = {ic_date}
                                        minDate= {check_min_year}
                                        maxDate = {check_max_year}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{

                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                width: 20,
                                                height: 20,
                                                marginLeft: 10,
                                                alignContent: 'center',
                                                justifyContent: 'center'
                                            },
                                            placeholderText: {
                                                color : '#fff',
                                                fontSize: 14,
                                                // alignContent: null,

                                            },
                                            dateText: {
                                                // marginLeft: 36,
                                                color : '#fff',
                                                fontSize: 14,
                                                // alignItems: null,
                                                },
                                            dateInput: {
                                                // marginLeft: 36,
                                                borderWidth: null,
                                            }

                                        // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                </View>

                                
                                <TouchableOpacity style={styles.fromDN} onPress={this._showPickerProvincial}>

                                    <Image source={ic_maps} style={styles.ImageStyle} />
                                    <View style = {styles.ViewPicker}>
                                        <Text style = {{fontSize: 15, color: '#fff'}}>{this.state.tinhthanh == '0' ? "Tỉnh - Thành Phố" : this.state.tinhthanh}</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.fromDN} onPress={this._showPickerCounty }>

                                    <Image source={ic_quan} style={styles.ImageStyle} />
                                    
                                    <View style = {styles.ViewPicker}>
                                        <Text style = {{fontSize: 15, color: '#fff'}}>{this.state.quanhuyen == '0' ? "Quận - Huyện" : this.state.quanhuyen}</Text>
                                    </View>

                                </TouchableOpacity>

                                <View style={styles.fromDN}>

                                    <Image source={ic_home} style={styles.ImageStyle} />

                                    <TextInput
                                        onChangeText={(home) => this.setState({ home })}
                                        value={this.state.home}
                                        placeholderTextColor='#fff'
                                        placeholder='Địa chỉ (phường xã)'
                                        // multiline={true}
                                        underlineColorAndroid='transparent'
                                        style={styles.style_TextInput} />

                                </View>
                                {/* <CheckBox
                                    style={{padding: 10}}
                                    onClick={()=>{
                                    this.setState({
                                        isChecked:!this.state.isChecked
                                    });
                                    }}
                                    isChecked={this.state.isChecked}
                                    leftText={"CheckBox"}
                                /> */}
                                <View style={styles.viewRadio}>

                                    <View style={styles.ViewRadioButton}>

                                        <RadioButton
                                            color="#fff"
                                            value="1"
                                            status={checked === '1' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: '1' }); }}
                                        />

                                    </View>

                                    <View style={styles.viewCT}>

                                        <Text style={{ color: "#fff" }}>Nam</Text>

                                    </View>

                                    <View style={styles.ViewRadioButton1}>

                                        <RadioButton
                                            color="#fff"
                                            value="0"
                                            status={checked === '0' ? 'checked' : 'unchecked'}
                                            onPress={() => { this.setState({ checked: '0' }); }}
                                        />

                                    </View>

                                    <View style={styles.viewCT}>

                                        <Text style={{ color: "#fff", }}>Nữ</Text>
                                        
                                    </View>

                                </View>

                            </View>

                            <View style = {{flexDirection: 'row', alignSelf: 'center', marginBottom: deviceHeight * 0.05}}>

                            <TouchableOpacity 
                                onPress  = {() => {this.goBack()}}
                                style = {[styles.view_DN, {marginRight: 5}]}>

                                <Text style = {[styles.text_DN, {color: '#b99b64'}]}>Hủy</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress  = {() => {this.Update()}}
                                style = {[styles.view_DN, {marginLeft: 5}]}>

                                <Text style = {[styles.text_DN, {color: '#353572'}]}>Xác Nhận</Text>

                            </TouchableOpacity>
                            </View>
                        </View>

                        <SCLAlert
                                show={this.state.dn_show}
                                onRequestClose={this.handleClose}
                                theme="info"
                                title={this.state.fail}
                                subtitle={this.state.check_erro}>

                                <SCLAlertButton theme="info" onPress={this.handleClose}>OK</SCLAlertButton>

                            </SCLAlert>
                            <SCLAlert
                                show={this.state.show_true}
                                onRequestClose={this.handleTrue}
                                theme="info"
                                title={this.state.fail}
                                subtitle={this.state.check_erro}>

                                <SCLAlertButton theme="info" onPress={this.handleTrue}>OK</SCLAlertButton>

                            </SCLAlert>
                    </ScrollView>
                    {this._maybeRenderModal()}

                </ImageBackground>

            </View>

        );

    }

     _maybeRenderModal = () => {
        if (!this.state.modalIsVisible) {
          return null;
        }
    
        const { modalAnimatedValue } = this.state;
        const opacity = modalAnimatedValue;
        const translateY = modalAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        });

        const pickerTinhthanh = (
            <Picker
            style={{ width: WindowWidth, backgroundColor: '#fff' }}
            // selectedValue={this.state.language}
            selectedValue={this.state.tinhthanh}
            onValueChange={this.updateUser}
            // onValueChange={itemValue => this.setState({ language: itemValue })}
            >
                <Picker.Item label="Tỉnh - Thành Phố" value='0' />
                <Picker.Item label="TP. Hồ Chí Minh" value="TP. Hồ Chí Minh" />
                <Picker.Item label="Hà Nội" value="Hà Nội" />
                <Picker.Item label="Hải Phòng" value="Hải Phòng" />
                <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
                <Picker.Item label="Cần Thơ" value="Cần Thơ" />
                <Picker.Item label="An Giang" value="An Giang" />
                <Picker.Item label="Bà Rịa - Vũng Tàu" value="Bà Rịa - Vũng Tàu" />
                <Picker.Item label="Bắc Giang" value="Bắc Giang" />
                <Picker.Item label="Bắc Kạn" value="Bắc Kạn" />
                <Picker.Item label="Bạc Liêu" value="Bạc Liêu" />
                <Picker.Item label="Bắc Ninh" value="Bắc Ninh" />
                <Picker.Item label="Bến Tre" value="Bến Tre" />
                <Picker.Item label="Bình Định" value="Bình Định" />
                <Picker.Item label="Bình Dương" value="Bình Dương" />
                <Picker.Item label="Bình Phước" value="Bình Phước" />
                <Picker.Item label="Bình Thuận" value="Bình Thuận" />
                <Picker.Item label="Cà Mau" value="Cà Mau" />
                <Picker.Item label="Cao Bằng" value="Cao Bằng" />
                <Picker.Item label="Đắk Lắk" value="Đắk Lắk" />
                <Picker.Item label="Đắk Nông" value="Đắk Nông" />
                <Picker.Item label="Điện Biên" value="Điện Biên" />
                <Picker.Item label="Đồng Nai" value="Đồng Nai" />
                <Picker.Item label="Đồng Tháp" value="Đồng Tháp" />
                <Picker.Item label="Gia Lai" value="Gia Lai" />
                <Picker.Item label="Hà Giang" value="Hà Giang" />
                <Picker.Item label="Hà Nam" value="Hà Nam" />
                <Picker.Item label="Hà Tĩnh" value="Hà Tĩnh" />
                <Picker.Item label="Hải Dương" value="Hải Dương" />
                <Picker.Item label="Hậu Giang" value="Hậu Giang" />
                <Picker.Item label="Hòa Bình" value="Hòa Bình" />
                <Picker.Item label="Hưng Yên" value="Hưng Yên" />
                <Picker.Item label="Khánh Hòa" value="Khánh Hòa" />
                <Picker.Item label="Kiên Giang" value="Kiên Giang" />
                <Picker.Item label="Kon Tum" value="Kon Tum" />
                <Picker.Item label="Lai Châu" value="Lai Châu" />
                <Picker.Item label="Lâm Đồng" value="Lâm Đồng" />
                <Picker.Item label="Lạng Sơn" value="Lạng Sơn" />
                <Picker.Item label="Lào Cai" value="Lào Cai" />
                <Picker.Item label="Long An" value="Long An" />
                <Picker.Item label="Nam Định" value="Nam Định" />
                <Picker.Item label="Nghệ An" value="Nghệ An" />
                <Picker.Item label="Ninh Bình" value="Ninh Bình" />
                <Picker.Item label="Ninh Thuận" value="Ninh Thuận" />
                <Picker.Item label="Phú Thọ" value="Phú Thọ" />
                <Picker.Item label="Phú Yên" value="Phú Yên" />
                <Picker.Item label="Quảng Bình" value="Quảng Bình" />
                <Picker.Item label="Quảng Nam" value="Quảng Nam" />
                <Picker.Item label="Quảng Ngãi" value="Quảng Ngãi" />
                <Picker.Item label="Quảng Ninh" value="Quảng Ninh" />
                <Picker.Item label="Quảng Trị" value="Quảng Trị" />
                <Picker.Item label="Sóc Trăng" value="Sóc Trăng" />
                <Picker.Item label="Sơn La" value="Sơn La" />
                <Picker.Item label="Tây Ninh" value="Tây Ninh" />
                <Picker.Item label="Thái Bình" value="Thái Bình" />
                <Picker.Item label="Thái Nguyên" value="Thái Nguyên" />
                <Picker.Item label="Thanh Hóa" value="Thanh Hóa" />
                <Picker.Item label="Thừa Thiên - Huế" value="Thừa Thiên - Huế" />
                <Picker.Item label="Tiền Giang" value="Tiền Giang" />
                <Picker.Item label="Trà Vinh" value="Trà Vinh" />
                <Picker.Item label="Tuyên Quang" value="Tuyên Quang" />
                <Picker.Item label="Vĩnh Long" value="Vĩnh Long" />
                <Picker.Item label="Vĩnh Phúc" value="Vĩnh Phúc" />
                <Picker.Item label="Yên Bái" value="Yên Bái" />
          </Picker>
        );

        const pickerQuanhuyen = (
            <Picker
                style={{ width: WindowWidth, backgroundColor: '#fff' }}
                selectedValue={this.state.quanhuyen}
                onValueChange={this.updateQuanhuyen}>
                <Picker.Item  label="Quận - Huyện..." value="0" />
                {this.renderItem()}
            </Picker>
        );

        let checkPicker;

        if(this.state.check_county == 'tinhthanh'){

            checkPicker = pickerTinhthanh;

        }else if(this.state.check_county == 'quanhuyen'){

            checkPicker = pickerQuanhuyen;

        };
    
        return (
          <View
            style={StyleSheet.absoluteFill}
            pointerEvents={this.state.modalIsVisible ? 'auto' : 'none'}>
            <TouchableWithoutFeedback onPress={this._handlePressDone}>
              <Animated.View style={[styles.overlay, { opacity }]} />
            </TouchableWithoutFeedback>
            <Animated.View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                transform: [{ translateY }],
              }}>
              <View style={styles.toolbar}>
                <TouchableOpacity style={styles.toolbarRight} onPress={this._handlePressDone}>
                  <Text style = {{fontWeight: 'bold', color: '#3366ff', fontSize: 16}}>OK</Text>
                </TouchableOpacity>
              </View>
              {checkPicker}
            </Animated.View>
          </View>
        );
      };

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.65)',
      },
      toolbar: {
        backgroundColor: '#f1f1f1',
        paddingVertical: 5,
        paddingHorizontal: 15,
      },
      toolbarRight: {
        alignSelf: 'flex-end',
        padding: 5
      },

    // Style Image
    image_logo: {

        height: 120,
        width: 120,
        alignSelf: "center",
        marginTop: deviceHeight * 0.05,

    },
    image_cus: {

        height: deviceWidth * 0.7 * 50 / 400,
        width: deviceWidth * 0.7,
        alignSelf: "center",
        marginBottom: 15,
    },
    image_bg:{

        flex: 1,

    },
    ImageStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },

    //Style Text
    text_DN:{
        textAlign : 'center',
        fontFamily: "helveticaneue",
        fontSize: 16,
        fontWeight: 'bold'
        // textDecorationLine: 'underline'
    },
    txt_capnhat: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    },

    // Style View


    style_TextInput: {
        flex:1,
        // backgroundColor: 'white',
        // borderRadius: 30,
        // width: deviceWidth * 0.7,
        fontSize: 15,
        color: '#fff',
        fontFamily: "helveticaneue",
    },

    view_textinput:{
        alignSelf: 'center',
    },

    ViewPicker: {
        height: 40,
        width: deviceWidth * .7,
        flex:1,
        borderRadius: 30,
        justifyContent: 'center',
        color: '#fff',
    },

    viewRadio: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: deviceWidth * 0.7,
        height: deviceWidth * 0.1,
        alignSelf: "center",
        marginTop: deviceWidth * 0.025,
    },
    viewCT: {
        justifyContent: "center",
        alignSelf: "center",
        height: deviceWidth * 0.1,
    },
    ViewRadioButton: {
        alignContent:"center",
        justifyContent: "center",
    },

    ViewRadioButton1: {
        alignContent:"center",
        justifyContent: "center",
        marginLeft: deviceWidth*0.05
    },
    fromDN: {
        width: deviceWidth * .7,
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: "center",
        // backgroundColor: '#fff',
        height: 45,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 5,
    },


    view_DN: {
        alignSelf: "center",
        height: 35,
        width: deviceWidth* 0.4,
        backgroundColor: "#ffffff",
        borderRadius: 180,
        justifyContent: 'center',
        marginTop: deviceHeight*0.02,
    },

});