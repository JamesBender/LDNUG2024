import { Card } from '../Card';
import { RoundedImage } from './components/RoundedImage';
import { Name } from './components/Name';
import { Title } from './components/Title';

export const LowerRight = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <RoundedImage src={'https://picsum.photos/202'} alt={'placeholder'} />
        <Name name='Robert Smith' />
        <Title title='Not the one from The Cure' />
      </Card>
    </div>
  );
};
