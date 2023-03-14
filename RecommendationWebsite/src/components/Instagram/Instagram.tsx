import classNames from 'classnames/bind';
import styles from './Instagram.module.scss';

import images from '../../assets/Images/no_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import InstaItem from './components/InstaItem';

const cx = classNames.bind(styles);

function Instagram() {
  return (
    <div className={cx('list', 'grid', 'grid-cols-1', 'md:grid-cols-3', 'lg:grid-cols-6')}>
      <InstaItem />
      <InstaItem />
      <InstaItem />
      <InstaItem />
      <InstaItem />
      <InstaItem />
    </div>
  );
}

export default Instagram;
