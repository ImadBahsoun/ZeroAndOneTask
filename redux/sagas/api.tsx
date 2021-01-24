import axios from "axios"

import { BASE_URL, API_KEY } from "../../app/utils/keys"

function* fetchVideos(action) {
    const response = yield axios.get(`${BASE_URL}/youtube/v3/search?q=${action.searchValue}&key=${API_KEY}&part=snippet&maxResults=30`);
    const videos = yield response.status === 200 ? response.data.items : []
    return videos 
}

export const Api = {
    fetchVideos
}