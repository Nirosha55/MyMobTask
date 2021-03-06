import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton } from "react-native-paper";
import VectorImage from "react-native-vector-image";
import { Colors } from "../styles";
import {
  EMS_LINE,
  HOME_LINE,
  HOME_FILL,
  SCHEDULE_FILL,
  SCHEDULE_LINE,
} from "../assets/svg";

import HomeScreen from "../scenes/mainScenes/Home";
import EMSScreen from "../scenes/mainScenes/EMS";
import MyTasksScreen from "../scenes/mainScenes/MyTasks";

import SettingsScreen from "../scenes/mainScenes/settingsScreen";
import UpcomingDeliveriesScreen from "../scenes/mainScenes/upcomingDeliveriesScreen";
import ComplaintsScreen from "../scenes/mainScenes/complaintsScreen";
import SideMenuScreen from "../scenes/mainScenes/sideMenuScreen";
import NotificationScreen from "../scenes/mainScenes/notificationsScreen";
import AddPreEnquiryScreen from "../scenes/mainScenes/EMS/addPreEnquiryScreen";
import ConfirmedPreEnquiryScreen from "../scenes/mainScenes/EMS/confirmedPreEnquiryScreen";
import DigitalPaymentScreen from "../scenes/mainScenes/digitalPayment";
import AddDigitalPaymentScreen from "../scenes/mainScenes/EMS/addDigitalPayment";

const drawerWidth = 300;
const screeOptionStyle = {
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
  headerStyle: {
    backgroundColor: Colors.DARK_GRAY,
  },
  headerTintColor: Colors.WHITE,
  headerBackTitleVisible: false,
};

const MenuIcon = ({ navigation }) => {
  return (
    <IconButton
      icon="menu"
      color={Colors.WHITE}
      size={30}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const SearchIcon = () => {
  return (
    <IconButton
      icon="magnify"
      color={Colors.WHITE}
      size={25}
      onPress={() => console.log("Pressed")}
    />
  );
};

const NotficationIcon = ({ navigation, identifier }) => {
  return (
    <IconButton
      icon="bell"
      color={Colors.WHITE}
      size={25}
      onPress={() => {
        navigation.navigate(identifier);
      }}
    />
  );
};

export const DrawerStackIdentifiers = {
  home: "HOME_SCREEN",
  upcomingDeliveries: "UPCOMING_DELIVERIES",
  complaint: "COMPLAINTS",
  settings: "SETTINGS",
  notification: "NOTIFICATION",
  digitalPayment: "DIGITAL_PAYMENT",
};

export const TabStackIdentifiers = {
  home: "HOME_TAB",
  ems: "EMS_TAB",
  myTask: "MY_TASK_TAB",
};

export const EmsStackIdentifiers = {
  addPreEnq: "ADD_PRE_ENQUIRY",
  confirmedPreEnq: "CONFIRMED_PRE_ENQUIRY",
  
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      initialRouteName={"Home"}
      screenOptions={screeOptionStyle}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Dashboard",
          headerLeft: () => <MenuIcon navigation={navigation} />,
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <NotficationIcon
                  navigation={navigation}
                  identifier={"NOTIF_1"}
                />
              </View>
            );
          },
        }}
      />

      <HomeStack.Screen
        name={"NOTIF_1"}
        component={NotificationScreen}
        options={{ title: "Notfications" }}
      />
    </HomeStack.Navigator>
  );
};

const EmsStack = createStackNavigator();

const EmsStackNavigator = ({ navigation }) => {
  return (
    <EmsStack.Navigator
      initialRouteName={"EMS"}
      screenOptions={screeOptionStyle}
    >
      <EmsStack.Screen
        name="EMS"
        component={EMSScreen}
        options={{
          title: "EMS",
          headerLeft: () => <MenuIcon navigation={navigation} />,
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <SearchIcon />
                <NotficationIcon
                  navigation={navigation}
                  identifier={"NOTIF_2"}
                />
              </View>
            );
          },
        }}
      />

      <EmsStack.Screen
        name={"NOTIF_2"}
        component={NotificationScreen}
        options={{ title: "Notfications" }}
      />
      <EmsStack.Screen
        name={EmsStackIdentifiers.addPreEnq}
        component={AddPreEnquiryScreen}
        options={{ title: "Pre-Enquiry" }}
      />
      <EmsStack.Screen
        name={EmsStackIdentifiers.confirmedPreEnq}
        component={ConfirmedPreEnquiryScreen}
        options={{ title: "Pre-Enquiry" }}
      />
    </EmsStack.Navigator>
  );
};

const MyTaskStack = createStackNavigator();

