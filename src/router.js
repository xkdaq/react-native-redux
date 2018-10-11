import React from "react";
import {StackNavigator} from "react-navigation";

import Home from "./pages/home"; //首页
import Test from "./pages/test"; //测试页

const RootStack = StackNavigator(

    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                header: null
            })
        }
    },

    {
        Test: {
            screen: Test,
            navigationOptions: {title: "Test"}
        }
    },

    {
        navigationOptions: {
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#23a2f2"
            }
        }
    },
);

export default RootStack;
