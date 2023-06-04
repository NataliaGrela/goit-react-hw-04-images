import PropTypes from 'prop-types';

const ImageGalleryItem = ({ onClick, largeImageURL, image }) => {
  return (
    <li onClick={() => onClick(largeImageURL)} className="image-gallery-item">
      <img className="image-gallery-item-image" src={image} alt="gallery" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
