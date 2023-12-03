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
        <div className="membership-card md:flex justify-center md:max-w-[1400px] max-w-[400px] px-5 mx-auto lg:pt-20 md:pt-16 md:pb-32 pt-0 pb-0">
            {
                packages.map((item, index) => <div
                    key={index}
                    className="rounded-lg p-10 grid items-center my-20 md:my-0"
                    style={{
                        backgroundColor: `${item.bg}`, 
                        marginTop: `-${item.margin}`, 
                        marginBottom: `-${item.margin}`,
                        zIndex: item.zIndex,
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <div className="space-y-5 lg:py-5 lg:px-6 py-6">
                        <h3 className="text-lg text-center font-bold text-headning-color">{item.packageName}</h3>
                        <p className="text-[#282828] font-bold lg:text-6xl text-4xl flex items-center justify-center">
                            <span className="lg:text-5xl text-3xl">$ </span>
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