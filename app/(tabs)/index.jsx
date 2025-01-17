import { auth } from "@/config/FirebaseConfig";
import { Redirect } from "expo-router";
import { signOut } from "firebase/auth";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen</Text>
      <Button title="Logout" onPress={() => signOut(auth)} />
      {/* <Redirect href={"/login"} /> */}
    </View>
  );
}
