import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, CardItem, Right } from 'native-base'
import { Button } from 'react-native-elements'

export default ({ images, promo, detail }) => {
    return (
        <View style={{ alignItems: "center", marginVertical: 1,marginHorizontal:5 }}>
            <Card style={{ width: "100%" }}>
                <CardItem>
                    <Image source={{ uri: images }} style={{width:400,height:200}}/>
                </CardItem>
                <CardItem>
                    <Text style={{ fontSize: 25,fontWeight:'bold' }}>{promo}</Text>
                </CardItem>
                {/* <Right> */}
                    <Button title="Pakai" buttonStyle={{ backgroundColor: '#000080', color: 'white' }} />
                {/* </Right> */}
            </Card>
        </View>
    )
}