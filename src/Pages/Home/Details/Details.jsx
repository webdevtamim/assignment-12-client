import { useNavigate, useParams } from "react-router-dom";
import useMeals from "../../../hooks/useMeals";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../../../Providers/AuthProvider";

const Details = () => {
    const navigate = useNavigate();

    const [meals] = useMeals();
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const mealDetails = meals.filter(item => item._id === id);

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleMealRequest = (photo, food, price, name, selectedCate) => {
        const mealsObj = { photo, food, price, name, selectedCate };
        if (user) {
            fetch('http://localhost:5000/mealRequest', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(mealsObj)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Request pending',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        } else {
            Swal.fire({
                title: "Oops",
                text: "Login first!",
                icon: "error",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "go to login page"
            }).then((result) => {
                if (result.isConfirmed) {
                    handleLoginRedirect();
                }
            });
        }
    }
    return (
        <div className="max-w-[800px] mx-auto px-5 pt-20 pb-40">
            {
                mealDetails.map(item => <div key={item._id} className="card">
                    <img className='px-5' src={item.photo} alt="" />
                    <div className="card-body space-y-2">
                        <p className="text-2xl text-[#474747]">Distributor: {item.name}</p>
                        <p className="text-lg font-semibold text-[#474747]">Price: $ {item.price}</p>
                        <p className='text-[#222]'>{item.description}</p>
                        <div className="card-actions justify-between">
                            <button
                                onClick={() => handleMealRequest(item.photo, item.food, item.price, item.name, item.selectedCate)}
                                className='px-10 py-4 text-white text-lg rounded-md font-medium bg-btn-hover hover:bg-headning-color'>Request</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Details;