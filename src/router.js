import React from "react";
import {StackNavigator} from "react-navigation";

import Home from "./pages/home"; //首页
import Test from "./pages/test";
import DropDown from "./pages/dropdown/dropdown";
import DropDown2 from "./pages/dropdown/dropdown2";
import CacheText from "./pages/cache/cache";
import Picker from "./pages/picker/picker"; //测试页

const RootStack = StackNavigator(
    {

        /**
         * 相册/拍照
         * */
        Picker: {
            screen: Picker,
            navigationOptions: {title: "Picker"}
        },


        /**
         * 下拉框2
         * */
        DropDown2: {
            screen: DropDown2,
            navigationOptions: {title: "Register"}
        },

        /**
         * 测试轮播图
         * */
        Home: {
            screen: Home,
            navigationOptions: () => ({
                header: null
            })
        },

        /**
         * 清楚缓存
         * */
        CacheText: {
            screen: CacheText,
            navigationOptions: {
                title: "Cache"
            }
        },


        /**
         * 下拉框(官方的demo)
         * */
        DropDown: {
            screen: DropDown,
            navigationOptions: {title: "DropDown"}
        },


        /**
         * 测试侧边栏
         * */
        Test: {
            screen: Test,
            navigationOptions: {title: "Test"}
        },


    },

    {
        navigationOptions: {
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#34D3AF"
            }
        }
    },
);

export default RootStack;
