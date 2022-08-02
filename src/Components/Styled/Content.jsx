import styled from 'styled-components'

export const BoxContent = styled.div`
    display: flex;
    flex-direction: ${props => props.c ? 'column' : 'row'};
    height: auto;
    padding: 10px;
    `

export const Content = styled.div`
    border-radius: 5px;
    padding: 20px;
    width: ${props => props.fw && '100%'};
    background-color: #f7f7f7;
    box-shadow: 5px 5px 13px -3px rgba(0,0,0,0.7);
    -webkit-box-shadow: 5px 5px 13px -3px rgba(0,0,0,0.7);
    -moz-box-shadow: 5px 5px 13px -3px rgba(0,0,0,0.7);
    ${props => props.flex && `
      display: flex;
      justify-content: space-around;
      align-items: center;
    `};
     ${props => props.mb10 && `
        margin-bottom: ${props.mb10 * 10}px;
    `};
    ${props => props.np && `
        padding: 0;
    `};
`

export const FillCenter = styled.div`
      display: flex;
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`

export const ButtonCTA = styled.button`
    border-radius: 5px;
    width: ${props => !props.auto && '100%'};
    padding: 15px;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1.2px;
    border:none;
    text-transform: uppercase;
    margin-top: 8px;
    color: white;
    background-color: #222;
    cursor: pointer;
`

export const LabelCTA = styled.label`
    font-weight: 600;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #222;
    margin-top: 5px;
    text-align: center;
`
