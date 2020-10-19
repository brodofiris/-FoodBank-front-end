import {DefaultTheme} from '@react-navigation/native'
import DefStyles from '../config/DefStyles'

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: DefStyles.colors.back,
        primary: DefStyles.colors.mainPink,
    }

}