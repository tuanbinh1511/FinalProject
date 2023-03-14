import classNames from 'classnames/bind';
import styles from '../Instagram.module.scss';

import images from '../../../assets/Images/no_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const InstaItem = () => {
  return (
    <div className={cx('item', 'col')}>
      <img src={images} alt="images" />
      <div className={cx('middle', 'flex', 'flex-col')}>
        <FontAwesomeIcon icon={faInstagram} />
        <span>@abc</span>
      </div>
    </div>
  );
};

export default InstaItem;
