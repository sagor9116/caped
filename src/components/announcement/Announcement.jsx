import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #d8a48d;
  text-align: center;
`
const AnnouncementText = styled.span`
  color: #fff;
  font-size: 12px;
  letter-spacing: 1px;
`

const Announcement = () => {
  return (
    <Wrapper>
      <AnnouncementText>
        FREE STANDARD DELIVARY ON ORDERS OVER 5000 BDT
      </AnnouncementText>
    </Wrapper>
  )
}

export default Announcement
