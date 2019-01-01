/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { List,Colors } from 'react-native-paper';
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};


export default class ListView extends Component {
  constructor(props) {
  super(props)


  this.state = {
    list:[]
  }


 let testList = [];
 for(var i=1;i<20;i++) {
   testList.push({
     title:"test",
     des:"des",
   });
 }
 this.state.list = testList;
  }

LoadMore() {
 let testList = [];
 for(var i = 0;i<5;i++) {
   testList.push({
     title:"test",
     des:"des"
   });
 }
 testList = this.state.list.concat(testList)
 this.setState({list:testList})

}

  render() {
    return (
      <View style={styles.container}>
       <ScrollView
       onScroll={({nativeEvent}) => {
           if (isCloseToBottom(nativeEvent)) {
             this.LoadMore();
           }
         }}
         scrollEventThrottle={400}
       >
       {
         this.state.list.map((item,i) => {
           return (
             <List.Item
            onPress={() => alert(item.title)}
            title={item.title + (i+1)}
            description={item.des}
            key={i}
            left={props => <List.Icon color={"#F8D773"} icon="star"/>}
            />
           )
         })
       }
       <View style={{paddingTop:8,paddingBottom:8}}>
      <ActivityIndicator size="large" color="#5AB1D5" />
      </View>
       </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
