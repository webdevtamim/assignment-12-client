import { Link } from "react-router-dom";

const Membership = () => {

    const packages = [
        {
            packageName: 'Silver',
            price: 29.99,
            features: [
                'Premium meals access',
                'Priority support',
                'Delicious, tailored options.',
            ]
        },
        {
            packageName: 'Gold',
            price: 49.99,
            features: [
                'All Silver features',
                'Special discounts',
                'Exclusive restaurant deals.',
            ],
            bg: '#F1F4FF',
            margin: '30px',
            zIndex: 20
        },
        {
            packageName: 'Platinum',
            price: 79.99,
            features: [
                'All Gold features',
                'Events VIP access',
                'VIP access to food events.',
            ]
        }
    ];

    return (
        <div className="membership-card flex justify-center max-w-[1400px] px-5 mx-auto py-32">
            {
                packages.map((item, index) => <div
                    key={index}
                    className="rounded-lg p-10 grid items-center"
                    style={{
                        backgroundColor: `${item.bg}`, 
                        marginTop: `-${item.margin}`, 
                        marginBottom: `-${item.margin}`,
                        zIndex: item.zIndex,
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <div className="space-y-5 py-5 px-6">
                        <h3 className="text-lg text-center font-bold text-headning-color">{item.packageName}</h3>
                        <p className="text-center text-[#282828] font-bold text-6xl flex items-center">
                            <span className="text-5xl">$ </span>
                            {item.price}
                        </p>
                        <ul className="text-center text-base text-gray-600">
                            {item.features.map((feature, index) => (
                                <li key={index} className="border-t py-3">{feature}</li>
                            ))}
                        </ul>
                        <div className="text-center">
                            <Link to={`/checkout/${item.packageName.toLowerCase()}`}>
                                <button className="bg-btn-hover text-white px-4 py-2 rounded-md hover:bg-headning-color">
                                    Upgrade Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Membership;