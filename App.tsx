import * as React from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function DetailsScreen() {
  return (
    
  <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF8DC",
      }}
    >
      <View
        style={{
          width: "30vh",
          height: 45,
          marginBottom: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#008080", fontWeight: "bold" }}>
          Attendance Tracker
        </h2>

        <View>
          <TextInput
            placeholder="Name"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Student Number"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Department"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>

        <View>
          <TextInput
            placeholder="Year"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>

        <View>
          <TextInput
            placeholder="Email Address"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <br></br>
        <View>
          <label>Select the module of the semester</label>
          <br></br>
          <View>
            <select style={{ padding: "10px", width: "100%", borderRadius: 5 }}>
              <option>DIS</option>
              <option>NWC</option>
              <option>EDP</option>
            </select>
          </View>
        </View><br></br>

        <TouchableOpacity
          style={{
            width: "90%",
            borderRadius: 5,
            height: 50,
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#008B8B",
          }}
        >
          <Text
            style={{ color: "#fffaf0", fontWeight: "bold" }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF8DC",
      }}
    >
      <View
        style={{
          width: "30vh",
          height: 45,
          marginBottom: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "#008080", fontWeight: "bold" }}>
          Attendance Tracker
        </h2>

        <View>
          <TextInput
            placeholder="Username"
            style={{
              height: 50,
              width: "100%",
              padding: 10,

              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <View>
          <TextInput
            placeholder="Password"
            style={{
              height: 50,
              width: "100%",
              padding: 10,
              borderColor: "#00000",
              borderBottomWidth: 1,
            }}
          ></TextInput>
        </View>
        <br></br>
        <br></br>
        <View style={{ height: 30, marginBottom: 30 }}>
          <Text>Forgot Password</Text>
        </View>

        

        <TouchableOpacity
          style={{
            width: "90%",
            borderRadius: 5,
            height: 50,
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#008B8B",
          }}
        >
          <Text
            onPress={() => navigation.navigate("Details")}
            style={{ color: "#fffaf0", fontWeight: "bold" }}
          >
            SIGNIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
  
      <HomeStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#008080'}
      }}>
      <HomeStack.Screen  name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  // <Stack.Navigator>
  //   <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
  // </Stack.Navigator>
  
    
  );
}


const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
