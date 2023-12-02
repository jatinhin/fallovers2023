import { ADD_TO_CART } from '../Constants/constants'

export default function cardItems(state = [], action) { console.log(action,'sssss----')
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}
