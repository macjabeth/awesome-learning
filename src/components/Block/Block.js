import React from "react";
import PropTypes from "prop-types";

export const __DATA_ENZYME_IDS = {
  RENDERED_ELEMENT: "Block-RenderedElement"
};

const Block = ({
  is,
  children,
  mt,
  mb,
  ml,
  mr
}) => {
  const RenderedElement = is;
  return (
    <RenderedElement
      style={{
        marginTop: `${mt}`,
        marginRight: `${mr}`,
        marginBottom: `${mb}`,
        marginLeft: `${ml}`
      }}
      data-enzyme-id={__DATA_ENZYME_IDS.RENDERED_ELEMENT}
    >
      {children}
    </RenderedElement>
  );
};

Block.propTypes = {
  is: PropTypes.string
};

Block.defaultProps = {
  is: "div",
  mb: "0px",
  mr: "0px",
  mt: "0px",
  ml: "0px"
};

export default Block;
