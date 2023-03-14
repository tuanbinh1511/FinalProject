import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './TrendContent.module.scss';

const cx = classNames.bind(styles);

const TrendItem = ({ ...data }) => {
  return (
    <div className={cx('trend-item', 'flex', 'items-center', 'mb-6')}>
      <img src={data.data.image} alt="item" className={cx('mr-8', 'h-24')} />
      <div>
        <h5 className={cx('mb-2')}>{data.data.name}</h5>
        <FontAwesomeIcon className={cx('text-yellow-200')} icon={faStar} />
        <FontAwesomeIcon className={cx('text-yellow-200')} icon={faStar} />
        <FontAwesomeIcon className={cx('text-yellow-200')} icon={faStar} />
        <FontAwesomeIcon className={cx('text-yellow-200')} icon={faStar} />
        <FontAwesomeIcon className={cx('text-yellow-200')} icon={faStar} />
        <p className={cx('mt-2', 'font-bold')}>{data.data.price}</p>
      </div>
    </div>
  );
};

export default TrendItem;
