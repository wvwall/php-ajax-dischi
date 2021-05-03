Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
      albums : [],
      albumsGenre : [],
      albumsArtist : [],
      select : "All",
    },
    methods: {
          searchArtist: function () {
            /* scorro albums e pusho generi in array generi */
              for (let i = 0; i < this.albums.length; i++) {
                if (!this.albumsArtist.includes(this.albums[i].author)) {
                  this.albumsArtist.push(this.albums[i].author)
                } else {
                  /* console.log("E' gia incluso"); */
                }
              }
            }
    },
    mounted() {
      /* chiamata api con tutti i dati degli album */
        axios.get("http://localhost/PHP/ESERCIZI/php-ajax-dischi/call.php")
        .then((response) => {
            console.log(response.data);
            this.albums = response.data;
            this.albums.sort((a,b) =>{
                return a.year - b.year
              } )
        });
    }
  });