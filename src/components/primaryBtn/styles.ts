import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';
import {PRIMARY_COLOR} from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    ...appStyles.btnBorderRadius,
    ...appStyles.paddingVerticalBtn,
    ...appStyles.centerChildren,
    backgroundColor: PRIMARY_COLOR,
  },
});

export default styles;
