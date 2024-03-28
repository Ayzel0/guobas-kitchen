import CharacterIconBackground from '../assets/svgs/CharacterIconBackground.svg';

const CharacterIcon = ({ characterName = 'name', characterImage, className }) => {
  return (
    <div className={`relative ${className}`}>
      <h3 className='text-white text-xl font-semibold pb-2'>{characterName}</h3>
      <img
        className='h-[200px]' 
        src={CharacterIconBackground} 
      />
      <img 
        className='absolute bottom-[26px] h-[160px] left-[20px]'
        src={characterImage} 
      />
    </div>
  )
}

export default CharacterIcon;