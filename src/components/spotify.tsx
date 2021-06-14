import {useEffect, useState} from "react";
import {SiSpotify} from "react-icons/all";

import "../css/spotify.css"

const DISCORD_ID = "606164529210064897";

interface SongData {
    name: string;
    artist: string;
    album: string;
    icon: string;
    url: string;
}

/**
 * Get my currently playing song from phin's lanyard api. (thansk phinease)
 */
export async function getSong(): Promise<SongData | null> {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const json = await res.json();
    const data = json.data.spotify;
    if (!data || !data.song) {
        return null;
    }
    return {
        name: data.song,
        artist: data.artist,
        album: data.album,
        icon: data.album_art_url,
        url: `https://open.spotify.com/track/${data.track_id}`
    };
}

/**
 * Spotify element
 * @constructor
 */
export function Spotify() {
    const [song, setSong] = useState<SongData>();

    useEffect( () => {
        const retrieve = async () => {
            if (!song) {
                const data = await getSong();
                setSong(data!)
            }
        };
        retrieve();
    }, [song]);

    if (song) {
        /*return (
            <div className="spotify-container">
                <img src={song.icon} alt="Album" className="spotify-album spotify-container-item" draggable="false"/>
                <div className="container-0-5 spotify-container-item">
                    <div className="container-item tip"><Music size="11"/> Listening to:</div>
                    <div className="container-item song-title">{song.name}</div>
                    <div className="container-item">{song.artist}</div>
                    <a href={song.url} className="container-item tip spotify-extern" target="_blank" rel="noreferrer">on
                        Spotify</a>
                </div>
            </div>
        )*/
    }
    return (
        <div className="spotify-icon">
            <SiSpotify size={40}/>
        </div>
    )
}
