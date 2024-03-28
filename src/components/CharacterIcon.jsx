import CharacterIconBackground from '../assets/svgs/CharacterIconBackground.svg';

const CharacterIcon = ({ characterName = 'name', characterImage, className }) => {
  return (
    <div className={`relative ${className}`}>
      <h3 className='text-white text-xl font-semibold pb-2'>{characterName}</h3>
      <div className='bg-[url(/src/assets/svgs/CharacterIconBackground.svg)] bg-cover'>
        <img 
          src={characterImage}
          className='p-[10%] -translate-y-[3%]'
        />
      </div>
    </div>
  )
}

export default CharacterIcon;