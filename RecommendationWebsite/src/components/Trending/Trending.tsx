import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import images from '../../assets/Images/no_image.png';
import TrendContent from './components/TrendContent';
import { item } from 'src/test/item.type';

export type TrendType = {
  title?: string;
  item?: item;
}[];

const cx = classNames.bind(styles);

const trends: TrendType = [
  {
    title: 'HOT TREND',
    item: [
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
    ],
  },
  {
    title: 'BEST SELLER',
    item: [
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
    ],
  },
  {
    title: 'FEATURE',
    item: [
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
      {
        img: images,
        name: 'Chain bucket bag',
        price: '$50',
      },
    ],
  },
];

const Trending = () => {
  return (
    <section>
      <TrendContent
        title={'123'}
        item={{
          img: 'abc',
          name: 'Chain bucket bag',
          price: '$50',
        }}
      />
    </section>
  );
};

export default Trending;
