import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyB6xhyzAkWJ5j4fftQhQ6MnFRg7RDR8ZlQ",
    cx: "3682aa04cc9124e6b",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};


 