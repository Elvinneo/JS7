const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWNkMTAzZDljNDU1YmRhYzBmZDI5MTFmMzljM2E3ZiIsInN1YiI6IjY2MGUyNTY5ZGE5ZWYyMDE0YTU1ZGU2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Roy8FGAp2kF_PCRqmXpSWaosfq54XidNiVzjaLLUxWc'
  }
};

let movie='https://api.themoviedb.org/3/account/21183411/favorite/movies?language=en-US&page=1&sort_by=created_at.asc'
let tv='https://api.themoviedb.org/3/account/21183411/favorite/tv?language=en-US&page=1&sort_by=created_at.asc'
let link=""
let secim1=''
let secim2=''
let res=prompt("seçim edin .Filmler üçün 'movie', Tv üçün 'tv'")
let yoxla=0

if (res=="movie"){
  yoxla=1
  link=movie
  console.log(`%cMy favourite movies is:`,`color:red`)
  secim1='title'
  secim2='release_date'

}
else if(res=="tv"){
  yoxla=1
  link=tv
  console.log(`%cMy favourite TV programs is:`,`color:red`)
  secim1='name'
  secim2='first_air_date'
}
else{
  console.log('Seçim düzgün edilməyib !!!')
}
if(yoxla){
  fetch(link, options)
  .then((response) =>response.json()
  .then((movies) =>movies.results.map((movie) =>console.log(`Name:${movie[secim1]}  Year: ${movie[secim2]} `))))
}





