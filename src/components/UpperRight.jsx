import { Card } from './Card';

export const UpperRight = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <div className='h-24 w-24 relative'>
          <img className='h-24 w-24 mb-2 rounded-full object-cover' src='https://picsum.photos/300' alt='placeholder' />
        </div>
        <span className='text-xl text-left mt-4 font-bold '>Richard Roe</span>
        <div className='rounded-xl inline-block text-sm bg-slate-700'>
          <span className=' text-blue-600'>Manager of Beign Behind Schedule</span>
        </div>
      </Card>
    </div>
  );
};
