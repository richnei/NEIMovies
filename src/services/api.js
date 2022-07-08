import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjBmZDM1ZDUyOGI4YWNlNTFmNTM1YzZmNjRjN2MwNiIsInN1YiI6IjYyYzZkZmRmZjI5ZDY2MDA1MTQ0ZDdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kBOmvtVS3Zri5jZUv8llQjcKatBnWs3N5mOUYcajKow";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})