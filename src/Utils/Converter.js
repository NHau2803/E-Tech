export const getOptionsLocalStorage = name => {
    return JSON.parse(window.localStorage.getItem(name))
}

export const setOptionsLocalStorage = (name, data) => {
    return window.localStorage.setItem(name, JSON.stringify(data))
}

export const changePriceToVND = price => {
    return price.toLocaleString("it-IT", { style: "currency", currency: "VND" })
}

export const toCreateLaptop = values => {
    return {
        info: {
            name: values.name,
            type_id: Number(values.type_id),
            brand_id: Number(values.brand_id),
            price: values.price,
            description: values.description,
            linkImg1: values.linkImg1,
            linkImg2: values.linkImg2,
            linkImg3: values.linkImg3,
            guarantee: values.guarantee
        },
        spec: {
            battery_id: Number(values.battery_id),
            cpu_id: Number(values.cpu_id),
            gpu_id: Number(values.gpu_id),
            port_id: Number(values.port_id),
            ram_id: Number(values.ram_id),
            rom_id: Number(values.rom_id),
            screen_id: Number(values.screen_id),
            size_id: Number(values.size_id),
            weight_id: Number(values.weight_id),
            os_id: Number(values.os_id)
        }
    }
}

//không biết nó là mảng hay obeject?
