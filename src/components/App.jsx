import { ToastContainer, toast } from 'react-toastify';

import { AppStyle } from 'components/App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import './styles.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImages } from 'services/Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const toastConfig = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export class App extends Component {
  state = {
    // modal: { isOpen: false, visibleData: null },
    searchName: '',
    hits: [],
    isLoading: false,
    // error: null,
    // selectedPostId: null,
    currentPage: 1,
  };

  handleSearchFormSubmit = searchName => {
    this.setState({ searchName });
  };

  async componentDidUpdate(prevProps, prevState) {
    // if (prevState.modal.isOpen !== this.state.modal.isOpen) {
    //   console.log('МИ ВІДКРИЛИ АБО ЗАКРИЛИ МОДАЛКУ');
    // }

    if (prevState.searchName !== this.state.searchName) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await fetchImages(
          this.state.searchName,
          this.state.currentPage
        );
        this.setState({ hits });
        // console.log(this.state.hits);
        // const { hits } = images;
        toast.success('Your posts were successfully fetched!', toastConfig);
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(error.message, toastConfig);
      } finally {
        this.setState({ isLoading: false });
      }
      // }
    }

    // onOpenModal = data => {
    //   this.setState({
    //     modal: {
    //       isOpen: true,
    //       visibleData: data,
    //     },
    //   });
    // };

    // onCloseModal = () => {
    //   this.setState({
    //     modal: {
    //       isOpen: false,
    //       visibleData: null,
    //     },
    // });
  }

  showLoadMoreButton() {
    // btnLoadMore.classList.remove('is-hidden');
  }

  hideLoadMoreButton() {
    // btnLoadMore.classList.add('is-hidden');
  }

  async onLoadMore() {
    this.state.currentPage += 1;

    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImages(
        this.state.searchName,
        this.state.currentPage
      );
      if (hits.length === 0) {
        this.hideLoadMoreButton();

        return;
      }
      console.log(totalHits);

      // renderImages(hits);
      // lightbox.refresh();
      // if (currentPage >= totalHits / per_page) {
      //   hideLoadMoreButton();
      //   showEndOfResultsMessage();
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    // console.log(this.state.searchName);
    // console.log(this.state.images);
    // console.log(this.state.hits);
    return (
      <AppStyle>
        <Searchbar
          onSubmit={this.handleSearchFormSubmit}
          toastConfig={toastConfig}
        />
        {this.state.hits && <ImageGallery hits={this.state.hits} />}
        <Button />
        <ToastContainer />
        {this.state.isLoading && (
          <Loader />
        )}

      </AppStyle>
    );
  }
}
