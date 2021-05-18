export const getOptionsLocalStorage = name => {
    return JSON.parse(window.localStorage.getItem(name))
}

export const setOptionsLocalStorage = (name, data) => {
    return window.localStorage.setItem(name, JSON.stringify(data))
}

export const changePriceToVND = price => {
    return price.toLocaleString("it-IT", { style: "currency", currency: "VND" })
}
