const API_KEY = '1ca97fef'
export const searchMovies = async ({search}) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        console.log(response);
        
        const json = await response.json()
        const movies = json.Search

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
          }));
    } catch (e) {
        throw new Error(e)
    }
    
}