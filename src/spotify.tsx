import querystring from "querystring";
import axios from "axios";

import { Music } from "react-feather";

const rt = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;
const cid = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const scrt = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

interface SongData {
    name: string;
    artist: string;
    album: string;
    icon: string;
    url: string;
}

export async function getSong() : Promise<any> {
    if (!rt || !cid || !scrt) {
        return null;
    }
    const token = await getTokenFromRef(rt!, cid!, scrt!);
    return (await axios.get("https://api.spotify.com/v1/me/player/currently_playing", {
        headers: {
            'Accept': '*/*, application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`
        }
    })).data.item;
}

async function getTokenFromRef(refreshToken : string, clientId : string, clientSecret : string) : Promise<string> {
    const qs = querystring.stringify({ grant_type: 'refresh_token', refresh_token: refreshToken });
    // Not sure how I'd do this with node-fetch
    return (await axios.post("https://accounts.spotify.com/api/token", qs,
        {
            method: "POST",
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${ Buffer.from(clientId + ":" + clientSecret).toString('base64') }`
            },
        }).catch((err) => {
            console.error(err)
            return err;
    })).data.access_token;
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
