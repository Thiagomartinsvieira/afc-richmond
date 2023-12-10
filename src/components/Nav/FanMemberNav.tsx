const FanMemberNav = () => {
  return (
    <div>
      <nav className="flex flex-row justify-around items-center bg-black p-1">
        <div className="flex text-center justify-center items-center">
          <img
            src="https://www.asumidsouth.edu/wp-content/uploads/2021/10/Greyhounds_dog_head.png"
            alt="AFC Richmond logo"
            width="90px"
          />
          <h2 className="text-lg font-normal text-center text-white pl-5">
            Richmonites
          </h2>
        </div>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            Home
          </a>
        </ul>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            Plans
          </a>
        </ul>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            Richmond+
          </a>
        </ul>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            experiences
          </a>
        </ul>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            FAQ
          </a>
        </ul>
        <ul>
          <a
            href=""
            className="bg-red-500 p-2 rounded-full hover:bg-red-600 
            transition duration-300 cursor-pointer"
          >
            I want to join
          </a>
        </ul>
        <ul>
          <a href="" className="text-white hover:text-gray-300">
            Sign In
          </a>
        </ul>
      </nav>
    </div>
  )
}

export default FanMemberNav
