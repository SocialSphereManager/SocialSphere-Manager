import React, {FC} from 'react';
import {useStyles} from './Button.stylesheet';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface props {
  onPress: () => void;
  onLongPress?: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  testID?: string;
  icon?: string;
  accessibilityLabel?: string;
  variant?: variants;
}

const Button: React.FC<props> = ({
  onPress,
  onLongPress,
  title,
  buttonStyle,
  disabled,
  loading,
  testID,
  icon,
  variant = 'primary',
  accessibilityLabel,
  buttonTextStyle,
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabled,
        variant && styles[variant],
        buttonStyle,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#29333E" />
      ) : (
        <>
          {/* {icon && (
            <Icons
              size={18}
              icon={icon}
              fillColor="#000"
              style={styles.iconWrapper}
              testID={testID}
            />
          )} */}
          <Text
            testID={title?.replace(/\s/g, '')}
            accessibilityLabel={title?.replace(/\s/g, '')}
            style={[styles.buttonText, buttonTextStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
