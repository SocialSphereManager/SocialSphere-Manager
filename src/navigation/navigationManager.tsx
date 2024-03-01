/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {stackRoutes} from './navigation'; // Assuming LoginScreen is defined there

const NavigationManager = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {stackRoutes.map((route, key) => (
          <Stack.Screen
            key={key}
            name={route.title}
            options={route.options}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationManager;
