!function(){var e={loadPopular:function(){var e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("ce2d3c43772ebdf360cfaed86f3ba1bf");return fetch(e).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))}},r={galleryFilms:document.querySelector(".galeryFilms-js")};console.log(r.galleryFilms);var n={renderMarkup:function(e){console.log(e.results);var n=e.results.map((function(e){return cardFilm='\n        <div>\n            <img src="https://image.tmdb.org/t/p/w500'.concat(e.poster_path,'" alt="poster">\n            <h2>').concat(e.original_title,"</h2>\n            <p>").concat(e.media_type,"</p>\n            <p>").concat(e.release_date,"</p>\n        </div>\n        "),cardFilm})).join("");r.galleryFilms.innerHTML=n}};e.loadPopular().then(n.renderMarkup).catch((function(){console.log("error")}))}();
//# sourceMappingURL=index.28a376f5.js.map
