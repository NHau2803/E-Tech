import axiosClient from "./ClientAxios"

class ExSample {
    constructor(url) {
        this.url = url
    }
    getAll(data) {
        const res = axiosClient.get(this.url, data)
        return res
    }
}
const ex = new ExSample("/ex")
export default ex
