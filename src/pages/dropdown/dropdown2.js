import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import ModalDropdown from "react-native-modal-dropdown/components/ModalDropdown";


/**
 * Create by xuke on 2018/10/11
 * 首页
 * */

const DEMO_OPTIONS_2 = [
    {"code": "+86", "cname": "aa"},
    {"code": "+87", "cname": "bb"},
    {"code": "+88", "cname": "dd"},
    {"code": "+89", "cname": "cc"},
    {"code": "+90", "cname": "ss"},
    {"code": "+91", "cname": "ee"},
    {"code": "+85", "cname": "rr"},
    {"code": "+84", "cname": "tt"},
    {"code": "+83", "cname": "hh"},
];
const {height, width} = Dimensions.get('window');
export default class DropDown2 extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                paddingTop: 20
            }}>
                {/*手机号*/}
                <View style={{marginRight: 18, marginLeft: 18, marginTop: 20}}>

                    <Text style={{fontSize: 10, color: '#4A4A4A', marginBottom: 10}}>Phone Number</Text>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <ModalDropdown
                            ref="dropdown_2"
                            style={{
                                alignSelf: 'flex-start',
                                width: 70,
                                height: 48,
                                borderWidth: 0.5,
                                borderColor: '#E5E5E5',
                                borderBottomLeftRadius: 4,
                                borderTopLeftRadius: 4,
                                backgroundColor: '#F9F9F9',
                            }}
                            textStyle={{
                                marginVertical: 12,
                                marginHorizontal: 6,
                                fontSize: 14,
                                color: '#4A4A4A',
                                textAlign: 'center',
                                textAlignVertical: 'center',
                            }}
                            dropdownStyle={{
                                width: width - 36,
                                height: 192,
                                borderColor: '#E5E5E5',
                                borderWidth: 1,
                                borderRadius: 4,
                            }}
                            options={DEMO_OPTIONS_2}
                            defaultValue='+86'
                            renderButtonText={(rowData) => rowData.code}
                            renderRow={this._renderRow.bind(this)}
                            renderSeparator={(sectionID, rowID) => this._renderSeparator(sectionID, rowID)}
                        />

                        <TextInput
                            ref={(phone) => this.phone = phone}
                            onFocus={() => this.phone.focus()}
                            style={{
                                height: 48,
                                flex: 1,
                                backgroundColor: '#F9F9F9',
                                paddingLeft: 10,
                                borderTopRightRadius: 4,
                                borderBottomRightRadius: 4,
                                borderBottomWidth: 0.5,
                                borderTopWidth: 0.5,
                                borderLeftWidth: 0,
                                borderRightWidth: 0.5,
                                borderColor: '#E5E5E5'
                            }}
                            placeholder='Phone Number'/>
                    </View>
                </View>

                {/*验证码*/}
                <View style={{marginRight: 18, marginLeft: 18, marginTop: 60}}>

                    <Text style={{fontSize: 10, color: '#4A4A4A'}}>Code</Text>

                    <View style={{flexDirection: 'row', marginTop: 10,}}>
                        <TextInput
                            ref={(code) => this.code = code}
                            onFocus={() => this.code.focus()}
                            style={{
                                height: 46,
                                flex: 1,
                                backgroundColor: '#F9F9F9',
                                paddingLeft: 10,
                                borderRadius: 4,
                                borderWidth: 0.5,
                                borderColor: '#E5E5E5'
                            }}
                            placeholder='Code'/>

                        <TouchableOpacity
                            onPress={this.onPress}
                            style={{
                                height: 46,
                                width: 70,
                                borderTopEndRadius: 4,
                                borderBottomEndRadius: 4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#1CA385',
                            }}
                        >
                            <Text style={{color: '#FFFFFF'}}>Get</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/*下一步*/}
                <TouchableOpacity
                    style={{
                        alignSelf: 'stretch',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#34D3AF',
                        marginLeft: 18,
                        marginRight: 18,
                        height: 48,
                        borderRadius: 4,
                        marginTop: 30
                    }}
                    onPress={() => this.toNext()}
                >
                    <Text style={{
                        fontSize: 14,
                        color: '#FFFFFF'
                    }}>Next</Text>
                </TouchableOpacity>

            </View>
        );
    }

    toNext() {
        this.props.navigation.navigate("CacheText")
    }

    _renderButtonText(rowData) {
        return `${rowData.code}`;
    }

    _renderRow(rowData, rowID, highlighted) {
        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={[styles.dropdown_2_row, {backgroundColor: 'white'}]}>

                    <Text style={[styles.dropdown_2_row_text, highlighted && {color: '#34D3AF'}]}>
                        {rowData.code}
                    </Text>

                    <Text style={{marginRight: 10, fontSize: 14, color: '#4A4A4A'}}>{rowData.cname}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    /**
     * 加载item的下划线
     * */
    _renderSeparator(sectionID, rowID) {
        if (rowID === DEMO_OPTIONS_2.length - 1) return;
        let key = `spr_${rowID}`;
        return (<View style={styles.dropdown_2_separator} key={key}/>);
    }


}


const styles = StyleSheet.create({

    //全局
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },

    //按钮
    dropdown_2: {
        alignSelf: 'flex-start',
        width: 70,
        right: 8,
        marginLeft: 18,
        borderWidth: 0.5,
        borderColor: '#E5E5E5',
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        backgroundColor: '#F9F9F9',
    },
    //按钮文字
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 14,
        color: '#4A4A4A',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    //下拉框
    dropdown_2_dropdown: {
        width: width - 18,
        height: 192,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 4,
    },

    //下拉框的item分割线
    dropdown_2_separator: {
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#E5E5E5',
    },

    //下拉框的item
    dropdown_2_row: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    //item的文字
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 14,
        marginLeft: 10,
        color: '#4A4A4A',
        textAlignVertical: 'center',
    },


});
