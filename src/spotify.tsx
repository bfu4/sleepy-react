import { Music } from "react-feather";

const DISCORD_ID = "606164529210064897";

interface SongData {
    name: string;
    artist: string;
    album: string;
    icon: string;
    url: string;
}

export async function getSong() : Promise<SongData| null> {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const json = await res.json();
    const data = json.data.spotify;
    if (!data || !data.song) {
        return null;
    }
    return {name: data.song, artist: data.artist, album: data.album, icon: data.album_art_url, url: `https://open.spotify.com/track/${data.track_id}`};
}

export function Spotify(props: {songData: SongData}) {
    const data = props.songData;
    return (
        <div className="spotify-container">
            <img src={data.icon} alt="Album" className="spotify-album spotify-container-item" draggable="false"/>
            <div className="container-0-5 spotify-container-item">
                <div className="container-item tip"> <Music size="11"/> Listening to: </div>
                <div className="container-item song-title">{ data.name }</div>
                <div className="container-item">{ data.artist }</div>
                <a href={data.url} className="container-item tip spotify-extern" target="_blank" rel="noreferrer">on Spotify</a>
            </div>
        </div>
    )
}
