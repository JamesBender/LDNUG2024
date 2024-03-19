export const RoundedImage = ({ src, alt }) => {
  return (
    <div className='h-24 w-24 relative'>
      <img className='h-24 w-24 mb-2 rounded-full object-cover' src={src} alt={alt} />
    </div>
  );
};
