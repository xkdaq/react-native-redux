
import React, {Component} from 'react';
import {DrawerLayoutAndroid, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';


export default class Home extends Component<Props> {
    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: 'blue'}}>
                <TouchableOpacity onPress={this.close}>
                    <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                drawerWidth={200}
                onDrawerClose={this.handleDrawerClose}
                onDrawerOpen={this.handleDrawerOpen}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}
            >
                <View style={[styles.textContainer, styles.drawerStyle]}>
                    <Text style={[styles.textStyle, styles.textLarge]}>抽屉</Text>
                    <Text style={[styles.textStyle, styles.textLarge]}>高逼格 相当简单!</Text>
                    <Text style={[styles.textStyle, styles.textSmall]}>从左侧拖出策划菜单</Text>

                    <TouchableOpacity onPress={this.open}>
                        <Text style={[styles.textStyle, styles.textSmall]}>点击打开侧边栏</Text>
                    </TouchableOpacity>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    handleDrawerOpen = () => {
        ToastAndroid.show("open drawer", ToastAndroid.SHORT);
    };

    handleDrawerClose = () => {
        ToastAndroid.show("close drawer", ToastAndroid.SHORT);
    };

    open = () => {
        this.drawer.openDrawer();
    };

    close = () => {
        this.drawer.closeDrawer();
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
