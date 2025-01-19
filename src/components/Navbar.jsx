/**
 *  @copyright 2025 Measum-Shah
 * @license Apache-2.0 */

// Modules
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the active link
    const lastActiveLink = useRef();
    const activeBox = useRef();

    // Initialize the active box position
    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    };

    useEffect(initActiveBox, [activeIndex]); // Reinitialize when activeIndex changes

    const navItems = [
        { label: 'Home', link: '#home', className: 'nav-link' },
        { label: 'About', link: '#about', className: 'nav-link' },
        { label: 'Work', link: '#work', className: 'nav-link' },
        { label: 'Reviews', link: '#reviews', className: 'nav-link' },
        { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map((item, index) => (
                <a
                    href={item.link}
                    key={index}
                    ref={index === activeIndex ? lastActiveLink : null} // Assign ref to active link
                    className={`${item.className} ${
                        index === activeIndex
                            ? 'text-zinc-800 hover:text-zinc-600' // Active link changes color on hover
                            : 'text-zinc-400' // Inactive links retain color on hover
                    }`} // Apply styles based on active state
                    onClick={() => setActiveIndex(index)} // Update activeIndex on click
                >
                    {item.label}
                </a>
            ))}

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
