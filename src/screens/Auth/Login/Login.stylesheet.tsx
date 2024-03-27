import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const useStyles = () => {
  const {colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#444444', // '#F9FAFB',
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 5,
    },
    header: {
      fontSize: 24,
      fontWeight: '800',
      alignSelf: 'center',
      color: '#FFFFFF',
    },
    signUpContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    signUpText: {
      marginRight: 5,
      color: '#FFFFFF',
    },
    signUpLink: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    cardFormContainer: {
      alignItems: 'center',
      paddingHorizontal: 14,
      paddingVertical: 25,
      paddingLeft: 25,
      paddingRight: 25,
      backgroundColor: '#000000',
      borderRadius: 8,
    },
    fullWidth: {
      width: Dimensions.get('window').width - 95,
    },
  });
};
