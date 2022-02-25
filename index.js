import * as React from 'react';
import { Button, Text, TextInput, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8DC' }}>
      <View style={{marginBottom: 40,width: 190,height: 190, marginTop:'-50px'}}>
      <Image source={require('../assets/logo.png')} />
      </View>
      <View style={{width: "30vh", height: 45, marginBottom: 20, alignItems: "center",}}>
      <TextInput placeholder='Username' style={{height: 50, width:"90%", padding: 10,marginLeft: 20,borderColor: "#00000",borderBottomWidth: 1,}}></TextInput>
      </View>
      <View >
      <TextInput placeholder='Password' style={{height: 50, width:"90%", padding: 10,marginLeft: 20,borderColor: "#00000",borderBottomWidth: 1,}}></TextInput>
      </View>
      <View >
      <TextInput placeholder='Password' style={{height: 50, width:"90%", padding: 10,marginLeft: 20,borderColor: "#00000",borderBottomWidth: 1,}}></TextInput>
      </View>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF8DC' }}>
      
      <View style={{width: "30vh", height: 45, marginBottom: 20, alignItems: "center",}}>
      <TextInput placeholder='Username' style={{height: 50, width:"90%", padding: 10,marginLeft: 20,borderColor: "#00000",borderBottomWidth: 1,}}></TextInput>
      </View>
      <View >
      <TextInput placeholder='Password' style={{height: 50, width:"90%", padding: 10,marginLeft: 20,borderColor: "#00000",borderBottomWidth: 1,}}></TextInput>
      </View>
      <View style={{height: 30, marginBottom: 30,}}>
      <Text>Forgot Password</Text>
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
