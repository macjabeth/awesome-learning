import React from "react";
import PropTypes from "prop-types";
import StyledLink from "../Link";
import Block from "../Block";
import "./CourseCard.scss";

export const __DATA_ENZYME_IDS = {
  TITLE: "CourseCard-Title",
  LINK: "CourseCard-Link",
  DESCRIPTION: "CourseCard-Description"
};

const CourseCard = ({ title, description, link }) => {
  return (
    <li className="CourseCard">
      <Block is="h3" mb="16px" data-enzyme-id={__DATA_ENZYME_IDS.TITLE}>
        {title}
      </Block>
      <Block is="p" mb="16px" data-enzyme-id={__DATA_ENZYME_IDS.DESCRIPTION}>
        {description}
      </Block>
      <StyledLink variation="pill" data-enzyme-id={__DATA_ENZYME_IDS.LINK} path={link}>
        Learn {title}
      </StyledLink>
    </li>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default CourseCard;
