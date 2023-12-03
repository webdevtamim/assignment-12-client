import Banner from "./Banner/Banner";
import CateTab from "./CateTab/CateTab";
import Membership from "./Membership/Membership";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CateTab></CateTab>
            <Reviews></Reviews>
            <Membership></Membership>
        </div>
    );
};

export default Home;