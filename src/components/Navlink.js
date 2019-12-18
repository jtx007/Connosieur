import React from 'react'
import { Link } from '@reach/router'

    const Navlink = props => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
        return {
            className: isCurrent ? "button is-warning" : "button is-dark"
        };
        }}
    />
    );

export default Navlink;