const INITIAL_STATE = {
    autoChecked: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS":
            return { ...action.payload, autoChecked: true }
        case "USER_LOGIN_FAIL":
            return { autoChecked: true }
        default:
            return state
    }
}