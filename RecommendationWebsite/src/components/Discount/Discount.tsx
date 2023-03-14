import classNames from 'classnames/bind';
import styles from './Discount.module.scss';
import images from '../../assets/Images/no_image.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Discount = () => {
  return (
    <section className={cx('discount', 'flex', 'flex-col', 'mx-20 justify-evenly lg:flex-row')}>
      <img src={images} alt="images" className={cx('lg:flex-1')} />
      <div className={cx('discount-content', 'lg:flex-1')}>
        <div className={cx('discount-text')}>
          <span>DISCOUNT</span>
          <h2>Summer 2023</h2>
          <div>
            <span className={cx('text-sale')}>SALE</span>
            <h2 className={cx('persent')}>50%</h2>
          </div>
        </div>
        <div className={cx('link-shop')}>SHOP NOW</div>
      </div>
    </section>
  );
};

export default Discount;
