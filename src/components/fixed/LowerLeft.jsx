import { Card } from '../Card';
import { Name } from './components/Name';
import { RoundedImage } from './components/RoundedImage';
import { Title } from './components/Title';

export const LowerLeft = () => {
  return (
    <div className='flex flex-col'>
      <Card>
        <RoundedImage src={'https://picsum.photos/201'} alt={'placeholder'} />
        <Name name='Jane Smith' />
        <Title title='Managing Nerd Herder' />
      </Card>
    </div>
  );
};
