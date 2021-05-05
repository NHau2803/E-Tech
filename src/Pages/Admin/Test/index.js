import React from "react"
const axios = require("axios")
const TestAPI = () => {
    const getBreeds = () => {
        try {
            return axios.get("http://91110936de25.ngrok.io/laptop/create")
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
    return (
        <div>
            <h1>TEST API</h1>
        </div>
    )
}

export default TestAPI
