import { useState, useEffect, useRef } from 'react';
import GuobaPng from '../assets/GuobaHighDef 2.png';
import GuobaHalfPng from '../assets/GuobaHalf.png';
import YoutubeIcon from '../assets/socials_icons/youtube-icon.png';
import HamburgerMenu from '../assets/svgs/menu-burger-horizontal-svgrepo-com.svg';
import XIcon from '../assets/socials_icons/x-icon.png';
import useWindowDimensions from '../utility/useWindowDimensions';

const NavBar = () => {
  const { height, width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false); // controls whether shadow is shown
  const [menuVisible, setMenuVisible] = useState(false); // controls the actual sliding menu
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setShowMenu(true);
    setTimeout(() => setMenuVisible(true), 25);
  }

  const handleCloseMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setShowMenu(false), 300);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <>
      {width > 1000 ?
        <div className='relative'>
          <img 
            src={GuobaPng}
            className='absolute h-[14vh] mt-[1vh] z-10' 
          />
          <div className='bg-mutedpurple-500 h-[9vh] flex flex-row items-center z-0 relative'>
            <h1 className='text-white text-3xl font-semibold ml-[10rem]'>Guoba's Kitchen</h1>
            <div className='ml-auto mr-10 flex flex-row gap-4'> { /* socials */ }
              <a href='https://www.youtube.com/@guobacertified' target='_blank'><img 
                src={YoutubeIcon} 
                className='h-[4vh]'
              /></a>
              <a href='https://twitter.com/guobacertified?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank'><img 
                src={XIcon}
                className='h-[4vh]'
              /></a>
            </div>
          </div>
          <div className='bg-zinc-900 h-[7vh] flex flex-row items-center z-20 relative bg-opacity-75'>
            <ul className='text-white text-3xl font-light flex flex-row gap-[5rem] ml-[2rem]'>
              <li className='cursor-pointer'><h1>Characters</h1></li>
              <li className='cursor-pointer'><h1>Light Cones</h1></li>
              <li className='cursor-pointer'><h1>Guides</h1></li>
              <li className='cursor-pointer'><h1>Tools</h1></li>
              <li className='cursor-pointer'><h1>Resources</h1></li>
            </ul>
          </div>
        </div>
      :
        <div className='relative overflow-x-hidden overflow-y-hidden'>
          <div className='bg-mutedpurple-500 h-[6vh] flex flex-row items-center relative'>
            <img 
              className='h-[6vh]'
              src={GuobaHalfPng}
            />
            <h1 className='text-white font-semibold text-3xl'>Guoba's Kitchen</h1>
            <div className='ml-auto mr-4 cursor-pointer' onClick={handleMenuClick}>
              <img 
                src={HamburgerMenu} 
                className='h-[4vh]'
              />
            </div>
          </div>
          {showMenu &&
            <div className={`fixed top-0 bottom-0 left-0 right-0 z-[500] ${menuVisible && 'bg-slate-800 bg-opacity-50'}`}>
              <div className={`absolute top-0 h-[100vh] right-0 bg-amber-50 w-[300px] transition ease-in-out duration-300 ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`} ref={menuRef}>
                <ul className='flex flex-col'>
                  <li className='text-xl font-semibold p-4 hover:bg-amber-100 cursor-pointer'><h2>Characters</h2></li>
                  <li className='text-xl font-semibold p-4 hover:bg-amber-100 cursor-pointer'><h2>Light Cones</h2></li>
                  <li className='text-xl font-semibold p-4 hover:bg-amber-100 cursor-pointer'><h2>Guides</h2></li>
                  <li className='text-xl font-semibold p-4 hover:bg-amber-100 cursor-pointer'><h2>Tools</h2></li>
                  <li className='text-xl font-semibold p-4 hover:bg-amber-100 cursor-pointer'><h2>Resources</h2></li>
                </ul>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}

export default NavBar;