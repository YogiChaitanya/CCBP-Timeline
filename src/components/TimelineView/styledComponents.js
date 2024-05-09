import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-context: space-around;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  max-width: 1110px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  color: #171f46;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-heigth: 2.7;
  text-align: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.spam`
  color: #2b237c;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
