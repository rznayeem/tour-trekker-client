import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { email, password, name, photo } = data;

    const userData = { email, name, photo };
    console.log(userData);

    createUser(email, password)
      .then(result => {
        fetch(
          'https://assignment-10-tour-trekker-server-side.vercel.app/user',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(userData),
          }
        )
          .then(res => res.json())
          .then(data => console.log(data));
        const user = result.user;
        updateUserData(name, photo, email);
        if (user) {
          toast.success('Account created successfully');
          setTimeout(() => {
            navigate('/');
          }, 1500);
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') {
          setError(true);
        }
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="container lg:h-[90vh] my-20 mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-[40%] w-full  animate__animated animate__slideInLeft p-8 rounded-xl space-y-3 border content-center bg-[#EE465E] font-sans mx-auto">
            <h1 className="text-3xl font-bold text-center text-white">
              Create your account
            </h1>

            {/* Input fields and the form started */}

            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-full"
                noValidate
              >
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register('name')}
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register('email', { required: true })}
                    className="input input-bordered"
                    required
                  />
                  <div className="text-red-600 pt-2">
                    {errors.email?.type === 'required' && (
                      <p>*This field is required</p>
                    )}
                    {error && <p>Your email format is incorrect</p>}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    {...register('photo')}
                    placeholder="Put your photo url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    {...register('password', {
                      required: true,
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                        message:
                          "*Please include at least '6' digits one 'uppercase' letter and one 'lowercase' letter in the password",
                      },
                    })}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="absolute right-4 top-[55%] text-2xl cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div>
                  <div className="text-red-600 pt-2">
                    {(errors.password?.type === 'required' && (
                      <p>*This field is required</p>
                    )) ||
                      errors.password?.message}
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#8DA6E8] text-white text-xl">
                    Register
                  </button>
                </div>
              </form>
            </div>

            <p className="text-white text-center gap-2 flex justify-center sm:px-6 ">
              Already have an account?
              <Link
                to={'/login'}
                className="underline text-[#8EA7E9]  hover:text-indigo-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={1000} />
      </div>
    </div>
  );
};

export default Register;
