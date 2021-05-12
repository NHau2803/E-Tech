// import axiosClient from "API/ClientAxios"
// import GetOptionsAPI from "API/GetOptions"
// import {
//     BRAND_HARD_DRIVE,
//     BRAND_LAPTOP,
//     SPEC_VALUE_HARD_DRIVE_CACHE,
//     SPEC_VALUE_HARD_DRIVE_CAPACITY,
//     SPEC_VALUE_HARD_DRIVE_CONNECT,
//     SPEC_VALUE_HARD_DRIVE_DIMENSION,
//     SPEC_VALUE_HARD_DRIVE_READ_SPEED,
//     SPEC_VALUE_HARD_DRIVE_RECORD_SPEED,
//     SPEC_VALUE_HARD_DRIVE_ROTATION_SPEED,
//     SPEC_VALUE_HARD_DRIVE_TYPE,
//     SPEC_VALUE_LAPTOP_BATTERY,
//     SPEC_VALUE_LAPTOP_CPU,
//     SPEC_VALUE_LAPTOP_GPU,
//     SPEC_VALUE_LAPTOP_OS,
//     SPEC_VALUE_LAPTOP_PORT,
//     SPEC_VALUE_LAPTOP_RAM,
//     SPEC_VALUE_LAPTOP_ROM,
//     SPEC_VALUE_LAPTOP_SCREEN,
//     SPEC_VALUE_LAPTOP_SIZE,
//     SPEC_VALUE_LAPTOP_WEIGHT,
//     TYPE_PRODUCT_RENDER
// } from "Constants/Data"
// import { useState } from "react"
// import { setOptionsLocalStorage } from "./Converter"

// const saveOptionsFromAPI = props => {
//     const isSaveOptionsFromAPI = window.localStorage.getItem(
//         "isSaveOptionsFromAPI"
//     )
//     console.log(
//         "🚀 ~ file: SaveToLocalStorage.js ~ line 33 ~ isSaveOptionsFromAPI",
//         typeof isSaveOptionsFromAPI
//     )
//     if (
//         isSaveOptionsFromAPI === "false" ||
//         isSaveOptionsFromAPI === undefined
//     ) {
//         GetOptionsAPI.get()
//             .then(res => {
//                 console.log(res)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_CPU", res.gpus)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_CPU", res.cpus)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_RAM", res.rams)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_ROM", res.roms)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_SCREEN", res.screens)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_PORT", res.ports)
//                 setOptionsLocalStorage(
//                     "SPEC_VALUE_LAPTOP_BATTERY",
//                     res.batteries
//                 )
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_WEIGHT", res.weights)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_SIZE", res.sizes)
//                 setOptionsLocalStorage("SPEC_VALUE_LAPTOP_OS", res.os)
//                 window.localStorage.setItem("isSaveOptionsFromAPI", "true")
//             })
//             .catch(err => console.error(err))
//     }

//     setOptionsLocalStorage("TYPE_PRODUCT_RENDER", TYPE_PRODUCT_RENDER)
//     setOptionsLocalStorage("BRAND_LAPTOP", BRAND_LAPTOP)
//     setOptionsLocalStorage("BRAND_HARD_DRIVE", BRAND_HARD_DRIVE)
//     //
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_CPU", SPEC_VALUE_LAPTOP_CPU)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_RAM", SPEC_VALUE_LAPTOP_RAM)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_ROM", SPEC_VALUE_LAPTOP_ROM)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_GPU", SPEC_VALUE_LAPTOP_GPU)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_SCREEN", SPEC_VALUE_LAPTOP_SCREEN)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_PORT", SPEC_VALUE_LAPTOP_PORT)
//     // setOptionsLocalStorage(
//     //     "SPEC_VALUE_LAPTOP_BATTERY",
//     //     SPEC_VALUE_LAPTOP_BATTERY
//     // )
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_WEIGHT", SPEC_VALUE_LAPTOP_WEIGHT)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_SIZE", SPEC_VALUE_LAPTOP_SIZE)
//     // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_OS", SPEC_VALUE_LAPTOP_OS)
//     //
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_TYPE",
//         SPEC_VALUE_HARD_DRIVE_TYPE
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_CAPACITY",
//         SPEC_VALUE_HARD_DRIVE_CAPACITY
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_CONNECT",
//         SPEC_VALUE_HARD_DRIVE_CONNECT
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_DIMENSION",
//         SPEC_VALUE_HARD_DRIVE_DIMENSION
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_READ_SPEED",
//         SPEC_VALUE_HARD_DRIVE_READ_SPEED
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_RECORD_SPEED",
//         SPEC_VALUE_HARD_DRIVE_RECORD_SPEED
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_ROTATION_SPEED",
//         SPEC_VALUE_HARD_DRIVE_ROTATION_SPEED
//     )
//     setOptionsLocalStorage(
//         "SPEC_VALUE_HARD_DRIVE_CACHE",
//         SPEC_VALUE_HARD_DRIVE_CACHE
//     )
// }

// export default saveOptionsFromAPI
