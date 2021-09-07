import React from "react";
import { View,TouchableOpacity,Text, StyleSheet, Image } from "react-native";


export default function StartScreen({navigation}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn1}  onPress={()=> navigation.navigate('AdminLogin')}>
                <Image source={require("../../img/admin.png")} style={styles.img} />
                <Text style={styles.txt}>Admin</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.btn2} onPress={()=> navigation.navigate('StdLogin')}>
                <Image style={styles.img1} resizeMode="contain" source={require("../../img/viewusers.png")} />
                <Text style={styles.txt}>
                    Stundent
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
    },
    btn1 : {
        flexDirection : 'row',
        width : 200,
        height : 50,
        backgroundColor : '#242424',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        bottom : 50
    },
    btn2 : {
        flexDirection : 'row',
        width : 200,
        height : 50,
        backgroundColor : '#242424',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
       
    },
    img : {
        width : 35,
        height : 35,
        marginRight : 20
    },
    img1 : {
        width : 35,
        height : 35,
        marginRight : 20
    },
    txt : {
        color : '#fff',
        fontSize : 20 
    }
})