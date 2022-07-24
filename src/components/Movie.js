import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, large_cover_image, title_long }) {
    return (
        <li className={styles.movie_item}>
            <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                <img className={styles.movie_img} src={large_cover_image} />
            </Link>

            <h3 className={styles.movie_title}>{title_long}</h3>
        </li>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    large_cover_image: PropTypes.string.isRequired,
    title_long: PropTypes.string.isRequired,
};
export default Movie;
