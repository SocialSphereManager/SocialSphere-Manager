import {useStyles} from './PersonalityPage.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/navigation';

type PersonalityPageScreenProps = {
  navigation:
    | StackNavigationProp<RootStackParamList, 'PersonalityPage'>
    | undefined;
};

const PersonalityPageScreen: FC<PersonalityPageScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is PersonalityPage screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalityPageScreen;
