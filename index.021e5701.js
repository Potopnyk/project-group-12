var e={loadPopular:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=ce2d3c43772ebdf360cfaed86f3ba1bf").then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)}))}};const r={galleryFilms:document.querySelector(".galeryFilms-js")};console.log(r.galleryFilms);var t={renderMarkup:function(e){console.log(e.results);const t=e.results.map((e=>(cardFilm=`\n        <div>\n            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="poster">\n            <h2>${e.original_title}</h2>\n            <p>${e.media_type}</p>\n            <p>${e.release_date}</p>\n        </div>\n        `,cardFilm))).join("");r.galleryFilms.innerHTML=t}};e.loadPopular().then(t.renderMarkup).catch((()=>{console.log("error")}));
//# sourceMappingURL=index.021e5701.js.map
