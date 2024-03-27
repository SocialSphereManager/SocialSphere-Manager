import React, {FC, useState} from 'react';
import {
  TextInput,
  ViewStyle,
  Text,
  View,
  TouchableOpacity,
  KeyboardTypeOptions,
  InputModeOptions,
} from 'react-native';
import textFieldStyle from './Textfield.stylesheet';
import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: ViewStyle;
  borderColor?: string;
  heading?: string;
  secureTextEntry?: boolean;
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
  emailInput?: boolean;
  passwordInput?: boolean;
  cellphoneInput?: boolean;
  required?: boolean;
  accessibilityLabel: string;
  rightHeading?: string;
  value?: string;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
  onBlur?: () => void;
  testID?: string;
  maskedInput?: boolean;
  maskedInputFormat?: string;
  returnKeyType?: 'done' | 'go' | 'next' | 'default';
  currentInput?: boolean;
  currentInputOnChange?: (text: number) => void;
  addPrefix?: boolean;
}

const TextField: FC<Props> = ({
  placeholder,
  onChangeText,
  style,
  borderColor = '#D1D5DB',
  heading,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  secureTextEntry = false,
  emailInput = false,
  cellphoneInput = false,
  passwordInput = false,
  accessibilityLabel,
  required,
  rightHeading,
  value,
  disabled = false,
  keyboardType,
  inputMode,
  onBlur,
  maskedInput,
  maskedInputFormat,
  returnKeyType,
  currentInput,
  currentInputOnChange,
  addPrefix = true,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const styles = textFieldStyle();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (onBlur !== undefined) {
      onBlur();
    }
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {heading && (
        <View style={styles.row}>
          <Text style={styles.heading}>
            {heading}
            {required && <Text style={styles.asterisk}> *</Text>}{' '}
          </Text>
        </View>
      )}
      {currentInput && (
        <View style={styles.inputContainer}>
          {/* <CurrencyInput
            style={[
              styles.input,
              isFocused ? styles.customBorderColor : {borderColor},
              leftIcon
                ? styles.customPaddingSearchIcon
                : styles.customPaddingNoSearchIcon,
              style,
            ]}
            placeholder={placeholder}
            prefix={addPrefix ? 'R' : ''}
            delimiter=""
            showPositiveSign={false}
            separator=","
            onChangeValue={currentInputOnChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={Number(value)}
            testID={accessibilityLabel}
            accessibilityLabel={accessibilityLabel}
            editable={!disabled}
          /> */}
        </View>
      )}
      {!maskedInput && !currentInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              isFocused ? styles.customBorderColor : {borderColor},
              leftIcon
                ? styles.customPaddingSearchIcon
                : styles.customPaddingNoSearchIcon,
              style,
            ]}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            inputMode={
              inputMode
                ? inputMode
                : emailInput
                ? 'email'
                : cellphoneInput
                ? 'tel'
                : 'text'
            }
            autoCapitalize={passwordInput || emailInput ? 'none' : 'sentences'}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            testID={accessibilityLabel}
            accessibilityLabel={accessibilityLabel}
            editable={!disabled}
            returnKeyType={returnKeyType}
            placeholderTextColor={styles.placeholderText.color}
          />
          {/* {leftIcon && (
            <TouchableOpacity style={styles.searchIcon}>
              <Icon name={leftIcon} color={leftIconColor} />{' '}
            </TouchableOpacity>
          )}
          {rightIcon && (
            <TouchableOpacity style={styles.rightIcon}>
              <Icons icon={rightIcon} size={15} fillColor={rightIconColor} />
            </TouchableOpacity>
          )} */}
          {passwordInput && (
            <TouchableOpacity
              hitSlop={{bottom: 20, top: 20, left: 20, right: 20}}
              style={styles.toggleButton}
              onPress={togglePasswordVisibility}
              testID="passwordInputToggle">
              {isPasswordVisible ? (
                <Icon name="eye" size={20} />
              ) : (
                <Icon name="eye-slash" size={20} />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
      {maskedInput && (
        <View style={styles.inputContainer}>
          <TextInputMask
            style={[
              styles.input,
              isFocused ? styles.customBorderColor : {borderColor},
              leftIcon
                ? styles.customPaddingSearchIcon
                : styles.customPaddingNoSearchIcon,
              style,
            ]}
            placeholder={placeholder}
            inputMode={
              inputMode
                ? inputMode
                : emailInput
                ? 'email'
                : cellphoneInput
                ? 'tel'
                : 'text'
            }
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            placeholderTextColor={styles.placeholderText.color}
            //below is exampe on how to get extracted text from mask view
            // onChangeText={(formatted, extracted) => {
            //   console.log(formatted); // +1 (123) 456-78-90
            //   console.log(extracted); // 1234567890
            // }}
            value={value}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            testID={accessibilityLabel}
            accessibilityLabel={accessibilityLabel}
            editable={!disabled}
            mask={maskedInputFormat || '[0000]'}
          />
          {/* {leftIcon && (
            <TouchableOpacity style={styles.searchIcon}>
              <Icons icon={leftIcon} fillColor={leftIconColor} />
            </TouchableOpacity>
          )}
          {rightIcon && (
            <TouchableOpacity style={styles.rightIcon}>
              <Icons icon={rightIcon} size={15} fillColor={rightIconColor} />
            </TouchableOpacity>
          )} */}
        </View>
      )}
      {rightHeading && <Text style={styles.rightHeading}>{rightHeading}</Text>}
    </View>
  );
};

export default TextField;
