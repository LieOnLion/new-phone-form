import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you were looking for does not exist or could not be found</p>
            <Link to='/new-phone-form/'>back home</Link>
        </div>
    );
};

export default NotFound;