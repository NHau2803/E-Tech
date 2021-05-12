const { getOptionsLocalStorage } = require("./Converter")

export const emptyItemInLocalStorage = name => {
    try {
        return Object.keys(getOptionsLocalStorage(name)).length === 0
    } catch (error) {
        return true
    }
}
