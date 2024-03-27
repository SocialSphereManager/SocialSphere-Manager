import {useStyles} from './Login.stylesheet';
import {ScrollView, Text, View, SafeAreaView, Image} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';
import {Button, Textfield} from '../../../components';
import TextField from '../../../components/Textfield/Textfield';
import Logo from '../../../../assets/images/SocialSpheremanager.png';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Logo} style={{width: 300, height: 200}} />
        </View>

        <View style={styles.cardFormContainer}>
          <Textfield accessibilityLabel={''} heading="Email address" />
          <TextField
            heading="Password"
            secureTextEntry
            accessibilityLabel={''}
            passwordInput
          />
          <View style={styles.fullWidth}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Registration')}
            />
          </View>
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Text
              style={styles.signUpLink}
              onPress={() => navigation?.navigate('Registration')}
              testID="NavRegister"
              accessibilityLabel="RegisterLink">
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
