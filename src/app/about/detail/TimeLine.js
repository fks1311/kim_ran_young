import { BiRadioCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import styled from "styled-components";
import CarrerCard from "./CarrerCard";
import carrer from "@/lib/carrer.json";

export default function TimeLineFrame() {
  return (
    <TimeFrame>
      <SubTitle>
        <BiRadioCircle />
        TIMELINE
      </SubTitle>
      <TimeLine>
        {carrer.map((carrer, idx) => (
          <CardFrame key={idx}>
            <BoderBottomLine />
            <CarrerCard ref={carrer} />
          </CardFrame>
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
const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CardFrame = styled(motion.div)`
  position: sticky;
  top: 10px;
`;
