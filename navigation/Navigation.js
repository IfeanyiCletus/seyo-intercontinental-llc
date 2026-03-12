import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Dimensions,
  Platform,
  ScrollView,
  Text,
  useColorScheme,
} from 'react-native';
import HeroScreen from '../screens/HeroScreen';
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Navigation = ({}) => {
  const LandingStack = createStackNavigator();
  const MyLandingStack = () => {
    return (
      <LandingStack.Navigator
        screenOptions={{
          headerMode: 'screen',
          animationEnabled: true,
          headerShown: false,
          animationTypeForReplace: 'push',
          cardStyle: { height: Dimensions.get('window').height },
        }}
      >
        <LandingStack.Screen
          name="Home"
          component={HeroScreen}
          options={{ title: 'Seyo LLC' }}
        />
      </LandingStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyLandingStack />
    </NavigationContainer>
  );
};

export default Navigation;
