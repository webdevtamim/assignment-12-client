import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2';

const AddMeal = () => {
    const { user } = useContext(AuthContext)

    const [selectedCate, setselectedCate] = useState('');
    const [postDate, setPostDate] = useState(new Date());

    const handleSelectChange = (event) => {
        setselectedCate(event.target.value);
    };

    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const food = form.food.value;
        const name = form.name.value;
        const likes = form.likes.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

        const mealsObj = { photo, food, name, selectedCate, postDate, likes, ratings, description };
        // const mealsObj = { photo, food, name, category: selectedCate, postDate, likes, ratings, description };

        fetch('http://localhost:5000/meals', {
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
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        event.target.reset();
    }

    return (
        <div className="pb-28">
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="pt-28 mb-10 md:max-w-[70%] mx-auto sm:space-x-5 md:space-x-0 lg:space-x-5">
                    <span className="text-[#F03737] md:text-5xl text-4xl font-semibold block sm:inline md:block lg:inline pb-3">JOB GATOR</span>
                    <span className="md:text-5xl text-4xl font-semibold text-[#474747]">Add A Product</span>
                </div>
                <div className="p-10 border rounded-lg md:max-w-[70%] mx-auto shadow-xl">
                    <form onSubmit={handleAddJob}>
                        <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="photo">Image</label><br />
                        <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="url" name="photo" id="photo" placeholder="URL" required />
                        <div className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-2">
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="food">Food</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="text" name="food" id="food" placeholder="Food" required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold">User Name</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="name" name="name" defaultValue={user ? user.displayName : ''} required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold">Category</label>
                                <select
                                    className="mt-2 mb-6 bg-white rounded select select-bordered outline-none font-semibold border-[#7A7A7A] text -tracking-widest text-[#474747] text-xs px-4 w-full"
                                    name="category"
                                    value={selectedCate}
                                    onChange={handleSelectChange}
                                    required
                                >
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="date">Posting Date</label><br />
                                <DatePicker className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-sm py-3 px-4" selected={postDate} onChange={(date) => setPostDate(date)} />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="likes">Likes</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="number" name="likes" id="likes" placeholder="Likes" required />
                            </div>
                            <div>
                                <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="ratings">Ratings</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" type="number" name="ratings" id="ratings" placeholder="Ratings" required />
                            </div>
                        </div>

                        <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor="description">Job Description</label><br />
                        <textarea className="mt-2 mb-10 w-full bg-white rounded border outline-none font-semibold border-[#474747] text-[#474747] tracking-widest text-xs py-3 px-4" id="description" placeholder="Job Description" rows="3" required></textarea>

                        <input className="btn w-full bg-[#F03737] border-[#F03737] font-semibold tracking-widest text-xs mt-4 py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100 hover:font-extrabold" type="submit" value="ADD" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMeal;