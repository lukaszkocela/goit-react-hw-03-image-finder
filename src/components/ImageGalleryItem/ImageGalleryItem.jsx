import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  const { id, webformatURL, largeImageURL, tags, imgShow } = props;

  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      value={id}
      onClick={() => imgShow(largeImageURL)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  imgShow: PropTypes.func,
};