import React from 'react';
import { View, Image, Text, FlatList } from 'react-native'
import { Card, CardItem, List, ListItem, Left, Body, Item } from 'native-base';
import { Header } from 'react-native-elements'
import CardSpec from '../components/CardSpec'
class Cart extends React.Component {
    state = {
        data: [
            {
                id: "mobil1",
                name: "Mustang Shelby",
                image: "https://i.dlpng.com/static/png/6896354_preview.png",
                mesin: "V8",
                tenaga: "700 hp",
                transmision: 'Manual'
            },
            {
                id: "mobil2",
                name: "Nissan GTR",
                image: "http://www.pngmart.com/files/4/Nissan-GT-R-PNG-Transparent.png",
                mesin: "V6",
                tenaga: "565 hp",
                transmision: 'Manual'
            },
            {
                id: "mobil3",
                name: 'Tesla',
                image: "https://pngimg.com/uploads/tesla_car/tesla_car_PNG46.png",
                mesin: "75D",
                tenaga: "259 hp",
                transmision: 'Auto'
            }
        ]
    }
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Header
                    centerComponent={<Image source={require('../image/autogaraceName.png')} style={{ width: "80%", height: "60%" }} />}
                    leftComponent={{
                        icon: 'arrow-back',
                        color: 'white'
                    }}
                    containerStyle={{
                        borderBottomStartRadius: 20,
                        borderBottomEndRadius: 20,
                        backgroundColor: '#F2962C',
                        justifyContent: 'space-around',
                        elevation: 3,
                        marginTop: Platform.OS === 'ios' ? 0 : -25
                    }}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: 5, borderRadius: 40 }}>
                            <Card style={{ width: 400, flex: 1, alignSelf: "center", alignItems: "center", borderRadius: 10 }}>
                                <CardItem cardBody>
                                    <Image source={{ uri: item.image }} style={{ height: 200, width: 400, marginVertical: 60 }} />
                                </CardItem>
                                <CardItem>
                                    <Text style={{ fontSize: 25, color: '#075080', fontWeight: 'bold' }}>{item.name}</Text>
                                </CardItem>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#075080', opacity: 0.6 }}>SPESIFICATIONS</Text>
                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, width: "100%" }}>
                                    <CardSpec category="ENGINE" spec={item.mesin} />
                                    <CardSpec category="POWER" spec={item.tenaga} />
                                    <CardSpec category="GEARBOX" spec={item.transmision} />
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#075080', opacity: 0.6, marginTop: 10 }}>SERVICE</Text>
                                <CardItem>
                                    <Card style={{ flex: 1}}>
                                        <CardItem style={{backgroundColor: "#075080"}}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>ON PROGRESS</Text>
                                        </CardItem>
                                        <CardItem style={{ backgroundColor: "#075080" }}>
                                            <Text style={{ fontSize: 19, color:"#F2962C",paddingHorizontal: 10, fontWeight: 'bold', marginTop: -20 }}>GENERAL SERVICE</Text>
                                        </CardItem>
                                    </Card>
                                </CardItem>
                            </Card>
                        </View>
                    }
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    style={{ width: "95%", height: "92%", marginTop: 5 }}
                />
            </View>
        );
    }
}

export default Cart;