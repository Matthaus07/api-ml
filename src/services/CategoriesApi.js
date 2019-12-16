import axios from "axios";

export default {
   
    getCategories: async (url, resp) => {
        try {
            const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com'
            const options ={
                url: `${baseURL}/sites/MLB/${url}`,
                method: 'get',
            }
            const res = await axios(options)
            return resp(res)
        }
        catch (err) {
            console.log(err)
        }
    }
}
