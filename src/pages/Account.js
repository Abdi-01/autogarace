import React from 'react';
import { View, Text, Image, ImageBackground,ScrollView } from 'react-native'
import { Avatar, Header, ListItem } from 'react-native-elements';
class Account extends React.Component {
    state = {
        list: [
            {
                title: 'Service Progress',
                icon: 'av-timer'
            }
            , {
                title: 'Change Profile',
                icon: 'flight-takeoff'
            }
            , {
                title: 'Settings',
                icon: 'flight-takeoff'
            }
            , {
                title: 'Trips',
                icon: 'flight-takeoff'
            }
        ]
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
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
                <ImageBackground source={{ uri: 'https://img4.goodfon.com/wallpaper/nbig/a/45/ralli-moto-dakar-dakar-sport-rally-skorost-pesok-gonshchik-m.jpg' }}
                    style={{ width: '100%', height: 250, marginTop: -14, justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100%' }}>
                        <Avatar
                            containerStyle={{ alignSelf: 'center', marginTop: "5%" }}
                            rounded
                            size={100}
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                            showEditButton
                        />
                        <Text style={{ fontSize: 35, marginTop: 10, alignSelf: 'center', color: 'white' }}>Bryan</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, alignSelf: 'center', color: 'white' }}>Kalibata City  - Jakarta Selatan</Text>
                    </View>
                </ImageBackground>
                {
                    this.state.list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{ name: item.icon, size: 60 }}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

export default Account;