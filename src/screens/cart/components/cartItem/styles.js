import {StyleSheet} from 'react-native';
import {colors, fontMaker, hScale, vScale} from '~theme';

const CartItemStyles = StyleSheet.create({
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
    paddingHorizontal: hScale(4),
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vScale(10),
  },
  cartBtnLabel: {
    ...fontMaker({color: colors.white, align: 'center'}),
  },
  info: {
    marginLeft: hScale(15),
    width: '55%',
  },
  centerContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyContainer: {
    marginVertical: vScale(5),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtns: {
    backgroundColor: colors.black,
    marginHorizontal: hScale(10),
    height: vScale(30),
    width: vScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vScale(10),
  },
});

export {CartItemStyles};
