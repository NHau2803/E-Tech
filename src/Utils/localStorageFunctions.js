const {
    getOptionsLocalStorage,
    setOptionsLocalStorage
} = require("./Converter")

export const emptyItemInLocalStorage = name => {
    try {
        return Object.keys(getOptionsLocalStorage(name)).length === 0
    } catch (error) {
        return true
    }
}

export const getTotalPriceOfCartInLocalStorage = () => {
    const carts = getOptionsLocalStorage("carts")
    let totalPrice = 0
    // let countItem = 0
    carts.map(item => {
        totalPrice += item.price
    })
    return totalPrice
}
export const getQtyOfCartInLocalStorage = () => {
    const carts = getOptionsLocalStorage("carts")
    return carts.length
}

export const handleSaveCartItem = cartItem => {
    let carts = getOptionsLocalStorage("carts")
    if (
        !carts.some(item => {
            return item.id === cartItem.id
        })
    ) {
        carts.push(cartItem)
        setOptionsLocalStorage("carts", carts)
        const reloadCarts = getOptionsLocalStorage("reloadCarts")
        setOptionsLocalStorage("reloadCarts", !reloadCarts)
    }
    return true
}

export const removeCacheLocalStorage = name => {
    return window.localStorage.removeItem(name)
}
