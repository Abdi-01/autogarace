import React from 'react';
import { View, Image, FlatList, Platform } from 'react-native'
import { Card, CardItem, Text } from 'native-base';
import { Header } from 'react-native-elements'
import { connect } from 'react-redux'
import CardMenu from '../components/CardMenu'


class Home extends React.Component {
    state = {
        data: [
            {
                name: "promo1",
                image: "https://carfix.co.id/wp-content/uploads/2020/01/Rilis-Website-1.jpg"
            },
            {
                name: "promo2",
                image: "https://s.garasi.id/q99/promotion/d3457429-11ab-4472-ae88-3cc90fed8452.jpeg"
            },
            {
                name: "promo3",
                image: "https://otoplasa.com/wp-content/uploads/2017/06/HRK-Lebaran.jpg"
            },
            {
                name: "promo4",
                image: "https://saleshondabanyuwangi.files.wordpress.com/2017/05/wp-1494568268421.jpg"
            }
        ]
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Header
                    rightComponent={{
                        text: "Hi, "+this.props.user.username,
                        style: { color: '#075080', fontSize: 15, paddingHorizontal: 5, borderRadius:30,textAlignVertical:'center', height: "100%" }
                    }}
                    centerComponent={<Image source={require('../image/autogaraceName.png')} style={{ width: "80%", height: "60%" }} />}
                    leftComponent={<Image source={{ uri: "https://www.kindpng.com/picc/m/35-355849_mazda-cx-5-maxx-sport-2017-hd-png.png" }} style={{ width: 35, height: 35, borderRadius: 25 }} />}
                    containerStyle={{
                        borderBottomStartRadius: 20,
                        borderBottomEndRadius: 20,
                        backgroundColor: '#F2962C',
                        justifyContent: 'space-around',
                        elevation: 3,
                        marginTop: Platform.OS === 'ios' ? 0 : -25
                    }}
                />
                <View style={{ alignItems: 'center', marginHorizontal: 5, marginTop: 8 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View>
                                <Card style={{ borderRadius: 20 }}>
                                    <CardItem cardBody>
                                        <Image source={{ uri: item.image }} style={{ height: 200, width: 300, borderRadius: 20 }} />
                                    </CardItem>
                                </Card>
                            </View>
                        }
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.name}
                        horizontal={true}
                    >
                    </FlatList>
                </View>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 15, color: '#000080' }}>Apa yang mobil anda perlukan ?</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, marginTop: 10, width: "100%" }}>
                    <CardMenu icons={require('../image/iconmenu/customservice.png')} names={'General Service'} />
                    <CardMenu icons={require('../image/iconmenu/caroil.png')} names={'Oil Service'} />
                    <CardMenu icons={require('../image/iconmenu/tires.png')} names={'Tire Service'} />
                    <CardMenu icons={require('../image/iconmenu/breakservice.png')} names={'Breaker Service'} />
                    <CardMenu icons={require('../image/iconmenu/ac.png')} names={'AC Service'} />
                    <CardMenu icons={require('../image/iconmenu/engine.png')} names={'Engine Service'} />
                    <CardMenu icons={require('../image/iconmenu/carcare.png')} names={'Care Service'} />
                    <CardMenu icons={require('../image/iconmenu/bodyrepair.png')} names={'Body Repair'} />
                    <CardMenu icons={require('../image/iconmenu/customservice.png')} names={'Custom Service'} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps)(Home);