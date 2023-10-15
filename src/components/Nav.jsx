import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/tasks/today">Today</Link>
            <Link to="/tasks/tomorrow">Tomorrow</Link>
            <Link to="/tasks/habits">Habits</Link>
            <Link to="/history">History</Link>
        </nav>
    )
}
export default Nav