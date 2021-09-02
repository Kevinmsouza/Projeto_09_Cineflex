import "./style.css";
import { Link } from "react-router-dom"

export default function MoviePoster({ id, src, alt }) {
    return (
        <Link to={`/filme/${id}`}>
            <li className="movie" >
                <img src={src} alt={alt} />
            </li>
        </Link>

    )
}