import CharacterIcon from '../components/CharacterIcon';
import NavBar from '../page_constants/NavBar';
import SprightlyVonwacq from '../assets/SprightlyVonwacq.webp'

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className='grid grid-cols-3 mx-[10vw] gap-12 mt-12'>
        <div className='text-white bg-mutedpurple-400 rounded-3xl col-span-2'>
          <h1 className='pt-12 pl-12 text-3xl font-semibold'>Fresh From the Kitchen</h1>
          <h2 className='pl-12 font-thin text-xl'>Infographics for Patch X.X</h2>
          <div className='pt-5 pb-12 flex flex-row px-12 gap-[75px]'>
            <CharacterIcon 
              characterName='Jing Yuan'
              characterImage={SprightlyVonwacq}
            />
            <CharacterIcon 
              characterName='Jing Yuan'
              characterImage={SprightlyVonwacq}
            />
            <CharacterIcon 
              characterName='Jing Yuan'
              characterImage={SprightlyVonwacq}
            />
          </div>
        </div>
        <div className='bg-mutedpurple-400 rounded-3xl'>
          <h1 className='px-12 pt-12 text-3xl text-white font-semibold'>Site Updates</h1>
          <ul className='px-12 mt-5'>
            <li className='p-2 text-white bg-mutedpurple-700 rounded-xl'>Lorem ipsum dolor sit amet</li>
            <li className='p-2 text-white bg-mutedpurple-700 rounded-xl mt-2'>Lorem ipsum dolor sit amet</li>
            <li className='p-2 text-white bg-mutedpurple-700 rounded-xl mt-2'>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LandingPage;