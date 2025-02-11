const submitButton = document.querySelector("#submit");
const Input = document.querySelector("#search-input");
const movie = document.querySelector("#movie");
const Image_base_path = "https://image.tmdb.org/t/p/w200";
const Apikey = "2be1125fe4e5185a90a429864aa6c9e6";

submitButton.addEventListener("click", searchMovies);

async function searchMovies(e) {
    e.preventDefault();  
    const query = Input.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${Apikey}`);
    const data = await response.json();

    movie.innerHTML = ''; 
 
    for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
 
        if (result.poster_path) {
            const move = document.createElement("div");
            move.classList.add("the")
            const img = document.createElement("img");
            img.classList.add("box")
            const heading = document.createElement("h3");

            heading.classList="name"
            heading.innerText = result.title


            img.src = Image_base_path + result.poster_path;
            move.append(img,heading);
            movie.append(move)
            
        }
    }


    if (data.results.length === 0) {
        movie.innerHTML = 'No movies found.';
    }
}
