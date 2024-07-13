import { Link } from "react-router-dom"

const Select = () => {

  const options = [
    {
      title: "Build new Resume",
      img: "https://png.pngtree.com/templates/sm/20171206/sm_5a27bc98e458c.jpg",
      link: "new",
      text: "Start a new black Resume"
    },
    {
      title: "import form Linkedin",
      img: "https://writinghub.pk/wp-content/uploads/2023/05/linkedin-profile-third.jpg",
      link: "linkedin",
      text: "Create resume from linkedIn profile"
    }
  ]

  return (

    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="py-4 my-4">
        <h1 className="text-5xl font-serif font-bold">Where Do you want to start?</h1>
      </div>
      <Cards {...{ options }} />
    </div>



  )
}


const Cards = ({ options }) => {

  return (
    <div className="flex flex-wrap justify-center">
      {
        options.map(item => (
          <Link to={item.link} key={item.title} className="group relative block bg-black h-96 w-96 m-2 rounded ">
            <img
              alt=""
              src={item.img}
              className="absolute inset-0 h-full w-full object-cover opacity-50 "
            />

            <div className="absolute bottom-1 p-4 sm:p-6 lg:p-8">

              <p className="text-xl font-bold text-white sm:text-2xl">{item.title}</p>
              <p className=" text-white">{item.text}</p>

            </div>
          </Link>
        ))
      }
    </div>

  )

}


export default Select;
