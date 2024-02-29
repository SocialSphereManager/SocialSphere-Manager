import {useStyles} from './Login.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'> | undefined;
};

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is Login screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
