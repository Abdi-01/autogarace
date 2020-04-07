import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import { Avatar, Header, ListItem, Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { onUserLogout } from '../actions'
import { CommonActions } from '@react-navigation/native'
class Account extends React.Component {

    componentDidUpdate() {
        if (!this.props.user.username) {
            // this.props.navigation.navigate('Login')
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{
                    name: 'Login'
                }]
            })
            this.props.rootStackNavigation.dispatch(resetAction)
        }
    }

    state = {
        account: [
            {
                title: 'My Services',
                icon: 'av-timer'
            }
            , {
                title: 'Change Profile',
                icon: 'account-edit'
            }
            , {
                title: 'My Promo',
                icon: 'card-bulleted-outline'
            }
        ],
        about: [
            {
                title: 'Settings',
                icon: 'settings-outline'
            }
            , {
                title: 'Privacy and Police',
                icon: 'shield-account'
            }
            , {
                title: 'Terms of Service',
                icon: 'information-outline'
            }
        ]
    }
    render() {
        return (
            <View style={{ backgroundColor: '#E6E6E6', flex: 1 }}>
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
                        <Text style={{ fontSize: 35, marginTop: 10, alignSelf: 'center', color: 'white' }}>{this.props.user.username}</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, alignSelf: 'center', color: 'white' }}>Kalibata City  - Jakarta Selatan</Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <Card containerStyle={{ padding: 0, marginHorizontal: 0, marginTop: 5 }}>
                        <Text style={{ fontSize: 20, paddingStart: 22, paddingTop: 10, fontWeight: 'bold', color: "#075080" }}>Account</Text>
                        {
                            this.state.account.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    leftIcon={{ name: item.icon, size: 40, type: 'material-community', color: "#075080" }}
                                    bottomDivider
                                    chevron={{ size: 30 }}
                                />
                            ))
                        }
                    </Card>
                    <Card containerStyle={{ padding: 0, marginHorizontal: 0 }}>
                        <Text style={{ fontSize: 20, paddingStart: 22, paddingTop: 10, fontWeight: 'bold', color: "#075080" }}>About</Text>
                        {
                            this.state.about.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    leftIcon={{ name: item.icon, size: 40, type: 'material-community', color: "#075080" }}
                                    bottomDivider
                                    chevron={{ size: 30 }}
                                />
                            ))
                        }
                    </Card>
                    <Icon
                        type='material-community'
                        icon='logout-variant'
                        size={15}
                        color="white"
                    />
                    <Button
                        titleStyle={{ color: "#F2962C" }}

                        title='Logout'
                        containerStyle={{ width: '100%', marginTop: 20 }}
                        buttonStyle={{ backgroundColor: "#075080" }}
                        onPress={this.props.onUserLogout}
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { onUserLogout })(Account);