import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Colors } from "../../../styles";
import { ButtonComp } from "../../../components/buttonComp";

const screenWidth = Dimensions.get("window").width;
const profileWidth = screenWidth / 4;

const AddDigitalPaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon="close-outline"
          color={Colors.WHITE}
          size={20}
          style={{ marginTop: 35 }}
        />
        <Text style={styles.text1}>Digital Payment</Text>
      </View>
      <Text style={styles.text2}>Request money from customer</Text>
      <View style={{ padding: 20 }}></View>
      <View style={styles.image}>
        <Image
          style={{
            width: profileWidth - 40,
            height: profileWidth - 40,
            borderRadius: profileWidth / 2,
            marginHorizontal: 60,
          }}
          source={require("../../../assets/images/bently.png")}
        />
        <Image
          style={{
            width: profileWidth - 40,
            height: profileWidth - 40,
            marginBottom: 10,
            marginHorizontal: -20,
          }}
          source={require("../../../assets/images/arrow.jpg")}
        />
        <Image
          style={{
            width: profileWidth - 40,
            height: profileWidth - 40,
            borderRadius: profileWidth / 2,
            marginHorizontal: 70,
          }}
          source={require("../../../assets/images/bently.png")}
        />
      </View>
      <View style={{ padding: 10 }}></View>
      <View style={styles.rupee}>
        <IconButton icon="currency-inr" color={Colors.WHITE} size={40} />
        <Text style={styles.zeroText}>{"0"}</Text>
      </View>
      <Text style={styles.lastText}>{"Add items of purchase"}</Text>
      <View style={styles.button}>
        <ButtonComp
          title={"CONTINUE"}
          width={screenWidth - 160}
          onPress={() => {
            console.log("add items");
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <IconButton
          icon="plus-circle"
          color={Colors.PURPLE}
          size={60}
          style={{ paddingBottom: 35, marginRight: 30 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddDigitalPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.BLACK,
  },
  text1: {
    color: Colors.WHITE,
    fontSize: 16,
    paddingHorizontal: 90,
    paddingVertical: 40,
  },
  text2: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rupee: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  zeroText: {
    fontSize: 60,
    fontWeight: "bold",
    color: Colors.WHITE,
  },
  lastText: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.WHITE,
    padding: 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    color: Colors.BLACK,
  },
});
