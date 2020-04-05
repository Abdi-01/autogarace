import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, CardItem, Thumbnail } from 'native-base'
import { Icon } from 'react-native-elements'

export default ({ icons, types, names }) => {
    return (
        <View style={{ alignItems: "center", width: "33.3%", marginVertical: 1 }}>
            <Card style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                <CardItem>
                    <Thumbnail source={icons}/>
                </CardItem>
                <CardItem>
                    <Text style={{ fontSize: 13 }}>{names}</Text>
                </CardItem>
            </Card>
        </View>
    )
}