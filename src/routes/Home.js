import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    const [btn, setBtn] = useState(true);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [list, setList] = useState();

    function btnClick(e) {
        e.preventDefault();
        setBtn(false);
    }

    const getMovies = async () => {
        const response = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year"
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(true);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.bk_screen}>
            {!loading ? (
                <h1 className={styles.main_title}>LOADING...</h1>
            ) : (
                <div>
                    <div className={styles.bg}>
                        {btn ? (
                            <div className={styles.main_filter}>
                                <h1 className={styles.main_title}>
                                    모두가 인정한 영화를 시청하세요!
                                </h1>
                                <button onClick={btnClick} className={styles.main_btn}>
                                    둘러보기!
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h1 className={styles.home_title}>Recommended movies</h1>
                                <ul className={styles.movies_list}>
                                    {movies.map((movie) => (
                                        <Movie
                                            id={movie.id}
                                            large_cover_image={movie.large_cover_image}
                                            title_long={movie.title_long}
                                        />
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;
