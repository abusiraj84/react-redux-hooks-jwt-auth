import React from "react";
import styled from "styled-components";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Wave src="/images/waves/course-wave1.svg" style={{ top: "00px" }} />
      <Wave src="/images/waves/course-wave2.svg" style={{ top: "250px" }} />
      <Wave src="/images/waves/course-wave3.svg" style={{ top: "600px" }} />
      <LastWave src="/images/waves/course-wave1.svg" style={{ top: "110px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Wave = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 900px;
  overflow: hidden;
  z-index: -1;

  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
`;
const LastWave = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  clip-path: url(#clip);
  transform-origin: left top;
  background: linear-gradient(
    rgb(188, 198, 246) -18.72%,
    rgb(242, 246, 255) 37.6%
  );
  top: 1200px;
  height: 600px;

  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
`;
