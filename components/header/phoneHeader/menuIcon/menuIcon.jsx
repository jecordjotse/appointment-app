import React, { useImperativeHandle, useState } from 'react'
import { DashOne, DashThree, DashTwo, MenuIconWrap } from './menuIconStyles'

const MenuIcon = React.forwardRef(({menuFunc},ref) => {
    const [clicked, setClicked] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setClicked(!clicked);
        menuFunc(clicked)
    }
    
    useImperativeHandle(ref, () => ({
      childMethod() {
        toggleBTN()
      }
    }))

    const toggleBTN = () => {
      setClicked(!clicked);
    }
  return (
      <MenuIconWrap href="#" onClick={handleClick} clicked={clicked}>
          <>
            <DashOne clicked={clicked}></DashOne>
            <DashTwo clicked={clicked}></DashTwo>
            <DashThree clicked={clicked}></DashThree>
          </>
      </MenuIconWrap>
  )
});

MenuIcon.displayName = 'MenuIcon';

export default MenuIcon