import {useStyles} from './Registration.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';

type RegistrationScreenProps = {
  navigation:
    | StackNavigationProp<RootStackParamList, 'Registration'>
    | undefined;
};

const RegistrationScreen: FC<RegistrationScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is Registration screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
