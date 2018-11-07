import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as CacheManager from 'react-native-http-cache';

export default class CacheText extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            size: ''
        }
    }

    render() {
        //onPress={this.clean()}
        return (
            <View>
                <Text>{this.state.size}</Text>
                <TouchableOpacity onPress={() => this.clean()}>
                    <Text>清除</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        this.getcache()
    }

    /**
     * 获取缓存
     * */
    getcache() {
        CacheManager.getCacheSize().then((value) => {
            let size = Math.round((value / 1024 / 1024) * 100) / 100 + 'M';
            console.log(size);
            this.setState({
                size: size
            })
        }, (erro) => {
            console.log(erro)
        });
    }

    /**
     * 清楚缓存
     * */
    clean() {
        CacheManager.clearCache();
        this.getcache()
    }


}


const styles = StyleSheet.create({});
