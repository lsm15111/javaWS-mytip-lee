import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerOne} >
        <Text style={styles.title}>꿀팁</Text>
        <Image style={styles.image} source={{ uri: main }} />
      </View>

      <View style={styles.containerTwo}>
        <ScrollView style={styles.scrollstyle} horizontal={true} indicatorStyle={'white'}>
          <TouchableOpacity style={styles.scrolltouch}>
            <Text style={styles.scrolltext}>피자</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrolltouch}>
            <Text style={styles.scrolltext}>치킨</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrolltouch}>
            <Text style={styles.scrolltext}>국수</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrolltouch}>
            <Text style={styles.scrolltext}>짬뽕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrolltouch}>
            <Text style={styles.scrolltext}>짜장면</Text>
          </TouchableOpacity>



        </ScrollView>
        <View style={styles.scrollviewstyle}></View>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '90%'
  },
  containerOne: {
    flex: 1,
  },
  containerTwo: {
    flex: 1,
  },
  containerThree: {
    flex: 1
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  scrollstyle: {
    width: '100%',
    height: 10,
    margin:10,
    horizontalAlign: 'center'
  },
  scrollviewstyle: {
    width: '100%',
    flex: 5
  },
  scrolltouch: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#ABDEE6',
  },
  scrolltext:{
    color: 'drakgray',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    paddingBottom:0,
    paddingTop:0,
  }


});


