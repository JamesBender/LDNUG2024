import { Card } from './Card';

export const LowerRight = () => {
  return (
    <div className='flex flex-col bg-gray'>
      <Card>
        <div className='h-24 w-24 relative'>
          <img className='h-24 w-24 mb-2 rounded-full object-cover' src='https://picsum.photos/202' alt='placeholder' />
        </div>
        <span className='text-xl text-blue-900 text-left mt-4'>Robert Smith</span>
        <div className='rounded-xl inline-block text-sm bg-slate-300'>
          <span className=' text-blue'>Not the one from The Cure</span>
        </div>
      </Card>
    </div>
  );
};
