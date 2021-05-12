import { SPEC_VALUE_HARD_DRIVE_TYPE, TYPE_HARD_DRIVE } from "Constants/Data"

//update function  : https://www.tutorialrepublic.com/faq/how-to-check-if-an-array-includes-an-object-in-javascript.php

export const checkHardDiveType = hard_drive_type_id => {
    if (hard_drive_type_id === 1 || hard_drive_type_id === 3) {
        return TYPE_HARD_DRIVE.IS_HHD
    }
    return TYPE_HARD_DRIVE.IS_SSD
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
