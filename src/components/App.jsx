import axios from 'axios';

import { AppStyle } from 'components/App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import './styles.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImages } from 'services/Api';

export class App extends Component{
  state = {
    modal: { isOpen: false, visibleData: null },
    images: [],
    isLoading: false,
    error: null,
    selectedPostId: null,
  };

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
  //   });
  // };
  
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const posts = await fetchImages();
      this.setState({ posts });
      // toast.success('Your posts were successfully fetched!', toastConfig);
    } catch (error) {
      this.setState({ error: error.message });
      // toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  
  
  return (
    <AppStyle
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      <Searchbar />
      <ImageGallery/>
    </AppStyle>
  );
};
