
import styled from 'styled-components'

export const List = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  @media ${props => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    padding-bottom: 0;
    justify-items: center;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    padding-bottom: 0;
    justify-items: left;
  }
`

export const ListItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
    background: #0E131F;
    min-width: 150px;
    margin-bottom: 20px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
  }
`

export const ListItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const ListItemDate = styled.p`
  font-size: 15px;
  margin-left: 21px;
  width: 100%;
  line-height: 20px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 10px;
    line-height: 15px;
    margin-left: 16px;
    overflow: visible;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 15px;
    margin-left: 16px;
    overflow: visible;
  }
`

export const ListItemText = styled.p`
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    line-height: 16px;
    padding-right: 0;
  }
`
