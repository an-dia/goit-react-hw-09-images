import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onClick }) => (
  <li className={s.ImageGalleryItem} onClick={onClick}>
    <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
