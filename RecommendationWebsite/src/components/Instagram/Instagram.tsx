import classNames from 'classnames/bind';
import styles from './Instagram.module.scss';

import images from '../../assets/Images/no_image.png';
import '../../assets/css/grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Instagram() {
  return (
    <div className={cx('list', 'grid')}>
      <div className={cx('row', 'no-gutters')}>
        <div className={cx('item', 'col')}>
          <img src={images} alt="images" />
          <div className={cx('middle', 'flex', 'flex-col')}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>@abc</span>
          </div>
        </div>
        <div className={cx('item', 'col')}>
          <img src={images} alt="images" />
          <div className={cx('middle', 'flex', 'flex-col')}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>@abc</span>
          </div>
        </div>
        <div className={cx('item', 'col')}>
          <img src={images} alt="images" />
          <div className={cx('middle', 'flex', 'flex-col')}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>@abc</span>
          </div>
        </div>
        <div className={cx('item', 'col')}>
          <img src={images} alt="images" />
          <div className={cx('middle', 'flex', 'flex-col')}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>@abc</span>
          </div>
        </div>
        <div className={cx('item', 'col')}>
          <img src={images} alt="images" />
          <div className={cx('middle', 'flex', 'flex-col')}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>@abc</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
