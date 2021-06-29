import React from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/componentStyles/AccountInformation'
const AccountInformation = (props) => {
    return (
        <View style={styles.informationContainer}>

            <Text style={styles.informationText} >{props.Text}</Text>

            {/* <FontAwesome name="chevron-right" size={17} color="#fff" /> */}

        </View>
    )
}

export default AccountInformation
