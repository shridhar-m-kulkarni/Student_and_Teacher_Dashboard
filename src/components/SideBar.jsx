import { FcGraduationCap } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "./MyContext";

const SideBar = () => {
  const navigate = useNavigate();

  const { clicked, setClicked } = useContext(MyContext);

  return (
    <div className='w-16 sm:w-20 md:w-56 lg:w-64 h-screen sticky top-0 left-0 bg-amber-500 flex flex-col justify-between items-center py-5 sm:py-8 shrink-0 overflow-y-auto'>

      <div className='w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-amber-50 p-1 rounded-xl sm:rounded-2xl shrink-0'>
        <FcGraduationCap className='w-full h-full' />
      </div>

      <div className='w-full'>
        <ul className='flex flex-col items-center md:items-stretch px-1 md:px-5 gap-6 sm:gap-8 md:gap-10 text-xs sm:text-sm md:text-xl lg:text-2xl text-amber-50 font-medium'>

          <li
            onClick={() => setClicked(false)}
            className='hover:text-black cursor-pointer text-center md:text-left'
          >
            <span className='hidden md:inline'onClick={()=>{setClicked(false)}}>Dashboard</span>
            <span className='md:hidden'>🏠</span>
          </li>

          <hr className='w-full border-amber-200' />

          <li className='hover:text-black cursor-pointer text-center md:text-left'>
            <span className='hidden md:inline'>Assignments</span>
            <span className='md:hidden'>📝</span>
          </li>

          <hr className='w-full border-amber-200' />

          <li className='hover:text-black cursor-pointer text-center md:text-left'>
            <span className='hidden md:inline'>Notifications</span>
            <span className='md:hidden'>🔔</span>
          </li>

          <hr className='w-full border-amber-200' />

          <li
            onClick={() => setClicked(true)}
            className='hover:text-black cursor-pointer text-center md:text-left'
          >
            <span className='hidden md:inline'>Time Table</span>
            <span className='md:hidden'>📅</span>
          </li>

          <hr className='w-full border-amber-200' />

        </ul>
      </div>

      <button
        className='px-2 sm:px-3 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-xl lg:text-2xl rounded-xl md:rounded-2xl bg-amber-50 hover:bg-amber-500 hover:border-2 hover:border-amber-50 hover:text-amber-50 transition-all duration-300 shrink-0'
        onClick={() => navigate("/")}
      >
        <span className='hidden md:inline'>Logout</span>
        <span className='md:hidden'>🚪</span>
      </button>

    </div>
  );
};

export default SideBar;