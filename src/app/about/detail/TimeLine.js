import { BiRadioCircle } from "react-icons/bi";
import styled from "styled-components";
import TimeLineCard from "./TimeLineCard";
import carrer from "@/lib/carrer.json";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function TimeLineFrame() {
  return (
    <TimeFrame>
      <SubTitle>
        <BiRadioCircle />
        TIMELINE
      </SubTitle>
      <BoderBottomLine />
      <TimeLine>
        {carrer.map((carrer, idx) => (
          <Fragment key={idx}>
            <TimeLineCard ref={carrer} />
            <BoderBottomLine />
          </Fragment>
        ))}
      </TimeLine>
    </TimeFrame>
  );
}

const TimeFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
  font-size: 1.5rem;
`;
const BoderBottomLine = styled.div`
  border: 1px solid #f5f7f8;
`;
const TimeLine = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
