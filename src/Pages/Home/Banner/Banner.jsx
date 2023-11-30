const Banner = () => {

    const handleSearch = e => {
        e.preventDefault();
        e.target.reset();
    }
    
    return (
        <div className='bg-banner bg-no-repeat bg-cover bg-center'>
            <div id="banner-overlay" className="lg:space-y-10 space-y-7 lg:pt-48 pt-28 lg:pb-52 md:pb-36 pb-20 px-5">
                <h2 className="text-center lg:text-5xl md:text-4xl text-3xl text-[#0B0B0B] font-bold">Welcome to HowdyHaven Hostel</h2>
                <p className="text-center lg:text-xl md:text-lg text-base max-w-[600px] mx-auto mb-5">Seamless living, unforgettable meals. Explore the perfect blend of comfort and culinary excellence at HowdyHaven – your home away from home</p>
                <form className="lg:w-[500px] md:w-[450px] max-w-[400px] mx-auto flex" onSubmit={handleSearch}>
                    <input className="bg-white border py-4 px-4 text-sm text-[#BBB766] rounded-l-lg outline-none w-3/4" type="text" name="text" placeholder="Search here...." />
                    <input className="bg-[#282828] py-4 sm:px-7 px-0 font-semibold text-white rounded-r-lg w-1/4 cursor-pointer" type="submit" value="Search" />
                </form>
            </div>
            <div className="bg-bg-color">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" height="30" width="100%">
                    <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" fill="white"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;