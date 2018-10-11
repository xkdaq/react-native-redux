import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StyleConfig} from "../../res/values/style";

/**
 * 侧边栏
 * */
export default class DrawerPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity>
                    <Text style={[styles.textStyle, styles.textSmall]}>点击关闭侧边栏</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: StyleConfig.screen_height,
        backgroundColor: '#6699FF'
    },
    textStyle: {
        margin: 10,
        color: 'white',
        textAlign: 'center'
    },
    textSmall: {
        fontSize: 15,
    },
});



