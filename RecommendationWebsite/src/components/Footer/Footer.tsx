import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitch, faYoutube, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('flex', 'justify-center', 'flex-col', 'ml-8', 'mr-0 lg:ml-0')}>
      <div className={cx('footer', 'flex', 'flex-col', 'justify-between', 'mr-8 flex-wrap md:flex-row', ' lg: justify-evenly')}>
        <div className={cx('info', 'basis-1/3', 'mb-6')}>
          <h5 className={cx('title', 'mb-4', 'font-bold')}>ASHION</h5>
          <p className={cx('description')}>
            Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở
            Đông Nam Á.
          </p>
        </div>

        <div className={cx('links', 'basic-1/6')}>
          <h5 className={cx('title', 'mb-4', 'font-bold')}>Quick Links</h5>
          <ul className={cx('link-list')}>
            <li className={cx('items')}>About</li>
            <li className={cx('items')}>Blogs</li>
            <li className={cx('items')}>Contact</li>
            <li className={cx('items')}>FAQ</li>
          </ul>
        </div>

        <div className={cx('account', 'basic-1/6')}>
          <h5 className={cx('title', 'mb-4', 'font-bold')}>Account</h5>
          <ul className={cx('account-list')}>
            <li className={cx('items')}>My Account</li>
            <li className={cx('items')}>Orders Tracking</li>
            <li className={cx('items')}>Checkout</li>
            <li className={cx('items')}>Wishlist</li>
          </ul>
        </div>

        <div className={cx('email', 'basic-1/3', 'mr-8', 'sm:max-md:ml-60')}>
          <h5 className={cx('title', 'mb-4', 'font-bold')}>Newsletter</h5>
          <div className={cx('email-btn')}>
            <input placeholder="Email...." />
            <button>Subscribe</button>
          </div>
          <div className={cx('media-list')}>
            <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
            <FontAwesomeIcon className={cx('icon')} icon={faTwitch} />
            <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
            <FontAwesomeIcon className={cx('icon')} icon={faInstagram} />
            <FontAwesomeIcon className={cx('icon')} icon={faPinterest} />
          </div>
        </div>
      </div>
      <div className={cx('copyright')}>
        <p>Copyright © 2023 All rights reserved | This template is made with by Colorlib</p>
      </div>
    </footer>
  );
}

export default Footer;
