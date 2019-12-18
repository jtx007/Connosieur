import React from "react";
import { Link } from "@reach/router";

const PaginationLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "button is-info" : "button"
      };
    }}
  />
);

export default PaginationLink;
