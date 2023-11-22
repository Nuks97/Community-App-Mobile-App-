import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import AuthLayout from "../components/AuthLayout";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onPressLogIn = () => {
    if (email.length == 0 || password.length == 0) {
      alert("Please fill in all the fields");
      return;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
          navigation.navigate("DrawerNavigation");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <AuthLayout>
      <Text style={styles.loginText}>Login</Text>

      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={onPressLogIn} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>login</Text>
      </TouchableOpacity>
      <Text
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
        style={styles.registerText}
      >
        Forgot password
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={styles.registerText}
      >
        Create account
      </Text>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // justifyContent:'center',

    alignItems: "center",
  },
  loginText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    paddingTop: 70,
  },
  formContainer: {
    height: 90,
    width: "95%",
    // justifyContent:'center',
    // backgroundColor:"red",
    marginTop: 20,
    padding: 5,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
  input: {
    height: "70%",
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    color: "white",
  },
  buttonStyle: {
    width: "70%",
    height: 55,
    backgroundColor: "#407ad6",
    borderRadius: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  registerText: {
    color: "white",
    alignSelf: "flex-start",
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
