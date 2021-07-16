import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const styles = StyleSheet.create({

    insideBlock: {
        backgroundColor: '#363841',
        width: wp('90%'),
        alignItems: 'center',
        height: hp('33%'),
        borderRadius: 12,
        justifyContent: 'space-evenly'
    },
    TextName: {
        color: '#fff',
        fontSize: hp('2%'),
        left: wp('2%')
    },
    Heading: {
        flexDirection: 'row',
        padding: wp('3%'),
        alignItems: 'center'
    },

    priceFix: {
        flexDirection: 'row',
        top: hp('1%')
    },
    TextPrice: {
        color: '#fff',
        fontWeight: '800',
        fontSize: hp('5%'),
        left: wp('2%')
    },
    RuppeeIcon: {
        top: hp('1%'),
        fontWeight: '800'
    },
    TextMonth: {
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: '600',
        top: hp('2%')
    }
    , detailAds: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    InfoText: {
        right: wp('5%'),
        fontSize: hp('2.2%'),
        letterSpacing: 0.36,
        color: '#B4B4B4'
    },
    InfoDetail: {
        textAlign: 'right',
        left: wp('13%'),
        fontSize: hp('1.8%'),
        color: '#fff',
        fontWeight: '600'
    },
    AddDetail: {
        padding: wp('2%')
    },
    plans: {
        alignItems: 'center',
        borderRadius: 200 / 2,
        width: wp('30%'),
        left: wp('32%'),
        top: 40,
        backgroundColor: '#363841',
        borderColor: '#fff',
        height: 80,
},
    PlansText: {
        top: wp('2%'),
        fontSize: hp('2%'),
        color: '#fff',
        fontWeight: '700'
    },
    InfoDetailTwo: {
        right: wp('13%'),
        color: '#fff',
        fontWeight: '600',
        fontSize:hp('1.9%')
    },
  
    ButtonText: {
        color: '#fff',
        fontWeight: '700',
        right: wp('2%')

    },
    Button: {
        padding: wp('2%')
    }


})








export default styles