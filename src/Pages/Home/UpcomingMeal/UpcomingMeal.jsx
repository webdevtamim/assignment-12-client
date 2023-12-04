import { useEffect, useState } from "react";

const UpcomingMeal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/upcomingMeal')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
            })
    }, [])
    return (
        <div className="pt-20 pb-32 grid lg:grid-cols-4 grid-cols-2 gap-5 max-w-[1400px] mx-auto px-5">
            {
                meals.map(item => <div
                    key={item._id}
                    className="card rounded-lg shadow-lg hover:shadow-xl hover:bg-bg-color text-[#010F1C]">
                    <figure className="pt-1"><img className="rounded-md" src={item.photo} alt="" /></figure>
                    <div className="card-body space-y-1">
                        <p className="card-title text-2xl font-medium">{item.food}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default UpcomingMeal;