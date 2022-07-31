import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Github, LinkedIn } from "../components/AllSvgs"
import {DarkTheme} from "../components/Themes"


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin: .5rem 0;
    }
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`

const SocialCons = (props) => {
  return (
    <div>
        <Icons>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname: "https://github.com/brycehayes11"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname: "https://www.linkedin.com/in/brycehayes11"}}>
                <LinkedIn width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
            <Line color={props.theme} />
        </Icons>
    </div>
  )
}

export default SocialCons