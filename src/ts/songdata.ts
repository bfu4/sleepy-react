export interface LanyardSongData {
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
}

export interface SongData {
    name: string;
    artist: string;
    icon: string;
    album: string;
    url: string;
}

export function parseLanyardData(data: LanyardSongData): SongData {
    return {
        name: data.song,
        artist: data.artist,
        icon: data.album_art_url,
        album: data.album,
        url: `https://open.spotify.com/track/${data.track_id}`
    };
}
