import React from 'react'
import { Col, Row } from 'antd'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaRegQuestionCircle} from 'react-icons/fa'
import {IoSettingsSharp} from 'react-icons/io5'
import {BsBarChartLineFill} from 'react-icons/bs'
import styled from 'styled-components'

const StyledRow = styled(Row)`
     width: 100%;
 `
const Header = () => {
  return (
       <>
            <StyledRow>
    <Col>
    <GiHamburgerMenu radius={7} size={20} color="#000" />
    <FaRegQuestionCircle radius={7} size={20} color="#000" style={{marginLeft: "5px"}} />
    </Col>
    <Col>
      Wordle
    </Col>
    <Col>
    <BsBarChartLineFill radius={7} size={20} color="#000" />
    <IoSettingsSharp radius={7} size={20} color="#000" style={{marginLeft: "5px"}} />
    </Col>
  </StyledRow>
       </>
  )
}

export default Header