const API_KEY = "0a535b07b30062c31b05c206345027d4";
const USER    = "AndrewHTR";

const play = "M9 5h2v2H9v10h2v2H9v2H7V3h2v2Zm4 12h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-2-2h-2V9h2v2Zm-2-2h-2V7h2v2Z";
const pause = "M10 20H4V4h6v16Zm8-16v16h-6V4h6Zm-4 2v12h2V6h-2ZM6 18h2V6H6v12Z";
const headphone = "M5 13h5v8H5v-2h3v-4H5v4H3V7h2v6Zm16 6h-2v-4h-3v4h3v2h-5v-8h5V7h2v12ZM7 7H5V5h2v2Zm12 0h-2V5h2v2Zm-2-2H7V3h10v2Z";

const nowPlayingIcon = document.getElementById('now-playing-icon');

async function updateNowPlaying() {
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`);
    const data = await response.json();
    const track = data.recenttracks.track[0];
    
    const name = document.getElementById('now-playing-name');
    const artist = document.getElementById('now-playing-artist');
    if (track["@attr"]?.nowplaying !== "true") {
        nowPlayingIcon.setAttribute("d", pause);
        name.innerHTML = "Not Playing";
        artist.innerHTML = "";
        return;
    }

    nowPlayingIcon.setAttribute("d", headphone);
    name.innerHTML = track.name;
    artist.innerHTML = "- " + track.artist['#text'];

}

updateNowPlaying();
setInterval(updateNowPlaying, 10000);