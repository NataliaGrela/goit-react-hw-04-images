import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ onClick, images }) => {
  return (
    <ul className="image-gallery">
      {images.map(item => (
        <ImageGalleryItem
          onClick={() => onClick(item.largeImageURL)}
          largeImageURL={item.largeImageURL}
          image={item.webformatURL}
          key={item.id}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
