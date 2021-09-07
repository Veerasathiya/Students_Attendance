import React, { useState,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
 
export default function StdLogin({navigation}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);




  function _submit(){
      if(userName == '')
      {
          Alert.alert('Failed', 'Username is required'),[{text : 'Okay'}];
          return;
      }
      if(password == ''){
        Alert.alert('Failed', 'Password is required'),[{text : 'Okay'}];
        return;
      }

      Alert.alert('Success', 'Logged in successfully'),[{text : 'Okay'}];

      navigation.navigate("StudentJoin");

  }
 
  return (
    <View style={styles.container}>
        
       <Image style={styles.logo} resizeMode="contain" source={require('../../img/viewusers.png')} />
       <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="User Name"
            placeholderTextColor="#003f5c"
            onChangeText={(userName) => setUserName(userName)}
            returnKeyType={'next'}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={(event)=>{ inputRef.current?.focus();}}
            value={userName}
            />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          ref={inputRef}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          returnKeyType={"go"}
          onChangeText={(password) => setPassword(password)}
          onSubmitEditing={(event)=>{
            _submit();
          }}
        />
      </View>
 
      <TouchableOpacity >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{_submit();}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2a41eb",
  },

  loginText : {
      color : "#fff"
  },

  logo : { 
    width : 170,
    height : 170,
    marginBottom : 20,

  }
});