


export default function Funfacts() {
    return (
        <div className="facts">
            <h1> Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013.</li>
                <li>Was originaly created by Jordan Walke.</li>
                <li>Has well over 100k stars on Github. </li>
                <li>Is maintained by Meta.</li>
                <li>Powers thousands of enterprise apps, including mobile apps.</li>
            </ul>
            <small> &copy; {new Date().getFullYear()}. All rights reserved.</small>
        </div>
    );
}