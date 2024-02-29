import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F9FAFB',
    },
  });
};
