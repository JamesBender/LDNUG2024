import { Card } from './Card';

export const LowerLeft = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <div className='h-24 w-24 relative'>
          <img className='h-24 w-24 mb-2 rounded-full object-cover' src='https://picsum.photos/201' alt='placeholder' />
        </div>
        <span className='text-2xl text-left mt-4 '>Jane Smith</span>
        <div className='rounded-xl inline-block text-sm bg-slate-300'>
          <span className=' text-blue-400'>Managing Nerd Herder</span>
        </div>
      </Card>
    </div>
  );
};
