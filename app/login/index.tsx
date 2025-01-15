import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Color from "@/Constant/Color";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/health.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          padding: 25,
          backgroundColor: Color.PRIMARY,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Color.WHITE,
            textAlign: "center",
          }}
        >
          Stay on Track, Stay Healthy!
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Color.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Track your meds, take control of your health. Stay consistent, Stay
          confident
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login/signin")}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              color: Color.PRIMARY,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: Color.WHITE,
            marginTop: 4,
          }}
        >
          Note: By Clicking Continue button, you will agree to our terms and
          condition
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 23,
  },
  button: {
    backgroundColor: Color.WHITE,
    padding: 12,
    borderRadius: 99,
    marginTop: 25,
  },
});
