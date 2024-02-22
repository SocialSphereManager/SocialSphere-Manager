import {useStyles} from './Home.stylesheet';
import {ScrollView, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/navigation';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'> | undefined;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const styles = useStyles();

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Text>this is Home screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
