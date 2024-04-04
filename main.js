const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWNkMTAzZDljNDU1YmRhYzBmZDI5MTFmMzljM2E3ZiIsInN1YiI6IjY2MGUyNTY5ZGE5ZWYyMDE0YTU1ZGU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Roy8FGAp2kF_PCRqmXpSWaosfq54XidNiVzjaLLUxWc'
  }
};

let movie='https://api.themoviedb.org/3/account/21183411/favorite/movies?language=en-US&page=1&sort_by=created_at.asc'
let tv='https://api.themoviedb.org/3/account/21183411/favorite/tv?language=en-US&page=1&sort_by=created_at.asc'

link=""

let res=prompt("seçim edin .Filmler üçün 'movie', Tv üçün 'tv'")
let secim1=''
let secim2=''

if (res=="movie"){
  link=movie
  console.log(`%cMy favourite movies is:`,`color:red`)
  fetch(link, options)
  .then((response) =>response.json()
  .then((movies) =>movies.results.map((movie) =>console.log(`Name:${movie.title}  Year: ${movie.release_date} `))))
  .catch(err => console.error(err));


}
else if(res=="tv"){
  link=tv
  console.log(`%cMy favourite TV programs is:`,`color:red`)
  fetch(link, options)
  .then((response) =>response.json()
  .then((movies) =>movies.results.map((tv) =>console.log(`Name:${tv.name}  Year: ${tv.first_air_date} `))))
  .catch(err => console.error(err));
}







