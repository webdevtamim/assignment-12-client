import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const navItems = [
        {item:"My Profile", link:"my-profile"},
        {item:"Requested Meals", link:"requested-meals"},
        {item:"My Reviews", link:"my-reviews"}
    ]

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {
                    <Outlet></Outlet>
                }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {
                        navItems.map((item, index) => <li key={index}>
                            <NavLink to={`${item.link}`}>{item.item}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;