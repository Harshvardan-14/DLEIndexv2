import './Dropdown2.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';



function Dropdown2() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const dropdownRef = useRef(null);

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit>
        <div className="menu3">
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Websites
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Apps
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back to Menu</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Axis Bank <Link to={'/Marketing'} onClick={() => setClick(false)} /></DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Bank of Baroda</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Bank of India</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Canara Bank</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CITI</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>DBS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HDFC</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>ICICI</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>IDBI</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Indian Bank</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>IndusInd</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Kotak Mahindra</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>SBI</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>PNB</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit>
        <div className="menu2">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Back to Menu</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Tata Sky</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>DishTv</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Airtel</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Netflix</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Amazon Prime</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>YouTube</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Dropdown2;
