import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import PrimaryBtn from '../../components/primaryBtn/primaryBtn';
import {NavigationScreens} from '../../navigation/helper';
import {NAVIGATE_TO_SCREEN_B} from '../../utils/strings';
import styles from './styles';

const ScreenA: React.FC = () => {
  const navigation = useNavigation();
  function onClickBtn() {
    navigation.navigate(NavigationScreens.ScreenB, {});
  }

  return (
    <View style={styles.container}>
      <PrimaryBtn text={NAVIGATE_TO_SCREEN_B} onClick={onClickBtn} />
    </View>
  );
};

export default ScreenA;
