import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import PdfViewer from "../PdfViewer";
import NotesyncHome from "../Home/NotesyncHome";
import FirstYear from "../Years/FY";
import SecondYear from "../Years/SY";
import ThirdYear from "../Years/TY";




import { RootStackParamList } from "./types";


const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="NotesyncHome"
        component={NotesyncHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FirstYear"
        component={FirstYear}
        options={{ headerShown: true }}
      />
       <Stack.Screen
        name="SecondYear"
        component={SecondYear}
        options={{ headerShown: true }}
      /> 
      <Stack.Screen
      name="ThirdYear"
      component={ThirdYear}
      options={{ headerShown: true }}
    />
      <Stack.Screen
        name="PdfViewer"
        component={PdfViewer}
        options={{ headerShown: true }}
      />
      

    </Stack.Navigator>
  );
};

export default Navigation;