const MyTaskStackNavigator = ({ navigation }) => {
  return (
    <MyTaskStack.Navigator
      initialRouteName={"MY_TASKS"}
      screenOptions={screeOptionStyle}
    >
      <MyTaskStack.Screen
        name="MY_TASKS"
        component={MyTasksScreen}
        options={{
          title: "My Tasks",
          headerLeft: () => <MenuIcon navigation={navigation} />,
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row" }}>
                <SearchIcon />
                <NotficationIcon
                  navigation={navigation}
                  identifier={"NOTIF_3"}
                />
              </View>
            );
          },
        }}
      />

      <MyTaskStack.Screen
        name={"NOTIF_3"}
        component={NotificationScreen}
        options={{ title: "Notfications" }}
      />
    </MyTaskStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === TabStackIdentifiers.home) {
            iconName = focused ? HOME_FILL : HOME_LINE;
          } else if (route.name === TabStackIdentifiers.ems) {
            iconName = focused ? HOME_FILL : EMS_LINE;
          } else if (route.name === TabStackIdentifiers.myTask) {
            iconName = focused ? SCHEDULE_FILL : SCHEDULE_LINE;
          }

          return (
            <VectorImage
              width={size}
              height={size}
              source={iconName}
              style={{ tintColor: color }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.RED,
        inactiveTintColor: "gray",
      }}
      initialRouteName={TabStackIdentifiers.home}
    >
      <Tab.Screen
        name={TabStackIdentifiers.home}
        component={HomeStackNavigator}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={TabStackIdentifiers.ems}
        component={EmsStackNavigator}
        options={{ title: "EMS" }}
      />
      <Tab.Screen
        name={TabStackIdentifiers.myTask}
        component={MyTaskStackNavigator}
        options={{ title: "My Tasks" }}
      />
    </Tab.Navigator>
  );
};

const ComplaintStack = createStackNavigator();

const ComplaintStackNavigator = ({ navigation }) => {
  return (
    <ComplaintStack.Navigator
      initialRouteName={"COMPLAINT_SCREEN"}
      screenOptions={screeOptionStyle}
    >
      <ComplaintStack.Screen
        name={"COMPLAINT_SCREEN"}
        component={ComplaintsScreen}
        options={{
          title: "Complaints",
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </ComplaintStack.Navigator>
  );
};

const UpcomingDeliveriestStack = createStackNavigator();

const UpcomingDeliveriestStackNavigator = ({ navigation }) => {
  return (
    <UpcomingDeliveriestStack.Navigator
      initialRouteName={"UPCOMING_DELIVERIES_SCREEN"}
      screenOptions={screeOptionStyle}
    >
      <UpcomingDeliveriestStack.Screen
        name={"UPCOMING_DELIVERIES_SCREEN"}
        component={UpcomingDeliveriesScreen}
        options={{
          title: "Upcoming Deliveries",
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </UpcomingDeliveriestStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackNavigator = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      initialRouteName={"SETTINGS_SCREEN"}
      screenOptions={screeOptionStyle}
    >
      <SettingsStack.Screen
        name={"SETTINGS_SCREEN"}
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </SettingsStack.Navigator>
  );
};
const DigitalPaymentStack = createStackNavigator();

const DigitalPaymentStackNavigator = ({ navigation }) => {
  return (
    <DigitalPaymentStack.Navigator
      initialRouteName={"DIGITAL_PAYMENT_SCREEN"}
      screenOptions={screeOptionStyle}
    >
      <DigitalPaymentStack.Screen
        name={"DIGITAL_PAYMENT_SCREEN"}
        component={DigitalPaymentScreen}
        options={{
          title: "DigitalPayment",
          headerShown: false,
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
      <DigitalPaymentStack.Screen
        name={"ADD_DIGITAL_PAYMENT"}
        component={AddDigitalPaymentScreen}
        options={{
          title: "DigitalPayment",
          headerShown: false,
          headerLeft: () => <MenuIcon navigation={navigation} />,
        }}
      />
    </DigitalPaymentStack.Navigator>
  );
};

const MainDrawerNavigator = createDrawerNavigator();

const MainStackDrawerNavigator = () => {
  return (
    <MainDrawerNavigator.Navigator
      drawerStyle={{
        width: drawerWidth,
      }}
      drawerContent={(props) => <SideMenuScreen {...props} />}
      initialRouteName={DrawerStackIdentifiers.home}
    >
      <MainDrawerNavigator.Screen
        name={DrawerStackIdentifiers.home}
        component={TabNavigator}
      />
      <MainDrawerNavigator.Screen
        name={DrawerStackIdentifiers.upcomingDeliveries}
        component={UpcomingDeliveriestStackNavigator}
      />
      <MainDrawerNavigator.Screen
        name={DrawerStackIdentifiers.complaint}
        component={ComplaintStackNavigator}
      />
      <MainDrawerNavigator.Screen
        name={DrawerStackIdentifiers.settings}
        component={SettingsStackNavigator}
      />
      <MainDrawerNavigator.Screen
        name={DrawerStackIdentifiers.digitalPayment}
        component={DigitalPaymentStackNavigator}
      />
    </MainDrawerNavigator.Navigator>
  );
};

export { MainStackDrawerNavigator };
