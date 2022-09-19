import {StyleSheet} from 'react-native';
import {colors, fontMaker, hScale, vScale} from '~theme';

const productItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    elevation: 1,
  },
  img: {
    height: 60,
    width: 60,
  },
  cartBtn: {
    marginTop: vScale(5),
    paddingVertical: vScale(5),
    backgroundColor: colors.black,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vScale(10),
  },
  cartBtnLabel: {
    ...fontMaker({color: colors.white, align: 'center'}),
  },
  info: {
    marginLeft: hScale(15),
    width: '100%',
  },
});

export {productItemStyles};
