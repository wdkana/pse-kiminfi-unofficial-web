import styled from 'styled-components'

export const Navigation = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  height: auto;
  z-index: 9;
`

export const Nav = styled.div`
  display: flex;
  box-shadow: 0 -3px 2px -2px #222;
  -webkit-box-shadow: 0 -3px 2px -2px #222;
  -moz-box-shadow: 0 -3px 2px -2px #222;
`

export const NavLink = styled.button`
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
`