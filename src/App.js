import React, {Component, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoaderSpinner from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';
import pixabayApi from './servises/pixabay-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

// const App = props => {
//   const [imgName, setImgName] = useState('');
//   const [images, setImages] = useState([]);
//   const [error, setErrosetImgNamer] = useState(null);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [page, setPage] = useState(1);
//   const [largeImageURL, setLargeImageURL] = useState('');
//   const [showModal, setShowModal] = useState(false);

//     const onScroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   const handleFormSubmit = imgName => {
//     setImgName(imgName);
//   };

//   const handleClickLoadMore = () => {
//     setPage(prevPage => prevPage + 1);

//     // this.onScroll();
//   };

//   const toggleModal = largeImageURL => {
//     setShowModal(prevShowModal => !prevShowModal);
//     setLargeImageURL(largeImageURL);
//   };

//   //const resetPage = () => {
//   //   setPage(1);
//   // }


//   return (
//       <div>
//         <Searchbar onSubmit={handleFormSubmit} />
//         {status === Status.RESOLVED && images.length !== 0 && <ImageGallery images={images} onClose={toggleModal} />}
//         {status === Status.PENDING && <LoaderSpinner />}
//         {status === Status.RESOLVED && images.length !== 0 && (
//           <Button onClick={handleClickLoadMore} aria-label="Найти картинку" />
//         )}

//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <img src={largeImageURL} alt={images.tags} />
//           </Modal>
//         )}
//         {status === Status.REJECTED && (
//           <div style={{ textAlign: 'center', color: 'red' }}>
//             <p>{error.message}</p>
//           </div>
//         )}
//         <ToastContainer autoClose={3000} />
//       </div>
//   )
// };

// App.propTypes = {
  
// };

// export default App;

export default class App extends Component {
  state = {
    imgName: '',
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    largeImageURL: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.imgName;
    const nextImg = this.state.imgName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg) {
      this.setState({ images: [], page: 1, status: Status.PENDING });

      pixabayApi
        .fetchImgPixabay(nextImg)
        .then(images => {
          if (images.hits.length === 0) {
            return Promise.reject(new Error(`Could not find picture for request ${nextImg}`));
            // return this.setState({
            //   error: `Could not find picture for request ${nextImg}`,
            //   status: Status.REJECTED,
            // });
          }

          window.scrollTo({ top: 0 });
          this.setState({
            images: images.hits,
            status: Status.RESOLVED,
          });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }

    if (prevPage !== nextPage && nextPage > 1) {
      console.log('nextPage', prevPage);
      console.log('nextPage', nextPage);
      this.setState({ status: Status.PENDING });
      pixabayApi
        .fetchImgPixabay(nextImg, nextPage)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
          }));

          this.onScroll();
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      // .finally(this.onScroll);
    }
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    // this.onScroll();
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  // resetPage = () => {
  //   this.setState({ page: 1 });
  // }

  render() {
    const { images, status, showModal, largeImageURL, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.RESOLVED && images.length !== 0 && <ImageGallery images={images} onClose={this.toggleModal} />}
        {status === Status.PENDING && <LoaderSpinner />}
        {status === Status.RESOLVED && images.length !== 0 && (
          <Button onClick={this.handleClickLoadMore} aria-label="Найти картинку" />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={images.tags} />
          </Modal>
        )}
        {status === Status.REJECTED && (
          <div style={{ textAlign: 'center', color: 'red' }}>
            <p>{error.message}</p>
          </div>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
