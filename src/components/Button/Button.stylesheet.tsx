import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: '#4833D5', // Primary button color
      padding: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabled: {
      backgroundColor: '#ccc', // Disabled button color
      opacity: 0.5,
    },
    buttonText: {
      color: '#fff', // Text color for buttons
      fontSize: 16,
    },
    iconWrapper: {
      marginRight: 10, // Adjust spacing between icon and text
    },
  });
};
