import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/today">Today</Link>
            <Link to="/tomorrow">Tomorrow</Link>
            <Link to="/habits">Habits</Link>
            <Link to="/history">History</Link>
        </nav>
    )
}
export default Nav