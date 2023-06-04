import PropTypes from 'prop-types';

const Button = ({ setPage, children }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={setPage}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  setPage: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
