import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
function Movie({ id, medium_cover_image, title, genres, summary }) {
    return (
        <div>
            <img src={medium_cover_image} alt="" />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul>
                {genres //
                    .map((genr) => (
                        <li key={genr}>{genr}</li>
                    ))}
            </ul>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;
