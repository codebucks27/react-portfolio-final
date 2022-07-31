import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import ContactForm from './ContactForm';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 50%;
height: 50%;
position: absolute;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;

`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);



&>*:first-child{
margin-right: 1rem;
}
`



const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
width: 60vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    Contact Me
</Title>
<Description>
<ContactForm />
</Description>
            </Main>
 

            {/* <BigTitle text="SKILLS" top="80%" right="30%" /> */}

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
