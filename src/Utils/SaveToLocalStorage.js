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
// import { setOptionsLocalStorage } from "./Converter"

// const saveToLocalStorage = res => {
//     const isSaveDone = window.localStorage.getItem("isSaveDone")
//     console.log(
//         "🚀 ~ file: saveToLocalStorage.js ~ line 33 ~ isSaveDone",
//         typeof isSaveDone
//     )
//     setOptionsLocalStorage("product_type", res.type)

//     // setOptionsLocalStorage("product_type", res.laptop)
//     // setOptionsLocalStorage("gpus", res.gpus)

//     // if (isSaveDone === "false" || isSaveDone === undefined) {
//     console.log(
//         "🚀 ~ file: SaveToLocalStorage.js ~ line 39 ~ saveToLocalStorage ~ res",
//         res
//     )
//     //     GetOptionsAPI.getOptions()
//     //         .then(res => {
//     //             console.log(res)
//     //             // setOptionsLocalStorage("gpus", res.gpus)
//     //             // setOptionsLocalStorage("cpus", res.cpus)
//     //             // setOptionsLocalStorage("rams", res.rams)
//     //             // setOptionsLocalStorage("roms", res.roms)
//     //             // setOptionsLocalStorage("screens", res.screens)
//     //             // setOptionsLocalStorage("ports", res.ports)
//     //             // setOptionsLocalStorage("batteries", res.batteries)
//     //             // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_WEIGHT", res.weights)
//     //             // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_SIZE", res.sizes)
//     //             // setOptionsLocalStorage("SPEC_VALUE_LAPTOP_OS", res.os)
//     //             // window.localStorage.setItem("isSaveDone", "true")
//     //         })
//     //         .catch(err => console.error(err))
//     // }
// }

// export default saveToLocalStorage
