import React from "react"
const TestAPI = () => {
    var axios = require("axios")
    const getBreeds = () => {
        try {
            return axios.post("http://925f37a952cb.ngrok.io/api/login", {
                email: "admin@etech.com",
                password: "admin123456"
            })
        } catch (error) {
            console.error(error)
        }
    }

    const countBreeds = async () => {
        const breeds = getBreeds()
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    countBreeds()
    //
    // var data = JSON.stringify({
    //     info: {
    //         name: "Bug bug bug tránh raaaa",
    //         description: "description 1",
    //         guarantee: 24,
    //         price: 120000,
    //         brand_id: 2,
    //         type_id: 1
    //     },
    //     spec: {
    //         cpu_id: 1,
    //         gpu_id: 1,
    //         ram_id: 1,
    //         size_id: 1,
    //         rom_id: 1,
    //         screen_id: 1,
    //         port_id: 2,
    //         os_id: 1,
    //         battery_id: 1,
    //         weight_id: 1
    //     },
    //     images: { img1: "IMG 1", img2: "IMG 2" }
    // })

    // var config = {
    //     method: "post",
    //     url: "http://090f15fa7f2e.ngrok.io/api/products/create",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     data: data
    // }

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data))
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })

    // var axios = require("axios")

    // var config = {
    //     method: "get",
    //     url: "http://090f15fa7f2e.ngrok.io/api/products/laptop/23",
    //     headers: {}
    // }

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data))
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     })
    return (
        <div>
            <h1>TEST API</h1>
        </div>
    )
}

export default TestAPI
