import React from 'react';
import {Linking, View} from 'react-native';
import PrimaryBtn from '../../components/primaryBtn/primaryBtn';
import {URL_SCREEN_A, URL_SCREEN_B, URL_SCREEN_C} from '../../utils/links';
import {
  DEEP_LINK_TO_SCREEN_A,
  DEEP_LINK_TO_SCREEN_B,
  DEEP_LINK_TO_SCREEN_C,
} from '../../utils/strings';
import styles from './styles';

const LinkingScreen: React.FC = () => {
  function linkToScreenA() {
    Linking.openURL(URL_SCREEN_A);
  }
  function linkToScreenB() {
    Linking.openURL(URL_SCREEN_B);
  }
  function linkToScreenC() {
    Linking.openURL(URL_SCREEN_C);
  }
  return (
    <View style={styles.container}>
      <PrimaryBtn
        text={DEEP_LINK_TO_SCREEN_A}
        onClick={linkToScreenA}
        containerStyles={styles.btnMargins}
      />
      <PrimaryBtn
        text={DEEP_LINK_TO_SCREEN_B}
        onClick={linkToScreenB}
        containerStyles={styles.btnMargins}
      />
      <PrimaryBtn
        text={DEEP_LINK_TO_SCREEN_C}
        onClick={linkToScreenC}
        containerStyles={styles.btnMargins}
      />
    </View>
  );
};

export default LinkingScreen;
