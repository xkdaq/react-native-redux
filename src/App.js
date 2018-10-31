/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import RootStack from "./router";
import SplashScreen from "react-native-splash-screen";


export default class App extends Component<Props> {
    render() {
        return (
            <RootStack />
        );
    }

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
    }
}
