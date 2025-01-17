import { auth } from "@/config/FirebaseConfig";
import { removeLocalStorage } from "@/service/storage";
import { Redirect, useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await removeLocalStorage();
      router.replace("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen</Text>
      {/* <Button title="Logout" onPress={() => signOut(auth)} /> */}
      <Button title="Logout" onPress={handleLogout} />
      {/* <Redirect href={"/login"} /> */}
    </View>
  );
}
