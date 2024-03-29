// Array of song objects.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Holocene", artist: "Bon Iver", genre: "Indie" },
    { title: "Riptide", artist: "Vance Joy", genre: "Indie" },
    { title: "Little Lion Man", artist: "Mumford & Sons", genre: "Indie" },
    { title: "1901", artist: "Phoenix", genre: "Indie" },
    { title: "Electric Feel", artist: "MGMT", genre: "Indie" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Classic" },
    { title: "Imagine", artist: "John Lennon", genre: "Classic" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Classic" },
    { title: "Hotel California", artist: "Eagles", genre: "Classic" },
    { title: "Let It Be", artist: "The Beatles", genre: "Classic" },
    { title: "Take Five", artist: "Dave Brubeck", genre: "Jazz" },
    { title: "So What", artist: "Miles Davis", genre: "Jazz" },
    { title: "My Favorite Things", artist: "John Coltrane", genre: "Jazz" },
    { title: "Feeling Good", artist: "Nina Simone", genre: "Jazz" },
    { title: "Fly Me to the Moon", artist: "Frank Sinatra", genre: "Jazz" }      
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  "Drax": "Jazz",
  "Groot": "Classic", 
  "Rocket": "Indie"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Converted guardians object into an array then mapped to the desired property.
  const  playlistsForEachGuardian = Object.entries(guardians).map(([name, genrePreference]) => {
    return {
      name,
      playlist : songs.filter(song => song.genre === genrePreference)
    };   
  });

  return playlistsForEachGuardian;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
const playlistsDiv = document.querySelector("#playlists");

// Loop through each playlist and create a new div for it
playlists.forEach(playlist => {
  const playlistDiv = document.createElement("div");
  playlistDiv.setAttribute("class", "playlist");
  playlistDiv.innerHTML = `<h2>${playlist.name}'s Playlist</h2>`;

  playlist.playlist.forEach(song => {
    const songDiv = document.createElement("div");
    songDiv.className ="song";
    songDiv.innerHTML = `<span class="song-title">${song.title}</span>  by ${song.artist}`;
    playlistDiv.appendChild(songDiv);
  });

  playlistsDiv.appendChild(playlistDiv);
});

