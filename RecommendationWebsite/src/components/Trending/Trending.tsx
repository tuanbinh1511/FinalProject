import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import images from '../../assets/Images/no_image.png';
import TrendContent from './components/TrendContent';

const cx = classNames.bind(styles);

const trends = [
  {
    id: 1,
    title: 'HOT TREND',
  },
  {
    id: 2,
    title: 'BEST SELLER',
  },
  {
    id: 3,
    title: 'FEATURE',
  },
];

const Trending = () => {
  return (
    <section className={cx('trending', 'flex', 'flex-col', 'mb-8', 'ml-8', 'md:flex-row', 'm-auto lg:justify-evenly')}>
      {trends.map((trend) => (
        <TrendContent key={trend.id} title={trend.title} />
      ))}
    </section>
  );
};

export default Trending;
