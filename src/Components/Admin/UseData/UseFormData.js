//----------------------THIS IS LIKE REDUX------------------------------------------
//----------------------I THINK SHOULD NOT FOLLOW, BUT SHOULD READING---------------

// import HardDriveAPI from "API/HardDrive"
// import LaptopAPI from "API/Laptop"
// import {
//     INITIAL_VALUES_DEFAULT,
//     INITIAL_VALUES_DRIVE_DEFAULT,
//     INITIAL_VALUES_LAPTOP_DEFAULT,
//     TYPE_PRODUCT
// } from "Constants/Data"
// import { useEffect, useState } from "react"
// import { useHistory } from "react-router"
// const useFormData = (isAddMode, type, productId) => {
//     const history = useHistory()
//     const redirectNotFound = () => history.push("/not-found")
//     const [info, setInfo] = useState(
//         isAddMode ? INITIAL_VALUES_DEFAULT.info : []
//     )
//     const [spec, setSpec] = useState([])
//     const [imageList, setImageList] = useState(
//         isAddMode ? INITIAL_VALUES_DEFAULT.images : []
//     )
//     const [listOptions, setListOptions] = useState([])
//     const [reLoadInitialValue, setReLoadInitialValue] = useState(false)
//     const [notify, setNotify] = useState({
//         isOpen: false,
//         title: "Thông báo",
//         message: "Thêm thành công",
//         type: "success"
//     })

//     useEffect(() => {
//         if (isAddMode) {
//             console.log("add mode!")
//             // GetOptionsAPI.getOptions("laptop").then(res => console.log(res))
//             // setListOptions([])
//             setSpec(INITIAL_VALUES_LAPTOP_DEFAULT)
//             setReLoadInitialValue(!reLoadInitialValue)
//         } else {
//             console.log("update mode!")
//             if (!isNaN(productId)) {
//                 switch (type) {
//                     case TYPE_PRODUCT.LAPTOP:
//                         LaptopAPI.getForUpdate(productId)
//                             .then(res => {
//                                 console.log(
//                                     "🚀 ~ file: UseFormData.js ~ line 45 ~ LaptopAPI.getForUpdate ~ res",
//                                     res
//                                 )
//                                 if (res) {
//                                     setInfo(res.info)
//                                     setImageList(res.images)
//                                     setSpec(res.spec_id)
//                                 }
//                             })
//                             .catch(err => {
//                                 redirectNotFound()
//                             })
//                         break
//                     case TYPE_PRODUCT.DRIVE:
//                         HardDriveAPI.getForUpdate(productId).then(res => {
//                             console.log(
//                                 "🚀 ~ file: UseFormData.js ~ line 45 ~ LaptopAPI.getForUpdate ~ res",
//                                 res
//                             )
//                             if (res) {
//                                 setInfo(res.info)
//                                 setImageList(res.images)
//                                 setSpec(res.spec_id)
//                             }
//                         })
//                         break
//                     default:
//                         break
//                 }
//                 setReLoadInitialValue(!reLoadInitialValue)
//             } else {
//                 redirectNotFound()
//             }
//         }
//     }, [])

//     const handleInputChange = e => {
//         // console.log("🚀 ~ file: UseFormData.js ~ line 72 ~ useFormData ~ e", e)

//         e.forEach(element => {
//             if (element.touched) {
//                 const name = element.name[0]
//                 const value = element.value
//                 if (name in info) {
//                     setInfo({ ...info, [name]: value })
//                 }
//                 if (name in spec) {
//                     setSpec({ ...spec, [name]: value })
//                 }
//                 if (name in imageList || !isAddMode) {
//                     console.log(
//                         "🚀 ~ file: UseFormData.js ~ line 85 ~ useFormData ~ name",
//                         name
//                     )
//                     imageList &&
//                         imageList.map(
//                             item => item.id === name && (item.img = value)
//                         )
//                     setImageList([...imageList], imageList)
//                 }
//             }
//         })
//     }

//     const changeInitialValueSpec = () => {
//         if (isAddMode && info !== undefined) {
//             switch (info.type_id) {
//                 case 1:
//                     setSpec(INITIAL_VALUES_LAPTOP_DEFAULT)

//                     break
//                 case 2:
//                     setSpec(INITIAL_VALUES_DRIVE_DEFAULT)
//                     break
//                 default:
//                     break
//             }
//         }
//     }

//     const handleChooseIdSSD = () => {
//         setSpec({ ...((spec.rotation_id = 4), (spec.cache_id = 3)) })
//     }

//     // const onReset = () => {
//     //     setValues(INITIAL_VALUES_DEFAULT)
//     //     setErrors({})
//     // }

//     return {
//         listOptions,
//         info,
//         spec,
//         imageList,
//         notify,
//         setNotify,
//         reLoadInitialValue,
//         setReLoadInitialValue,
//         handleInputChange,
//         changeInitialValueSpec,
//         handleChooseIdSSD
//     }
// }
// export default useFormData
