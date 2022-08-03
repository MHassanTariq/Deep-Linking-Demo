import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import PrimaryBtn from '../../components/primaryBtn/primaryBtn';
import {NavigationScreens} from '../../navigation/helper';
import {NAVIGATE_TO_SCREEN_LINKING_SCREEN} from '../../utils/strings';
import styles from './styles';

const ScreenC: React.FC = () => {
  const navigation = useNavigation();
  function onClickBtn() {
    navigation.navigate(NavigationScreens.LinkingScreen, {});
  }

  return (
    <View style={styles.container}>
      <PrimaryBtn
        text={NAVIGATE_TO_SCREEN_LINKING_SCREEN}
        onClick={onClickBtn}
      />
    </View>
  );
};

export default ScreenC;
