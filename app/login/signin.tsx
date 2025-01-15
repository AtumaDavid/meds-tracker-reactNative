import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Color from "@/Constant/Color";
import { useRouter } from "expo-router";
import { auth } from "@/config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function signin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInClick = () => {
    if (!email || !password) {
      Alert.alert("Please enter email and password");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        router.replace("/(tabs)");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/invalid-credentials") {
          Alert.alert("Invalid email or password");
        }
      });
  };
  return (
    <View style={{ padding: 25 }}>
      <Text style={styles.textHeader}>Lets Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You have been missed</Text>
      {/* E-MAIL */}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      {/* PASSWORD */}
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      {/* LOGIN */}
      <TouchableOpacity style={styles.button} onPress={onSignInClick}>
        <Text
          style={{
            fontSize: 17,
            color: Color.WHITE,
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => router.push("/login/signup")}
      >
        <Text
          style={{
            fontSize: 17,
            color: Color.PRIMARY,
            textAlign: "center",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
  },
  subText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: Color.GRAY,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: Color.WHITE,
  },
  button: {
    padding: 15,
    backgroundColor: Color.PRIMARY,
    borderRadius: 10,
    marginTop: 35,
  },
  buttonCreate: {
    padding: 15,
    backgroundColor: Color.WHITE,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Color.PRIMARY,
  },
});
