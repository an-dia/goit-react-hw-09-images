import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => {
  const [imgName, setImgName] = useState('');
  
  const handleImgNameChange = event => {
    setImgName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imgName.trim() === '') {
      return toast.error('Please, add name pokemon!');
    }

    onSubmit(imgName);
    setImgName('');
  };

  return (
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imgName}
            onChange={handleImgNameChange}
          />
        </form>
      </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

// export default class Searchbar extends Component {
//   state = {
//     imgName: '',
//   };

//   handleImgNameChange = event => {
//     this.setState({ imgName: event.currentTarget.value.toLowerCase() });
//   };

  // handleSubmit = event => {
  //   const { imgName } = this.state;
  //   event.preventDefault();

  //   if (imgName.trim() === '') {
  //     return toast.error('Please, add name pokemon!');
  //   }

  //   this.props.onSubmit(imgName);
  //   this.setState({ imgName: '' });
  // };

//   render() {
//     const { imgName } = this.state;

//     return (
      // <header className={s.Searchbar}>
      //   <form onSubmit={this.handleSubmit} className={s.SearchForm}>
      //     <button type="submit" className={s.SearchFormButton}>
      //       <span className={s.SearchFormButtonLabel}>Search</span>
      //     </button>

      //     <input
      //       className={s.SearchFormInput}
      //       type="text"
      //       autoComplete="off"
      //       autoFocus
      //       placeholder="Search images and photos"
      //       value={imgName}
      //       onChange={this.handleImgNameChange}
      //     />
      //   </form>
      // </header>
//     );
//   }
// }
