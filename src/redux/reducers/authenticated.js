import { USER_AUTHENTICATED_LOGIN } from '../reducersKeys'
const initialState = { userData: null, token: null }
export default function reducer(state = initialState, action) {

    console.log(action.type,'action.type')
    switch (action.type) {
        case USER_AUTHENTICATED_LOGIN: {    
            return { ...state, userData: action.payload }
        }

        default:
            return { ...state }
    }

}