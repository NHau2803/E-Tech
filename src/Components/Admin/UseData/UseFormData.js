import { useEffect, useState } from "react"
import {
    INITIAL_VALUES_DEFAULT,
    TYPE_PRODUCT,
    INITIAL_VALUES_LAPTOP_DEFAULT,
    DATA_POST_LAPTOP,
    DATA_POST_HARD_DRIVE,
    INITIAL_VALUES_HARD_DRIVE_DEFAULT,
    SPEC_VALUE_LAPTOP_CPU
} from "Constants/Data"
import GetOptionsAPI from "API/GetOptions"
import LaptopAPI from "API/Laptop"
import { useHistory } from "react-router"
const useFormData = (isAddMode, type, productId) => {
    const history = useHistory()
    const redirectNotFound = () => history.push("/not-found")
    const [info, setInfo] = useState(
        isAddMode ? INITIAL_VALUES_DEFAULT.info : []
    )
    const [spec, setSpec] = useState([])
    const [image, setImage] = useState(
        isAddMode ? INITIAL_VALUES_DEFAULT.image : []
    )
    const [listOptions, setListOptions] = useState([])
    const [reLoadInitialValue, setReLoadInitialValue] = useState(false)
    const [notify, setNotify] = useState({
        isOpen: false,
        title: "Thông báo",
        message: "Thêm thành công",
        type: "info"
    })

    //const [errors, setErrors] = useState({})
    // const [notify, setNotify] = useState({
    //     isOpen: false,
    //     message: "",
    //     type: ""
    // })
    // const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (isAddMode) {
            console.log("add mode!")
            // GetOptionsAPI.get()
            //     .then(res => setListOptions(res))
            //     .catch(err => setListOptions([ cpus: SPEC_VALUE_LAPTOP_CPU ]))
            setSpec(INITIAL_VALUES_LAPTOP_DEFAULT)
            setReLoadInitialValue(true)
        } else {
            if (!isNaN(productId)) {
                switch (type) {
                    case TYPE_PRODUCT.LAPTOP:
                        // LaptopAPI.getForUpdate(productId).then(res => {
                        //     console.log(res)

                        // })
                        setInfo(DATA_POST_LAPTOP.info)
                        setImage(DATA_POST_LAPTOP.image)
                        setSpec(DATA_POST_LAPTOP.spec)

                        break
                    case TYPE_PRODUCT.HARD_DRIVE:
                        setInfo(DATA_POST_HARD_DRIVE.info)
                        setImage(DATA_POST_HARD_DRIVE.image)
                        setSpec(DATA_POST_HARD_DRIVE.spec)
                        break
                    default:
                        break
                }
                setReLoadInitialValue(true)
            } else {
                redirectNotFound()
            }
        }
    }, [])

    const handleInputChange = e => {
        // console.log("🚀 ~ file: UseFormData.js ~ line 102 ~ useFormData ~ e", e)

        e.forEach(element => {
            if (element.touched) {
                const name = element.name[0]
                const value = element.value
                if (name in info) {
                    setInfo({ ...info, [name]: value })
                }
                if (name in spec) {
                    setSpec({ ...spec, [name]: value })
                }
                if (name in image) {
                    setImage({ ...image, [name]: value })
                }
            }
        })
    }

    const changeInitialValueSpec = () => {
        if (isAddMode && info !== undefined) {
            switch (info.type_id) {
                case 2:
                    setSpec(INITIAL_VALUES_LAPTOP_DEFAULT)

                    break
                case 3:
                    setSpec(INITIAL_VALUES_HARD_DRIVE_DEFAULT)
                    break
                default:
                    break
            }
        }
    }

    // const onReset = () => {
    //     setValues(INITIAL_VALUES_DEFAULT)
    //     setErrors({})
    // }

    return {
        listOptions,
        info,
        spec,
        image,
        notify,
        setNotify,
        reLoadInitialValue,
        setReLoadInitialValue,
        handleInputChange,
        changeInitialValueSpec
    }
}
export default useFormData
