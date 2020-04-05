import React from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import CardPromo from '../components/CardPromo'

class Promo extends React.Component {
    state = {
        promo: [
            {
                id: "promo1",
                image: "https://www.honda-indonesia.com/uploads/images/news/USTamqwWoHZ6wWtz4MVL_honda_id_50000_km.png",
                name: "Service Honda",
                detail: "5000 Km pertama"
            },
            {
                id: "promo2",
                image: "https://www.mtf.co.id/media/image/thumbs/post/2019/03/06/20190306-promo-mandiri-k-1110-395_thumb.png",
                name: "Toyota Mandiri",
                detail: "Promo mudik asik"
            },
            {
                id: "promo3",
                image: "https://auto2000surabaya.id/wp-content/uploads/2017/05/Promo-Servis-Toyota-Bengkel-Auto2000-Jemursari-Surabaya-1.jpg",
                name: "Astra",
                detail: "Promo service langganan"
            }
        ]
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
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
                    data={this.state.promo}
                    renderItem={({ item }) =>
                        <CardPromo images={item.image} promo={item.name} detail={item.detail} />
                    }
                    keyExtractor={item => item.id}
                    style={{ flex: 1, marginTop: 5 }}
                />
            </View>
        );
    }
}

export default Promo;