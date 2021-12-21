import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    button: {
        height: 48,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    title: {
        fontSize: 14,
        fontFamily: FONTS.BOLD
    },
    icon: {
        marginRight: 12
    }
})