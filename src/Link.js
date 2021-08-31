import React from 'react';
const Link = ({ to, updatePathname, children, }) => (React.createElement("a", { href: to, onClick: (event) => {
        event.preventDefault();
        updatePathname(to);
    } }, children));
export default Link;