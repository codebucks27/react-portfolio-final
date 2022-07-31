import React, { useState } from "react";
import styled from "styled-components";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/aac18dc0-1046-11ed-a9ac-1bde1534b8d2";

// align the form and body to the center of the screen
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 78%;
    height: 78%;
    position: relative;
    z-index: 1;
    background-color: #fafafa;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-0.5rem);
        }
    `

//change button color to blue when hovered
const Button = styled.button`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
font-size: calc(0.4em + 1vw);
padding: 0.5rem 0;
padding-left: 1rem;
padding-right: 1rem;
border-radius: 0.5rem;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}
`




const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <FormContainer className="text-2xl">Thank you! We'll be in touch soon.</FormContainer>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
    <body>
      <FormContainer className="mb-3 pt-0" >
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full position-relative"
          required
        />
      </FormContainer>
      <FormContainer className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </FormContainer>
      <FormContainer className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </FormContainer>
      <FormContainer className="mb-3 pt-0">
        <Button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </Button>
      </FormContainer>
    </body>
    </form>
  );
};

export default ContactForm;