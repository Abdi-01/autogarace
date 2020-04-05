import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, CardItem, Thumbnail } from 'native-base'
import { Icon } from 'react-native-elements'

export default ({ category, spec }) => {
    return (
        <View style={{ alignItems: "center", width: "33.3%", marginVertical: 1 }}>
            <Card style={{ width: 120 }}>
                <CardItem>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}>{category}</Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 19, paddingHorizontal: 10, fontWeight: 'bold', marginTop: -20 }}>{spec}</Text>
                </CardItem>
            </Card>
        </View>
    )
}