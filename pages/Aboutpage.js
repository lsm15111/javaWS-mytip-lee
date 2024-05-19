import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Alert} from 'react-native';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

export default function AboutPage({navigation}) {

    const popup = () => {
        Alert.alert("공유!")

    }


    return (
        <View style={styles.all}>
                <Text style={styles.ltext}>HI! I사이트에 오신것을 환영합니다</Text>
                <View style={styles.main}>
                    <Image style={styles.image} source={{uri:main}}></Image>
                    <Text style={styles.mtext}>많은 이야기를 담아내려 노력했습니다!</Text>
                    <Text style={styles.stext}>이 곳에서 꼭 여러분의 이야기를 만들어가시길 바랍니다</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext} onPress={popup}>인스타공유</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    all:{
        flex: 1,
        backgroundColor:"#08298A",
        padding:"10%",

    },
    ltext:{
        textAlign:"center",
        fontSize:"20px",
        color:"white",
        fontWeight:"bold",
        flex:1,
        paddingTop:"20%",
        

    },
    mtext:{
        textAlign:"center",
        fontSize:"19px",
        color:"black",
        fontWeight:"bold",
        flex:1,
        
        

    },
    stext:{
        textAlign:"center",
        fontSize:"13px",
        color:"black",
        fontWeight:"bold",
        flex:1,
    },
    main:{
        flex:8,
        textAlign:"center",
        color:"black",
        backgroundColor:"#FFF",
        borderRadius:"20%",
        marginTop:"10%",
        marginBottom:"20%",
        paddingBottom:"30%",
        paddingTop:"10%",
    },

    image:{
        flex:3,
        margin:"5%",
        alignSelf:"center",
        width:"30%",
        height:"30%",
    },
    btn:{
        paddingVertical:15,
        paddingHorizontal:30,
        borderRadius:"10%",
        
        
        alignSelf:"center",
        backgroundColor:"#F39C12",
        color:"black",
    },
    btntext:{
        textAlign:"center",
        fontSize:"15px"
    }
})