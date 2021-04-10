import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    TouchableHighlight,
    FlatList,
    StyleSheet,
    Button
} from 'react-native';
export default class TestFlatListSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": "0",
                select: false
            },
                {
                    "id": "1",
                    select: false
                },
                {
                    "id": "2",
                    select: false
                },
                {
                    "id": "3",
                    select: true
                },
                {
                    "id": "4",
                    select: true
                },
                {
                    "id": "5",
                    select: true
                }
],//数据源
            selectItem: [],
        }
    }

    _itemPress = (item) => {
        console.log(item);
    }
    _selectItemPress = (item) => {
        if (item.select) {
         this.state.selectItem.splice(this.state.selectItem.findIndex(function (x) {
                return x === item.name;
            }))
        } else {
            this.state.selectItem.push(item)
        }
        this.state.data[item.id].select = !item.select
        // this.state.data=arr.pop()
        this.setState({data: this.state.data})
    }

    _submitPress() {
        alert(`选中了${JSON.stringify(this.state.selectItem)}`)
    }
    render() {
        return (
            <FlatList
                keyExtractor={item => item.id}
                data={this.state.data}
                extraData={this.state} //这里是关键，如果不设置点击就不会马上改变状态，而需要拖动列表才会改变
                ListHeaderComponent={({item}) => {
                    return (<Button title={"确定"} onPress={_ = () => this._submitPress()}/>)
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableHighlight onPress={ _ => this._itemPress(item)}>
                            <View style={styles.standaloneRowFront}>
                                <Image style={{width: 70, marginLeft: 5, height: 70}}
                                       source={{uri: item.thumb}}>
                                    <TouchableHighlight
                                        onPress={_ => this._selectItemPress(item)}>
                                        <View style={{
                                            width: 80,
                                            height: 80,
                                            backgroundColor: item.select ? ("#ff081f") : ("#39a7fc")
                                        }}/>
                                    </TouchableHighlight>
                                </Image>
                                <View
                                    style={{marginLeft: 20}}>
                                    <Text>{item.select ? ("选中") : ("未选中")}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>)
                }}
            />
        );
    }
}
const styles = StyleSheet.create({
    standaloneRowFront: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 70,
        marginBottom: 5
    },
});