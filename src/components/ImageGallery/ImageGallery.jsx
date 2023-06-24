import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ photos, imgShow }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(photo => {
        const { id, webformatURL, tags, largeImageURL } = photo;
        return (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            imgShow={imgShow}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  imgShow: PropTypes.func.isRequired,
};