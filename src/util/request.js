const URL = 'https://api.tvmaze.com'
export default {
    async getShows() {
        const response = await fetch(`${URL}/schedule`)
        const data = await response.json()
        return data
    }
}