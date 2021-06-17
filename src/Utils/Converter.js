export const getLS = name => {
    return JSON.parse(window.localStorage.getItem(name))
}

export const setLS = (name, data) => {
    return window.localStorage.setItem(name, JSON.stringify(data))
}

export const changePriceToVND = price => {
    return (
        price &&
        price.toLocaleString("it-IT", { style: "currency", currency: "VND" })
    )
}
