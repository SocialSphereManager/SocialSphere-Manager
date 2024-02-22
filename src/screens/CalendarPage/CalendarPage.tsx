import {useStyles} from './CalendarPage.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';

type CalendarPageScreenProps = {
  navigation:
    | StackNavigationProp<RootStackParamList, 'CalendarPage'>
    | undefined;
};

const CalendarPageScreen: React.FC<CalendarPageScreenProps> = ({
  navigation,
}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is CalendarPage screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarPageScreen;
