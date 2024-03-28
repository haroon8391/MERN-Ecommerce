export const addCart = (product) => {
    return {
        type: "ADD",
        payload: product
    }
}

export const removeCart = (product) => {
    return {
        type: "REMOVE",
        payload: product
    }
}