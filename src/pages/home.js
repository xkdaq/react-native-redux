import React, {Component} from 'react';
import {DrawerLayoutAndroid, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import DrawerPanel from '../pages/common/drawerPanel';

/**
 * Create by xuke on 2018/10/11
 * 首页
 * */
export default class Home extends Component<Props> {

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                drawerWidth={200}
                onDrawerClose={this.handleDrawerClose}
                onDrawerOpen={this.handleDrawerOpen}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderNavigationView()}
            >
                <View style={[styles.textContainer, styles.drawerStyle]}>

                    <TouchableOpacity onPress={this.onDrawerOpen}>
                        <Text style={[styles.textStyle, styles.textSmall]}>点击打开侧边栏</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.onDrawerHide}>
                        <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.open()}>
                        <Text style={[styles.textStyle, styles.textSmall]}>点击打开侧边栏</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.close()}>
                        <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                    </TouchableOpacity>
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

    onDrawerOpen = () => {
        this.drawer.openDrawer();
    };

    onDrawerHide = () => {
        this.drawer.closeDrawer();
    };


    open() {
        this.drawer &&
        this.drawer.openDrawer();
    }

    close() {
        this.drawer &&
        this.drawer.closeDrawer();
    }


    handleDrawerOpen = () => {
        ToastAndroid.show("open drawer", ToastAndroid.SHORT);
    };

    handleDrawerClose = () => {
        ToastAndroid.show("close drawer", ToastAndroid.SHORT);
    };
}


const styles = StyleSheet.create({
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
