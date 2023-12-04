import { Link } from "react-router-dom";

const CateMeals = ({ items }) => {
    const { _id, photo, food, ratings, price } = items;

    return (
        <div className="card rounded-lg shadow-lg hover:shadow-xl hover:bg-bg-color text-[#010F1C]">
            <figure className="pt-1"><img className="rounded-md" src={photo} alt="" /></figure>
            <div className="card-body space-y-1">
                <div className="xl:flex justify-between space-y-2">
                    <p className="card-title text-2xl font-medium">{food}</p>
                    <p className="font-bold xl:text-right items-center">$ {price}</p>
                </div>
                <div className="flex items-center">
                    <div className="rating space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                className="bg-headning-color mask mask-star-2 cursor-default"
                                value={star}
                                checked={ratings.includes(star)}
                                disabled={true}
                            />
                        ))}
                    </div>
                </div>
                <Link to={`/meal/${_id}`} className="inline-block mx-auto">
                    <button className="text-white px-4 py-2 rounded-md hover:bg-btn-hover active:scale-105 bg-headning-color mt-7">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CateMeals;