import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const Btn = (props) => {
    return <Button {...props}>{props.children}</Button>;
};
Btn.propTypes = {
    variant: PropTypes.string,
    style: PropTypes.object,
};

Btn.defaultProps = {
    variant: 'outlined',
};

export default Btn;
