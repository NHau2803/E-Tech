const { getLS, setLS } = require("./Converter")

export const emptyItemInLocalStorage = name => {
    try {
        return Object.keys(getLS(name)).length === 0
    } catch (error) {
        return true
    }
}

export const getTotalPriceOfCartInLocalStorage = () => {
    const carts = getLS("carts")
    let totalPrice = 0
    // let countItem = 0
    carts.map(item => {
        totalPrice += item.price
    })
    return totalPrice
}
export const getQtyOfCartInLocalStorage = () => {
    const carts = getLS("carts")
    return carts.length
}

export const handleSaveCartItem = cartItem => {
    let carts = getLS("carts")
    if (
        !carts.some(item => {
            return item.id === cartItem.id
        })
    ) {
        carts.push(cartItem)
        setLS("carts", carts)
        const reloadCarts = getLS("reloadCarts")
        setLS("reloadCarts", !reloadCarts)
    }
    return true
}

export const removeCacheLocalStorage = name => {
    return window.localStorage.removeItem(name)
}
