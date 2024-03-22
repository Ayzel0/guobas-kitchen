import GuobaPng from '../assets/GuobaHighDef 2.png';
import GuobaHalfPng from '../assets/GuobaHalf.png';
import YoutubeIcon from '../assets/youtube-icon.png';
import XIcon from '../assets/x-icon.png';
import useWindowDimensions from '../utility/useWindowDimensions';

const NavBar = () => {
  const { height, width } = useWindowDimensions();

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
              <li><h1>Characters</h1></li>
              <li><h1>Light Cones</h1></li>
              <li><h1>Guides</h1></li>
              <li><h1>Tools</h1></li>
              <li><h1>Resources</h1></li>
            </ul>
          </div>
        </div>
      :
        <div className='relative'>
          <div className='bg-mutedpurple-500 h-[6vh] flex flex-row items-center'>
            <img 
              className='h-[6vh]'
              src={GuobaHalfPng}
            />
            <h1 className='text-white font-semibold text-3xl'>Guoba's Kitchen</h1>
            <div className='ml-auto'>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default NavBar;