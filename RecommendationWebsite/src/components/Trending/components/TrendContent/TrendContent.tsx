import classNames from 'classnames/bind';
import styles from './TrendContent.module.scss';
import TrendItem from './TrendItem';
import images from '../../../../assets/Images/no_image.png';

const cx = classNames.bind(styles);

interface trends {
  title: string;
}

type data = {
  name: string;
  price: string;
  image: string;
}[];

const items: data = [
  {
    name: 'Chian bucket bag',
    price: '54$',
    image: images,
  },
  {
    name: 'Chian bucket bag',
    price: '54$',
    image: images,
  },
  {
    name: 'Chian bucket bag',
    price: '54$',
    image: images,
  },
];

const TrendContent = ({ title }: trends) => {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title', 'mb-8', 'font-bold')}>{title}</h3>
      <div className={cx('listitem')}>
        {items.map((item, index) => (
          <TrendItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendContent;
