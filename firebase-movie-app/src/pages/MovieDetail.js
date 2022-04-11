import React from 'react'

const MovieDetail = () => {

  // API Anahtarı (v3 auth)
  const apiKey = 3463ee467203573bb182874e14b6c534;
  const url = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}&language=en-US`;

  // API Okuma Erişim Jetonu (v4 auth)
  const jeton =eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDYzZWU0NjcyMDM1NzNiYjE4Mjg3NGUxNGI2YzUzNCIsInN1YiI6IjYyNTQ5YWMzNjdlMGY3NThiNjYyMjFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4yO1PdvUY40Zb5zuEhZtoI8nQKkRnjwFStzFtlSH2o;
  


  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail