import { Component } from 'react';
import { fetchQuery } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    searchValue: '',
    page: 1,
    error: null,
    isLoading: false,
    modal: '',
  };

  async componentDidUpdate(prevState, prevProps) {
    if (
      this.state.searchValue !== prevProps.searchValue ||
      this.state.page !== prevProps.page
    ) {
      try {
        this.setState({ isLoading: true });

        const photos = await fetchQuery(
          this.state.searchValue,
          this.state.page
        );

        photos.map(photo => {
          return this.setState(prevState => ({
            photos: [
              ...prevState.photos,
              {
                id: photo.id,
                webformatURL: photo.webformatURL,
                largeImageURL: photo.largeImageURL,
                tags: photo.tags,
              },
            ],
          }));
        });
      } catch (error) {
        this.setState({ error });
        console.log(this.state.error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  searchValue = evt => this.setState({ photos: [], searchValue: evt });

  showPhotos = () => {
    const { photos } = this.state;
    return photos;
  };

  handleLoadBtn = () => {
    if (this.state.photos.length < 12) return 'none';
  };

  loadMorePhotos = evt => {
    if (evt) {
      this.setState({ page: this.state.page + 1 });

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  handleModal = imgShow => this.setState({ modal: imgShow });

  modalClose = evt => this.setState({ modal: evt });

  photosIntoModal = () => this.state.modal;

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchValue} />
        <ImageGallery
          photos={this.showPhotos()}
          imgShow={this.handleModal}
        />
        {this.state.isLoading && <Loader />}
        <div
          className="BtnContainer"
          style={{ display: this.handleLoadBtn() }}
        >
          {!this.state.isLoading && <Button onClick={this.loadMorePhotos} />}
        </div>
        {this.state.modal !== '' && (
          <Modal
            imgShow={this.photosIntoModal()}
            onClick={this.modalClose}
          />
        )}
      </>
    );
  }
}