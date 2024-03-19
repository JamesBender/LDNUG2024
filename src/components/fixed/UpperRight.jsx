import { Card } from '../Card';
import { Name } from './components/Name';
import { RoundedImage } from './components/RoundedImage';
import { Title } from './components/Title';

export const UpperRight = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <RoundedImage src={'https://picsum.photos/300'} alt={'placeholder'} />
        <Name name='Richard Roe' />
        <Title title='Manager of Being Behind Schedule' />
      </Card>
    </div>
  );
};
