fetch('https://6560acc483aba11d99d151a5.mockapi.io/api/movies')
.then(response=>response.json())
.then(data => {
    data.forEach((movie)=>{
        console.log(movie);
        let box = document.querySelector('.container')
        box.innerHTML += `
         <d iv class="row">
    <div class="col">
      <div class="card">
        <div class="card-image">
          <img src=${movie.movieImg}>
          <h1 class="card-title">${movie.movieName}<h1/>
        </div>
        <div class="card-content">
          <p>${movie.starring}</p>
        </div>
        <div class="card-action">
          <a href=${movie.trailler} target="_blank">Watch
        </div>
      </div>
    </div>
  </div>    `
    })
})