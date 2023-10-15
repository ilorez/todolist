import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>The page that you loking for not found </p>
            <Link to="/">Go Back to Homepage</Link>
        </div>
    )
}

export default NotFound;