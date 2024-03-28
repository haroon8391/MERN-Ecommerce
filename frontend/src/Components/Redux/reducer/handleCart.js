const initialState = {
    cartItems: [],
}

const handleCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            const itemExist = state.cartItems.find((item) => {
                return item.id === action.payload.id;
            })
            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload, quantity: 1 }
                    ]
                }
            }

        case "REMOVE":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) =>
                    item.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default handleCart;