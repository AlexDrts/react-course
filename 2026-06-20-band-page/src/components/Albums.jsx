import { useState } from "react";

function Albums({ albums }) {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    return (
        <section className="section">
            <h2>💿 Альбоми</h2>

            <div className="albums">
                {albums.map((album, index) => (
                    <div
                        className="album"
                        key={index}
                        onClick={() => setSelectedAlbum(album)}
                    >
                        <img src={album.image} alt={album.title} />

                        <span className="album-hint">Натисніть, щоб дізнатися більше</span>

                        <h3>{album.title}</h3>
                        <p>{album.year}</p>
                    </div>
                ))}
            </div>

            {selectedAlbum && (
                <div className="selected-album">
                    <h2>🎧 {selectedAlbum.title}</h2>

                    <p>
                        Рік випуску: <b>{selectedAlbum.year}</b>
                    </p>

                    <p>{selectedAlbum.description}</p>
                </div>
            )}
        </section>
    );
}

export default Albums;