import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIMG from '../../assets/login.png';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'User login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.code}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        logIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'User login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.code}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const formDataSheet = [
        {
            id: '1',
            type: 'email',
            placeholder: 'Email'
        },
        {
            id: '2',
            type: 'password',
            placeholder: 'Password'
        }
    ]

    return (
        <div className="py-28">
            <div className="max-w-[1200px] mx-auto px-5 space-y-3 mb-10">
                <p className="text-base text-[#222] tracking-widest">Login now!</p>
                <div className="space-x-5">
                    <span className="text-headning-color md:text-5xl text-4xl font-semibold">HowdyHaven</span>
                    <span className="md:text-5xl text-4xl font-semibold text-[#708BF7]">LOG IN</span>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-5 md:grid grid-cols-2">
                <div className="hidden md:block">
                    <img className="max-w-[80%] mx-auto" src={loginIMG} alt="" />
                </div>
                <div>
                    <div className="p-10 border rounded-lg shadow-xl lg:max-w-[70%] md:max-w-[90%] md:mx-auto">
                        <form onSubmit={handleLogin}>
                            {
                                formDataSheet.map(formData => <div key={formData.id}>
                                    <label className="text-sm text-[#474747] tracking-widest font-bold" htmlFor={formData.type}>{formData.placeholder}</label><br />
                                    <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#474747] text tracking-widest text-xs py-3 px-4" type={formData.type} name={formData.type} id={formData.type} placeholder={formData.placeholder} />
                                    <br />
                                </div>)
                            }
                            <input className="btn w-full bg-btn-hover border-btn-hover font-semibold tracking-widest text-xs mt-4 py-3 text-white rounded-lg hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100 hover:font-extrabold" type="submit" value="Register" />
                        </form>
                        <div className='flex'>
                            <div className='border-b-2 w-[45%]'></div>
                            <p className="text-center text-[#212529] font-semibold w-[10%] -mb-2  pt-5">OR</p>
                            <div className='border-b-2 w-[45%]'></div>
                        </div>
                        <div className="flex justify-center pt-10">
                            <button onClick={handleGoogleLogin}
                                className='text-xl font-medium flex items-center gap-2 border rounded-md py-3 px-6 text-[#212529] border-[#212529] hover:bg-white hover:text-btn-hover hover:border-btn-hover active:text-btn-hover active:border-btn-hover active:bg-transparent'>
                                <span>Login with : <FcGoogle className="inline"></FcGoogle></span>
                            </button>
                        </div>
                        <p className="pt-4 text-[#212529]">New to this website? Please <Link to={'/register'}><span className="hover:underline underline-offset-4 font-bold">Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;