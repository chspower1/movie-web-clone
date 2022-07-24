import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie((current) => (current = json.data.movie));
        setLoading((current) => !current);
    };
    console.log({ movie }); //for checking

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>LOADING...</h1>
            ) : (
                <div>
                    <img src={movie.large_cover_image} alt="" />
                    <h2>{movie.title_long}</h2>
                    <p>{movie.rating}</p>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                    <p>{movie.description_full}</p>
                </div>
            )}
        </div>
    );
}
export default Detail;
