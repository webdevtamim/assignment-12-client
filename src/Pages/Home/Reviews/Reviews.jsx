import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {

    const studentReviewsData = [
        {
            id: 1,
            name: 'Alice Johnson',
            course: 'Computer Science',
            content: 'Amazing hostel experience! The facilities are top-notch, and the atmosphere is perfect for studying.',
        },
        {
            id: 2,
            name: 'Bob Smith',
            course: 'Engineering',
            content: 'I\'ve enjoyed my time here. The hostel staff is friendly, and the common areas are great for socializing.',
        },
        {
            id: 3,
            name: 'Charlie Davis',
            course: 'Business Administration',
            content: 'The hostel provides a conducive environment for learning. The study rooms are well-equipped, and the Wi-Fi is reliable.',
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <div className="testimonial-slider max-w-[600px] mx-auto text-center">
                <h2 className='text-headning-color font-bold text-4xl mb-10'>Testimonials</h2>
                <Slider {...settings}>
                    {studentReviewsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-slide">
                            <p className="md:text-lg text-[#222] mb-8">{testimonial.content}</p>
                            <p className="md:text-lg text-headning-color font-bold">{testimonial.name}</p>
                            <p className="text-sm text-[#222]">{testimonial.course}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='-mt-10 -mb-20 md:mb-0 overflow-hidden max-h-64'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='h-[1000px] w-[100%]'>
                    <path d="M 500.003 12.027 C 200.007 12.033 0 0 0 0 V 5 C 0 5 200.007 17.02 500.033 17.028 C 800.074 17.017 1005 5 1006.957 5.013 l 0 -0.023 V 0.015 C 1006.957 0.015 799.979 12.095 500.013 12.027 z" fill="#F1F4FF"></path>
                </svg>
            </div>
        </div>
    );
};

export default Reviews;