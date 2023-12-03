import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <Membership></Membership>
        </div>
    );
};

export default Home;