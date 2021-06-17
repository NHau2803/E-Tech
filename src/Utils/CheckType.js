import { TYPE_DRIVE } from "Constants/Data"

//update function  : https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php

// export const checkDiveType = type_id => {
//     if (type_id === 1 || type_id === 3) {
//         return TYPE_DRIVE.IS_HHD
//     }
//     return TYPE_DRIVE.IS_SSD
// }

export const isEmpty = obj => {
    if (obj) {
        return Object.keys(obj).length === 0
    }
    return false
}

// export const checkNumber = val => {
//     if (typeof Number(val) === "number") {
//         console.log(
//             "🚀 ~ file: CheckType.js ~ line 14 ~ typeof Number(val)",
//             typeof Number(val)
//         )

//         return true
//     }
//     return false
// }
