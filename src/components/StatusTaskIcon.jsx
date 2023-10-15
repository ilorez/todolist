/**
 * colors : blue / green / red / brown
 */

function StatusTaskIcon({ color = "blue", status = false, fill = false }) {
    const colors = {
        'blue': '#0095FF',
        'green': '#27C289',
        'red': '#FF6E0A',
        'brown': '#DD894F'
    }

    color = colors[color] === undefined ? color : colors[color]
    console.log(color)
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill={fill ? color : "none"} xmlns="http://www.w3.org/2000/svg">
            {status && <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4127 5.8456C20.8468 6.27974 20.8468 6.9836 20.4127 7.41774L10.0821 17.7483C9.21386 18.6167 7.80612 18.6165 6.93787 17.7483L2.16559 12.9761C1.73146 12.542 1.73146 11.838 2.16559 11.4039C2.59973 10.9698 3.30359 10.9698 3.73773 11.4039L8.51 16.1762L18.8406 5.8456C19.2747 5.41147 19.9786 5.41147 20.4127 5.8456Z" fill={color} />}
            <rect x="1" y="1" width="21" height="21" rx="10.5" stroke={color} stroke-width="2" />
        </svg>
    )
}
export default StatusTaskIcon
