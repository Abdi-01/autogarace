import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const onInputForm = (prop, value) => {
    return {
        type: "INPUT_FORM",
        payload: { prop, value }
    }
}

export const onUserLogin = ({ username }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "LOADING" })

            await AsyncStorage.setItem('username', username)
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: { username }
            })
        }
        catch (err) {
            dispatch({
                type: "USER_LOGIN_FAIL",
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}

export const onUserKeepLogin = () => {
    return async (dispatch) => {
        try {
            const username = await AsyncStorage.getItem('username')
            if (!username) {
                return dispatch({ type: "USER_LOGIN_FAIL" })
            }
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: { username }
            })
        } catch (err) {
            dispatch({ type: "USER_LOGIN_FAIL" })
        }
    }
}