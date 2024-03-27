import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const textFieldStyle = colorProps =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    input: {
      height: 42,
      width: '100%',
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.gray300,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 10,
      color: colors.gray900,
    },
    heading: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
      color: '#CFF281',
    },
    row: {
      flexDirection: 'row',
    },
    asterisk: {
      color: colors.red,
      fontSize: 16,
      paddingLeft: 5,
    },
    rightHeading: {
      fontSize: 14,
      marginBottom: 5,
      position: 'relative',
      paddingTop: 8,
      color: colors.gray500,
    },
    errorContainer: {
      minHeight: 5,
      alignItems: 'flex-start',
    },
    searchIcon: {
      position: 'absolute',
      top: 12,
      left: 16,
    },
    rightIcon: {
      position: 'absolute',
      top: 12,
      right: 16,
    },
    toggleButton: {
      position: 'absolute',
      top: 12,
      right: 16,
    },
    customBorderColor: {
      borderColor: colors.gray900,
    },
    customPaddingSearchIcon: {
      paddingLeft: 40,
    },
    customPaddingNoSearchIcon: {
      paddingLeft: 15,
    },
    placeholderText: {
      color: colors.gray500,
    },
  });

export default textFieldStyle;
