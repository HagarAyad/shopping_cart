import {StyleSheet} from 'react-native';
import {colors, hScale, vScale} from '~theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numOfProducts: {
    backgroundColor: colors.green,
    marginRight: hScale(4),
    height: vScale(20),
    width: vScale(20),
    borderRadius: vScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
