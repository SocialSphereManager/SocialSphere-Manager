import {useStyles} from './Login.stylesheet';
import {ScrollView, Text, View, SafeAreaView, Button} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is Login screen</Text>
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Registration"
          onPress={() => navigation.navigate('Registration')}
        />
        <Button
          title="Go to Calendar Page"
          onPress={() => navigation.navigate('CalendarPage')}
        />
        <Button
          title="Go to Socials Page"
          onPress={() => navigation.navigate('SocialsPage')}
        />
        <Button
          title="Go to Personality Page"
          onPress={() => navigation.navigate('PersonalityPage')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
