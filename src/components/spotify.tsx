import React, {useEffect, useState} from "react";
import {SiSpotify} from "react-icons/all";
import {LanyardSongData, parseLanyardData, SongData} from "../ts/songdata";
import {getFieldFromJson} from "../ts/fetch";

const LANYARD_ENDPOINT = "https://api.lanyard.rest/v1/users";
const DISCORD_ID = "606164529210064897";
const FULL_ENDPOINT = `${LANYARD_ENDPOINT}/${DISCORD_ID}`;

export async function getSong(): Promise<SongData | null> {
    const spotify = await getFieldFromJson<LanyardSongData>(FULL_ENDPOINT, "spotify");
    if (!spotify || !spotify.song) {
        return null;
    }
    return parseLanyardData(spotify);
}

export function Spotify() {
    const [song, setSong] = useState<SongData>();

    useEffect(() => {
        const retrieve = async () => {
            if (!song) {
                const data = await getSong();
                setSong(data!)
            }
        };
        retrieve();
    }, [song]);
    if (song) {
        return (
            <div className="spotify-container">
                <img src={song.icon} alt="Album" className="spotify-album spotify-container-item" draggable="false"/>
                <div className="spotify-container-item spotify-info-container">
                    <div className="spotify-title">{song.name}</div>
                    <div className="spotify-artist">{song.artist}</div>
                    <a href={song.url} className="container-item tip icon" target="_blank" rel="noreferrer">
                        <SiSpotify size={20}/>
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div>Software Engineer.</div>
    );
}
