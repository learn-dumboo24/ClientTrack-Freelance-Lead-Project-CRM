import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Authentication/LoginScreen.jsx";
import SignupScreen from "../screens/Authentication/SignupScreen.jsx";
import SplashScreen from "../screens/SplashScreen.jsx";
import TermsScreen from "../screens/Legal/TermsScreen.jsx";
import PrivacyPolicyScreen from "../screens/Legal/PrivacyPolicyScreen.jsx";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  );
}
