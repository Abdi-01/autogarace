import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements'
import {StackActions} from '@react-navigation/native'
import { connect } from 'react-redux'
import { onInputForm, onUserKeepLogin, onUserLogin } from '../actions'

class Login extends React.Component {
    state = {}

    componentDidUpdate() {
        if(this.props.user.username){
            console.log('cek user',this.props.user.username)
            this.props.navigation.dispatch(StackActions.replace('TabNav'))
            // this.props.navigation.navigate('TabNav')
        }
    }

    componentDidMount() {
        this.props.onUserKeepLogin()
    }

    onBtLogin = () => {
        this.props.onUserLogin(this.props.login)
    }

    render() {
        if (this.props.user.authChecked && !this.props.user.username) {
            return (
                <View style={styles.containerStyle}>
                    <Image source={require('../image/autogarace.png')} style={{ width: "35%", height: "18%" }} />
                    {/* <Text h3 style={{ color: '#F2962C' }}>AUTOGARACE</Text> */}
                    <View style={styles.inputContainerStyle}>
                        <Input placeholder="Username"
                            placeholderTextColor="#075080"
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    type='feather'
                                    color="#075080"
                                />
                            }
                            value={this.props.login.username}
                            onChangeText={(val) => this.props.onInputForm('username', val)}
                        />
                        <Text style={{ color: 'red' }}></Text>
                        <Button
                            title="Enter"
                            titleStyle={{ color: "#F2962C" }}
                            containerStyle={{ width: '100%', marginTop: 20 }}
                            buttonStyle={{ backgroundColor: "#075080" }}
                            onPress={this.onBtLogin}
                            loading={this.props.login.loading}
                        />
                    </View>
                </View>
            );
        }
        // else {
            return (
                <View style={styles.containerSplash}>
                    <Image source={require('../image/autogarace.png')} style={{ width: "35%", height: "18%" }} />
                </View>
            )
        // }
    }
}

const styles = StyleSheet.create({
    containerSplash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2962C'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2962C'
    },
    inputContainerStyle: {
        marginTop: 30,
        marginBottom: 100,
        width: '70%'
    }
})

const mapStateToProps = ({ login, user }) => {
    return { user, login }
}

export default connect(mapStateToProps, { onInputForm, onUserKeepLogin, onUserLogin })(Login);