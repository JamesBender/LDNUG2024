import { Card } from '../Card';
import { Name } from './components/Name';
import { RoundedImage } from './components/RoundedImage';
import { Title } from './components/Title';

export const UpperLeft = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <RoundedImage src={'https://picsum.photos/200'} alt={'placeholder'} />
        <Name name='John Doe' />
        <Title title='Director of Things and Stuff' />
      </Card>
    </div>
  );
};
