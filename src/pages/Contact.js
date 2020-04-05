import React from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
class Contact extends React.Component {
    state = {}
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

export default Contact;