import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detail() {
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(true);
    };
    console.log(movie); // for checking
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.detail_body}>
            {!loading ? (
                <div className={styles.detail_container}>
                    <div className={styles.main_title}>LOADING...</div>
                </div>
            ) : (
                <div className={styles.detail_container}>
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                        <button className={styles.detail_btn}>
                            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                        </button>
                    </Link>
                    <img className={styles.detail_img} src={movie.large_cover_image} />
                    <h1 className={styles.main_title}>{movie.title_long}</h1>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li>{genre}</li>
                        ))}
                    </ul>
                    <p className={styles.detail_summery}>{movie.description_full}</p>
                </div>
            )}
        </div>
    );
}
export default Detail;
