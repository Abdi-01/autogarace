import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, CardItem, Right, Left } from 'native-base'
import { Button, Icon } from 'react-native-elements'

export default ({ images, promo, detail }) => {
    return (
        <View style={{ alignItems: "center", marginVertical: 1, marginHorizontal: 5 }}>
            <Card style={{ width: "100%" }}>
                <CardItem>
                    <Image source={{ uri: images }} style={{ width: 400, height: 200 }} />
                </CardItem>
                <CardItem>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{promo}</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: "#075080" }}>
                    <Left>
                        <Icon type='material-community' size={20} name="calendar-clock" color="white" />
                        <Text style={{ color: "white", fontSize: 15 }}> 01 Mei 2020</Text>
                    </Left>
                    <Right>
                        <Button title="Used" buttonStyle={{ backgroundColor: '#F2962C' }} titleStyle={{ color: '#075080'}} />
                    </Right>
                </CardItem>
            </Card>
        </View>
    )
}