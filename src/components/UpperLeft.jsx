import { Card } from './Card';

export const UpperLeft = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <div className='h-24 w-24 relative'>
          <img className='h-24 w-24 mb-2 rounded-full object-cover' src='https://picsum.photos/200' alt='placeholder' />
        </div>
        <span className='text-xl text-left mt-4'>John Doe</span>
        <div className='rounded-xl inline-block text-sm bg-slate-300'>
          <span className=' text-blue-600'>Director of Things and Stuff</span>
        </div>
      </Card>
    </div>
  );
};
