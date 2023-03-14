import { faCar, faMoneyBill, faCircleInfo, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Services.module.scss';

const cx = classNames.bind(styles);

const Services = () => {
  return (
    <div
      className={cx(
        'services-list',
        'mt-12',
        'mb-12',
        'flex',
        'flex-col',
        'ml-8',
        'ml-24 mr-24 flex-wrap justify-between md:flex-row',
        'lg:mx-32',
      )}
    >
      <div className={cx('services-item', 'mb-8')}>
        <FontAwesomeIcon className={cx('icon')} icon={faCar} />
        <div>
          <h2 className="mb-2 font-bold">Free Shipping</h2>
          <p>For all order over $99</p>
        </div>
      </div>
      <div className={cx('services-item', 'mb-8')}>
        <FontAwesomeIcon className={cx('icon')} icon={faMoneyBill} />
        <div>
          <h2 className="mb-2 font-bold">Money Back Guarantee</h2>
          <p>If good have Problems</p>
        </div>
      </div>
      <div className={cx('services-item', 'mb-8', 'ml-0')}>
        <FontAwesomeIcon className={cx('icon')} icon={faCircleInfo} />
        <div>
          <h2 className="mb-2 font-bold">Online Support 24/7</h2>
          <p>Dedicated support</p>
        </div>
      </div>
      <div className={cx('services-item', 'mb-8', 'md: pr-6')}>
        <FontAwesomeIcon className={cx('icon')} icon={faHeadphones} />
        <div>
          <h2 className="mb-2 font-bold">Payment Secure</h2>
          <p>100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
