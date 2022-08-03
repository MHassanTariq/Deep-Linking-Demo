import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './styles';

interface PrimaryBtnProps {
  text: string;
  onClick: () => void;
  containerStyles?: ViewStyle;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  text,
  onClick,
  containerStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.container, containerStyles]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;
