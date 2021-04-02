import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClose }) => {
  
  const handleClick = largeImageURL => {
    onClose(largeImageURL);
  };
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} onClick={() => handleClick(largeImageURL)} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string,
      }),
    ).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageGallery;

// class ImageGallery extends Component {
//   static propTypes = {
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number,
//         webformatURL: PropTypes.string.isRequired,
//         tags: PropTypes.string.isRequired,
//         largeImageURL: PropTypes.string,
//       }),
//     ).isRequired,
//     onClose: PropTypes.func.isRequired,
//   };

//   handleClick = largeImageURL => {
//     this.props.onClose(largeImageURL);
//   };
//   render() {
//     const { images } = this.props;
//     return (
//       <ul className={s.ImageGallery}>
//         {images.map(({ id, webformatURL, tags, largeImageURL }) => (
//           <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} onClick={() => this.handleClick(largeImageURL)} />
//         ))}
//       </ul>
//     );
//   }
// }

// export default ImageGallery;
