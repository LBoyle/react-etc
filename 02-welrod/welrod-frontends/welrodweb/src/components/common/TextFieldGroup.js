import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({ field, value, placeholder, error, type, onChange }) => {
  return (
    <div className={classnames({ 'has-error': error })}>
      <input
        type={type}
        name={field}
        placeholder={placeholder}
        onChange={onChange}
        value={value}/>
      {error && <span className="form-error-box">{error}</span>}
    </div>
  );
}
TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
TextFieldGroup.defaultProps = {
  type: 'text'
}
export default TextFieldGroup;
