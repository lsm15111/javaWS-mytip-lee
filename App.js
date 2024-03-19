import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image,ScrollView, TouchableOpacity } from 'react-native';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerOne} >
        <Text style = {styles.title}>꿀팁</Text>
        <Image style={styles.image} source={{uri:main}}/>
      </View>
      <View style={styles.containerTwo}>
      <ScrollView style={styles.scrollstyle}>
        <TouchableOpacity>
          
        </TouchableOpacity>

      </ScrollView>
      <View style={styles.scrollviewstyle}></View>
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'90%'
  },
  containerOne: {
    flex:1,
  },
  containerTwo:{
    flex:1,
    backgroundColor:"gray"
  },
  containerThree:{
    flex:1
  },
  image: {
    resizeMode:"contain",
    flex: 1,
    margin:10,
    alignContent:"center",
    backgroundColor: '#0553',
  },
  scrollstyle: {
    width: '100%',
    height: 10,
    backgroundColor:'green',
    flex:1
  },
  scrollviewstyle: {
    width: '100%',
    flex:3
  },
  title: {
    fontSize:"20px",
    fontWeight:"bold"
  }
  

});