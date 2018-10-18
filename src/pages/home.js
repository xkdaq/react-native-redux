import React, {Component} from 'react';
import {DrawerLayoutAndroid, Image, StyleSheet, ToastAndroid, ToolbarAndroid, View} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import Swiper from 'react-native-swiper';
import DrawerPanel from '../pages/common/drawerPanel';
import {StyleConfig} from "../res/values/style";


//引入打开侧边栏的图标
var drawer = require('../res/drawable/icon_menu.png');

let Images = [
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/61/b88470bb-da89-4495-ad30-3423006169331x.jpg'}},
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/509/a44c871d-b8ed-4b6a-9aab-4467ce9f24031x.jpg'}},
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/477/7676ec16-cac0-4317-8c1a-cde4b8db089b1x.jpg'}},
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/893/6d3c41c8-e89e-411a-8077-408f139320511x.jpg'}},
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/112/2c906930-cd95-4aaa-9b52-46132d9311911x.jpg'}},
    {src: {uri: 'https://photo-cdn.icons8.com/assets/previews/609/5f019b33-a824-43e8-b418-afd1884413921x.jpg'}}
];

/**
 * Create by xuke on 2018/10/11
 * 首页
 * */
export default class Home extends Component<Props> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                drawerWidth={250}
                onDrawerClose={this.handleDrawerClose}
                onDrawerOpen={this.handleDrawerOpen}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderNavigationView()}>
                <View style={styles.content}>
                    <ToolbarAndroid
                        navIcon={drawer}
                        onIconClicked={this.onOpenDrawer.bind(this)}
                        title={'KoinRocket News'}
                        titleColor={'#4A4A4A'}
                        style={styles.toobar}
                    />
                    <View style={styles.wrapper}>
                        <Swiper
                            style={styles.wrapper}
                            height={140}
                            autoplay={true}
                            autoplayTimeout={4}
                            dot={<View style={{
                                backgroundColor: '#9B9B9B',
                                width: 10,
                                height: 2,
                                borderRadius: 0,
                                margin: 3
                            }}/>}
                            activeDot={<View style={{
                                backgroundColor: '#FFFFFF',
                                width: 10,
                                height: 2,
                                borderRadius: 0,
                                margin: 3
                            }}/>}
                            paginationStyle={{
                                bottom: 6,
                            }}
                            loop>
                            <Image
                                source={{uri: 'https://photo-cdn.icons8.com/assets/previews/61/b88470bb-da89-4495-ad30-3423006169331x.jpg'}}
                                style={styles.bannerImage}/>
                            <Image
                                source={{uri: 'https://photo-cdn.icons8.com/assets/previews/509/a44c871d-b8ed-4b6a-9aab-4467ce9f24031x.jpg'}}
                                style={styles.bannerImage}/>
                            <Image
                                source={{uri: 'https://photo-cdn.icons8.com/assets/previews/477/7676ec16-cac0-4317-8c1a-cde4b8db089b1x.jpg'}}
                                style={styles.bannerImage}/>
                            <Image
                                source={{uri: 'https://photo-cdn.icons8.com/assets/previews/893/6d3c41c8-e89e-411a-8077-408f139320511x.jpg'}}
                                style={styles.bannerImage}/>
                        </Swiper>
                    </View>


                </View>
            </DrawerLayoutAndroid>
        );
    }

    /**
     * 加载侧边栏
     * */
    renderNavigationView() {
        return (
            <DrawerPanel/>
        );
    }

    /**
     * 加载banner图
     * */
    renderBanner() {
        return (
            <View style={styles.wrapper}>
                <Swiper
                    style={styles.wrapper}
                    height={140}
                    autoplay={true}
                    autoplayTimeout={4}
                    dot={<View style={{
                        backgroundColor: '#9B9B9B',
                        width: 10,
                        height: 2,
                        borderRadius: 0,
                        margin: 3
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: '#FFFFFF',
                        width: 10,
                        height: 2,
                        borderRadius: 0,
                        margin: 3
                    }}/>}
                    paginationStyle={{
                        bottom: 6,
                    }}
                    loop>
                    <Image
                        source={{uri: 'https://photo-cdn.icons8.com/assets/previews/61/b88470bb-da89-4495-ad30-3423006169331x.jpg'}}
                        style={styles.bannerImage}/>
                    <Image
                        source={{uri: 'https://photo-cdn.icons8.com/assets/previews/509/a44c871d-b8ed-4b6a-9aab-4467ce9f24031x.jpg'}}
                        style={styles.bannerImage}/>
                    <Image
                        source={{uri: 'https://photo-cdn.icons8.com/assets/previews/477/7676ec16-cac0-4317-8c1a-cde4b8db089b1x.jpg'}}
                        style={styles.bannerImage}/>
                    <Image
                        source={{uri: 'https://photo-cdn.icons8.com/assets/previews/893/6d3c41c8-e89e-411a-8077-408f139320511x.jpg'}}
                        style={styles.bannerImage}/>
                </Swiper>
            </View>
        );

    }


    /**
     * 打开侧边栏
     * */
    onOpenDrawer() {
        this.drawer.openDrawer();
    }

    handleDrawerOpen = () => {
        ToastAndroid.show("open drawer", ToastAndroid.SHORT);
    };

    handleDrawerClose = () => {
        ToastAndroid.show("close drawer", ToastAndroid.SHORT);
    };


}


const styles = StyleSheet.create({
    //首页内容
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    //首页导航栏
    toobar: {
        backgroundColor: '#FFFFFF',
        height: 56
    },
    //首页轮播图
    wrapper: {
        width: StyleConfig.screen_width,
        height: 140
    },

    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },

    //轮播图片
    bannerImage: {
        flex: 1,
        width: StyleConfig.screen_width,
    },


    drawerStyle: {
        backgroundColor: '#6699FF'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStyle: {
        margin: 10,
        color: 'white',
        textAlign: 'center'
    },
    textSmall: {
        fontSize: 15,
    },
    textLarge: {
        fontSize: 35,
    }
});
