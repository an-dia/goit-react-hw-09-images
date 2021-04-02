import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({children, onClose}) => {
  
  const handleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return  window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);


  const handleBackdropClick = e => {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (e.currentTarget === e.target) {
      onClose();
    }
  };


  return ( createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>{children}</div>
      </div>,
      modalRoot,
    )
  );
};

Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
};

export default Modal;

// export default class Modal extends Component {
//   static propTypes = {
//     onClose: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

  // handleKeyDown = e => {
  //   console.log(e.code);
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  // handleBackdropClick = e => {
  //   console.log(e.currentTarget);
  //   console.log(e.target);
  //   if (e.currentTarget === e.target) {
  //     this.props.onClose();
  //   }
  // };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.handleBackdropClick}>
//         <div className={s.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
