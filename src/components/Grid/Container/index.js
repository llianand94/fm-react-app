import React from 'react';
import PropTypes from 'prop-types';

 
const Container = (props) => {
  const {children, fd='row',jc, fw='wrap', ai,...rest} = props;
  return (
    <div  style={{display:'flex',
    ...rest,
                flexDirection:{fd},
                justifyContent: {jc},
                flexWrap:{fw},
                alignItems:{ai}} }>
      {children}
    </div>
  );
}
Container.propTypes={
  children:PropTypes.any,
  flexDirection:PropTypes.string,
  justifyContent:PropTypes.string,
  flexWrap:PropTypes.string,
  alignItems:PropTypes.string
}
export default Container;
