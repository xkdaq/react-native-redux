import React from "react";
import {StackNavigator} from "react-navigation";

import Home from "./pages/home"; //首页
import Test from "./pages/test";
import DropDown from "./pages/dropdown";
import DropDown2 from "./pages/dropdown2"; //测试页

const RootStack = StackNavigator(
    {


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
         * 下拉框2
         * */
        DropDown2: {
            screen: DropDown2,
            navigationOptions: {title: "Register"}
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
