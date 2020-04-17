import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID "+"JNeu2v4tnFoFYqbp2pJhcv2Ncl45Gnjaxe2SXIUocpU"
    }

})