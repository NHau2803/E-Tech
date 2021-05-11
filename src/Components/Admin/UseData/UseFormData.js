import { useEffect, useState } from "react"
import {
    INITIAL_VALUES_DEFAULT,
    TYPE_PRODUCT,
    INITIAL_VALUES_LAPTOP_DEFAULT,
    DATA_POST_LAPTOP,
    DATA_POST_HARD_DRIVE,
    INITIAL_VALUES_HARD_DRIVE_DEFAULT
} from "Constants/Data"
const useFormData = (isAddMode, type, productId) => {
    const [info, setInfo] = useState(
        isAddMode ? INITIAL_VALUES_DEFAULT.info : []
    )
    const [spec, setSpec] = useState([])
    const [image, setImage] = useState(
        isAddMode ? INITIAL_VALUES_DEFAULT.image : []
    )
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
            setSpec(INITIAL_VALUES_LAPTOP_DEFAULT)
            setReLoadInitialValue(true)
        } else {
            // const setValueOjb = (result, funcGetObj) => {
            //     if (result.errorMessage === null) {
            //         let object = funcGetObj(result.result)
            //         console.log(object)
            //         setValues(object)
            //     } else {
            //         setValues(INITIAL_VALUES_DEFAULT)
            //         setNotify({
            //             isOpen: true,
            //             message: result.errorMessage,
            //             type: "error"
            //         })
            //         setNotFound(true)
            //     }
            // }
            // const getInfo = async () => {
            //     console.log(type)
            //     switch (type) {
            //         case TYPE.STUDENT:
            //             const studentResult = await studentApi.find(id)
            //             setValueOjb(studentResult, getStudentObject)
            //             break
            //         case TYPE.TEACHER:
            //             const teacherResult = await teacherApi.find(id)
            //             setValueOjb(teacherResult, getTeacherObject)
            //             break
            //         case TYPE.TEAM:
            //             const teamResult = await teamApi.find(id)
            //             setValueOjb(teamResult, getTeamObject)
            //             break
            //         case TYPE.TOPIC:
            //             const topicResult = await topicApi.find(id)
            //             setValueOjb(topicResult, getTopicObject)
            //             break
            //         case TYPE.ACCOUNT:
            //             setValues({
            //                 username: "",
            //                 passwordOld: "",
            //                 passwordNew: "",
            //                 passwordConfirm: ""
            //             })
            //             break
            //         // case TYPE.DEADLINE:
            //         //     setValues(initialFValuesDeadlinesDefault)
            //         //     break;
            //         default:
            //             setValues([])
            //             setNotFound(true)
            //             break
            //     }
            // }
            // getInfo()

            switch (type) {
                case TYPE_PRODUCT.LAPTOP:
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
