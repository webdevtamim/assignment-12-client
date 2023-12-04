import { useEffect, useState } from "react";

const useMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://b8a12-the-final-effort-server-side.vercel.app/meals')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
                setLoading(false);
            })
    }, [])
    return [meals, loading]
};

export default useMeals;