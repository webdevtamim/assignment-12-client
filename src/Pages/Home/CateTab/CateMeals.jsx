import { Link } from "react-router-dom";

const CateMeals = ({ items }) => {
    const { _id, photo, food, ratings, price } = items;

    return (
        <div className="flex">
            <div className="card rounded-lg hover:shadow-lg bg-bg-color text-[#010F1C]">
                <figure className="pt-1"><img className="rounded-md" src={photo} alt="" /></figure>
                <div className="card-body space-y-1">
                    <div className="flex justify-between">
                        <p className="card-title text-2xl font-medium">{food}</p>
                        <p className="font-bold text-right items-center">$ {price}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="rating space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input
                                    key={star}
                                    type="radio"
                                    className="bg-[#EB0029] mask mask-star-2 cursor-default"
                                    value={star}
                                    checked={ratings.includes(star)}
                                    disabled={true}
                                />
                            ))}
                        </div>
                    </div>
                    <Link to={`/meal/${_id}`} className="text-center">
                        <button className="btn mx-auto">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CateMeals;