import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick, ...allProps }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <button className={s.Button} type="button" onClick={onClick} {...allProps}>
        Load more
      </button>
    </div>
  );
};

// Button.defaultProps = {
//   onClick: () => null,
//   children: null,
// }

Button.propTypes = {
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
