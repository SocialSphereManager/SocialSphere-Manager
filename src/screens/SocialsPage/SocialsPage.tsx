import {useStyles} from './SocialsPage.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/navigation';

type SocialsPageScreenProps = {
  navigation:
    | StackNavigationProp<RootStackParamList, 'SocialsPage'>
    | undefined;
};

const SocialsPageScreen: FC<SocialsPageScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is SocialsPage screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SocialsPageScreen;
