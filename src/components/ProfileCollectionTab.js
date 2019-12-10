import React from "react";
import { Link } from "@reach/router";

const ProfileCollectionTab = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? "is-active is-size-2" : "is-size-2"
      };
    }}
  />
);

export default ProfileCollectionTab;
