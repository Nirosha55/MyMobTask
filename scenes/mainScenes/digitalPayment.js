import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { ButtonComp } from "../../components/buttonComp";
import { IconButton } from "react-native-paper";
import { Colors } from "../../styles";
import { DropDownComponant } from "../../components/dropDownComp";

const screenWidth = Dimensions.get("window").width;
const profileWidth = screenWidth / 4;

const DropDownSelectionComponant = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.border}>
        <View style={styles.view3}>
          <Text style={styles.text3}>{label}</Text>
          <IconButton
            icon="menu-down"
            color={Colors.RED}
            size={30}
            onPress={() => {}}
          />
        </View>
      </View>
    </Pressable>
  );
};

const DigitalPaymentScreen = ({ navigation }) => {
  const [dropdownVisible, setDropDownVisible] = useState(false);
  const [multiDropdownVisible, setMultiDropDownVisible] = useState(false);

  const [count, setCount] = useState(0);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  const decrement = () => {
    let newCount = count - 1;
    setCount(newCount);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: Colors.BLACK }}>
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
            source={require("../../assets/images/bently.png")}
          />
          <Image
            style={{
              width: profileWidth - 40,
              height: profileWidth - 40,
              marginBottom: 10,
              marginHorizontal: -20,
            }}
            source={require("../../assets/images/arrow.jpg")}
          />

          <Image
            style={{
              width: profileWidth - 40,
              height: profileWidth - 40,
              borderRadius: profileWidth / 2,
              marginHorizontal: 70,
            }}
            source={require("../../assets/images/bently.png")}
          />
        </View>
        <View style={{ padding: 10 }}></View>
      </View>

      <View style={styles.view1}>
        <DropDownComponant
          visible={dropdownVisible}
          multiple={false}
          selectedItems={(items) => {
            console.log("selected: ", items);
            setDropDownVisible(false);
          }}
        />
        <DropDownComponant
          visible={multiDropdownVisible}
          multiple={true}
          selectedItems={(items) => {
            console.log("selected: ", items);
            setMultiDropDownVisible(false);
          }}
        />
        <View style={{}}>
          <View style={{ padding: 10 }}></View>
          <Text style={styles.lasttext}> Select the item from the list </Text>
          <View style={{ padding: 10 }}></View>
          <DropDownSelectionComponant
            label={"Category"}
            mode={"outlined"}
            onPress={() => setDropDownVisible(true)}
          />
          <View style={{ padding: 10 }}></View>
          <DropDownSelectionComponant
            label={"Pick any Item"}
            onPress={() => setMultiDropDownVisible(true)}
          />
          <View style={{ padding: 10 }}></View>
        </View>
        {/* Quality code*/}
        <View
          style={[
            styles.border,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 20,
            },
          ]}
        >
          <Text style={styles.qualityText}>{"Quality"}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon="minus"
              color={Colors.RED}
              size={20}
              onPress={decrement}
            />
            <Text style={{}}>{"" + count}</Text>
            <IconButton
              icon="plus"
              color={Colors.RED}
              size={20}
              onPress={increment}
            />
          </View>
        </View>
        <View style={styles.view2}>
          <ButtonComp
            title={"ADD ITEMS"}
            width={screenWidth - 60}
            onPress={() => navigation.navigate("ADD_DIGITAL_PAYMENT")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DigitalPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.WHITE,
  },
  border: {
    borderWidth: 1,
    height: 60,
    borderRadius: 2,
    marginHorizontal: 30,
    borderColor: Colors.GRAY,
  },
  view1: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  view3: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    paddingLeft: 10,
  },

  text3: {
    paddingLeft: 15,
    fontSize: 14,
    fontWeight: "200",
    color: Colors.BLACK,
  },

  image: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "500",
    paddingHorizontal: 80,
    paddingVertical: 40,
  },
  text2: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  qualityText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.BLACK,
  },
  lasttext: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 25,
  },
});
