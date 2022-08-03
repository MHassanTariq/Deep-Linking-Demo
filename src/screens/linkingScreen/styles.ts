import {StyleSheet} from 'react-native';
import appStyles from '../../utils/appStyles';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    ...appStyles.container,
  },
  btnMargins: {
    marginTop: 10,
  },
});

export default styles;
