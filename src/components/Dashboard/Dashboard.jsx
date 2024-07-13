import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {



  return (
    <>
      <Navbar />
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
Build your
            <span className="text-indigo-600"> Resume </span>
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
Build your resume in 10 minutes with different style.
          </p>
          <div>
            <p className="text-gray-800 py-3">
Build your resume right now
            </p>
            <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
              <Link to="/build">
                Build Your Resume
              </Link>
            </button>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img src="https://img.freepik.com/free-psd/clean-modern-resume-portfolio-cv-template_120329-3605.jpg?w=740&t=st=1720841604~exp=1720842204~hmac=fb7a7d5938f39b3b585ca3293899e19229518566746920a874346f3299568687"
            className="w-full mx-auto sm:w-10/12  lg:w-full" />
        </div>
      </section>
    </>
  )
}

export default Dashboard;
