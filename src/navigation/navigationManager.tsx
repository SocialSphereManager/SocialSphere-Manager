/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {stackroutes} from './navigation';

const NavigationManager = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {stackroutes.map((route, key) => (
            <Stack.Screen
              key={key}
              name={route.title}
              options={route.options}
              component={route.component}
            />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationManager;
