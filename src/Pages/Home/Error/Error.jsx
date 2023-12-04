import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="grid justify-center min-h-screen content-center gap-2 text-center">
            <img src='/404-page.png' alt="" />
            <Link>
                <button className="btn">Back to home</button>
            </Link>
        </div>
    );
};

export default Error;