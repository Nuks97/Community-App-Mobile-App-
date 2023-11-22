import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";

import firebase from "firebase";
import Layout from "../components/Layout";
import Header from "../components/Header";
import CheckMark from "../components/CheckMark";




export default function CardPayment({ navigation }) {
  const [notificationHeader, setNotificationHeader] = React.useState("");
  const [cardHolderName, setCardHolderName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const onPressPost = () => {
    if (cardNumber.length < 3) {
      alert("Please enter a valid card number");
    } else if (expiryDate == "") {
      alert("Please enter a valid expiry date");
    } else if (cvv == "") {
      alert("Please enter a valid cvv number");
    } else if (cardHolderName == "") {
      alert("Please enter a valid card holder name");
    } else {
      const userId = firebase.auth().currentUser?.uid;
      const paymentId = Date.now();
      const dateNow = new Date();
      const time = dateNow.toLocaleTimeString();
      const date = dateNow.toLocaleDateString();
      setIsLoading(true);
      firebase
        .database()
        .ref(`Payments/${paymentId}`)
        .update({
          cardNumber,
          expiryDate,
          cvv,
          cardHolderName,
          paymentId,
          userId,
          time,
          date,
        })
        .then(() => {
          setIsDone(true);
          setTimeout(() => {
            navigation.goBack();
          }, 2000);
        })
        .catch((error) => {
          setIsLoading(true);
          alert(error);
        });
    }
  };

  return (
    <Layout>
      <Header navigation={navigation} title="Post Notification" />
      {isDone ? (
        <CheckMark />
      ) : (
        <>
          <TextInput
            style={styles.inputStyle}
            onChangeText={setCardNumber}
            value={cardNumber}
            placeholder="Card Number"
          />
          <TextInput
            style={styles.inputStyle}
            onChangeText={setExpiryDate}
            value={expiryDate}
            placeholder="Expiry Date"
          />
          <TextInput
            style={styles.inputStyle}
            onChangeText={setCvv}
            value={cvv}
            placeholder="CVV"
          />
          <TextInput
            style={styles.inputStyle}
            onChangeText={setCardHolderName}
            value={cardHolderName}
            placeholder="Card Holder Name"
          />
          <TouchableOpacity onPress={onPressPost} style={styles.buttonStyle}>
            {isLoading ? (
              <ActivityIndicator size={"large"} color="white" />
            ) : (
              <Text style={styles.buttonText}>Pay Now</Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  inputStyle: {
    minHeight: DEVICE_HEIGHT * 0.06,
    width: SCREEN_WIDTH * 0.9,
    borderColor: "#407ad6",
    borderWidth: 1,
    color: "black",
    marginTop: 20,
    borderRadius: 10,
    padding: 5,
  },
  buttonStyle: {
    width: "70%",
    height: DEVICE_HEIGHT * 0.065,
    backgroundColor: "#407ad6",
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
