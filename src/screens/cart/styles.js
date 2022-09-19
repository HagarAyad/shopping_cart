import {StyleSheet} from 'react-native';
import {colors, fontMaker} from '~theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
  },
  price: {
    ...fontMaker({fontSize: 20, align: 'center'}),
  },
  listContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
