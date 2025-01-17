import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Color from "@/Constant/Color";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/config/FirebaseConfig";

export default function signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please fill in all fields", ToastAndroid.BOTTOM);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: fullName,
        });
        console.log(user);

        router.push("/(tabs)");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/email-already-in-use") {
          ToastAndroid.show("Email already exists", ToastAndroid.BOTTOM);
        }

        // ..
      });
  };

  return (
    <View style={{ padding: 25 }}>
      <Text style={styles.textHeader}>Create New Account</Text>

      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Full Name</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          onChangeText={(value) => setFullName(value)}
        />
      </View>
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
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            fontSize: 17,
            color: Color.WHITE,
            textAlign: "center",
          }}
          onPress={onCreateAccount}
        >
          Create Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCreate}
        onPress={() => router.push("/login/signin")}
      >
        <Text
          style={{
            fontSize: 17,
            color: Color.PRIMARY,
            textAlign: "center",
          }}
        >
          Already have an account? Sign In
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
