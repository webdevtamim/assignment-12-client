import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMeals from "../../../hooks/useMeals";

const AllMeals = () => {
    const [meals, setMeals] = useMeals();
    const [allMeals, setAllMeals] = useState(meals);

    useEffect(() => {
        setAllMeals(meals);
    }, [meals]);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value.toLowerCase();
        const filterMeals = meals.filter(data => data.food.toLowerCase().includes(search));
        setAllMeals(filterMeals);
    };

    return (
        <div className="py-20 px-5">
            <div className="mb-10 max-w-[1200px] mx-auto sm:flex justify-between items-center">
                <div className="sm:space-x-5 md:space-x-0 lg:space-x-5">
                    <span className="text-btn-hover md:text-5xl text-4xl font-semibold block sm:inline md:block lg:inline pb-3">HowdyHaven</span>
                    <span className="md:text-5xl text-4xl font-semibold text-headning-color">All Meals</span>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <input name="search" type="text" placeholder="Search by food name" className="input input-bordered bg-transparent border-[#474747] text-[#474747]" />
                    </form>
                </div>
            </div >
            <div className="overflow-x-auto max-w-[1200px] mx-auto shadow-2xl border rounded-md lg:p-10 md:px-5 md:py-8 px-3 py-5 bg-bg-color">
                <table className="table lg:table-lg md:table-md table-sm">
                    <thead>
                        <tr className="text-[#474747] text-center md:text-lg text-base">
                            <th className="font-black">Distributor</th>
                            <th className="font-black">Food Name</th>
                            <th className="font-black">Post Date</th>
                            <th className="font-black">Price</th>
                            <th className="font-black">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMeals.map(items => <tr key={items._id} className="text-[#222] text-center">
                                <td>{items.name}</td>
                                <td>{items.food}</td>
                                <td>{items.postDate.slice(0, 10)}</td>
                                <td>{items.price}</td>
                                <td>
                                    <Link to={'/meal/' + items._id} className="bg-btn-hover md:px-5 md:py-2 py-1 px-3 rounded-md text-white hover:bg-transparent hover:text-btn-hover">view</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllMeals;