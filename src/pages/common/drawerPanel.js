import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StyleConfig} from "../../res/values/style";


const headerImg = require('./../../res/drawable/img_header.png');
const photoImg = require('./../../res/drawable/img_default_photo.png');
const news = require('./../../res/drawable/icon_menu_news.png');
const market = require('./../../res/drawable/icon_menu_market.png');
const setting = require('./../../res/drawable/icon_menu_setting.png');
const about = require('./../../res/drawable/icon_menu_about.png');
const out = require('./../../res/drawable/icon_menu_out.png');
const right = require('./../../res/drawable/icon_menu_right.png');

/**
 * 侧边栏
 * */
export default class DrawerPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image source={headerImg}/>
                    <View style={{
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={photoImg}/>
                        <Text style={{color: 'white', marginTop: 8}}>会唱情歌的小猴子</Text>

                    </View>
                </View>

                <View style={{
                    height: StyleConfig.screen_height,
                    backgroundColor: 'white'
                }}>
                    {this.renderItem(news, '新闻')}
                    {this.renderItem(market, '娱乐')}
                    {this.renderItem(setting, '设置')}
                    {this.renderItem(about, '关于')}
                    {this.renderItem(out, '退出登陆')}
                </View>
            </View>
        )
    }

    renderItem(img, title) {
        return (
            <TouchableOpacity
                //onPress={() => this.props.navigation.navigate(title)}
                style={styles.item}
            >
                <View style={styles.item_left}>
                    <Image source={img}/>
                    <Text style={styles.item_left_text}>{title}</Text>
                </View>
                <Image style={styles.item_right_img} source={right}/>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    loginBtn: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: 'white'
    },
    item: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    item_left: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18
    },
    item_left_text: {
        color: '#9B9B9B',
        fontSize: 14,
        marginLeft: 12
    },
    item_right_img: {
        marginRight: 18
    }
});



