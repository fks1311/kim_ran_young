import styled from "styled-components";
import { BiRadioCircle } from "react-icons/bi";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function CarrerCard({ ref }) {
  const { company, period, brief, position, projects, tech, tasks } = ref;

  const containsObject = tasks.some((item) => typeof item === "object" && !Array.isArray(item));

  const TaskList = (tasks) => {
    return (
      <UlContainer type={"disc"}>
        {tasks.map((task, idx) => {
          if (typeof task === "object") {
            return (
              <Fragment key={idx}>
                <li>{task.title}</li>
                <UlContainer type={"circle"} key={idx}>
                  {task.detail.map((detail, idx) => {
                    return (
                      <li key={idx}>
                        {detail.subtitle}
                        <UlContainer type={"square"} key={idx}>
                          {detail.task_list.map((list, idx) => {
                            if (typeof list === "string") {
                              return <li key={idx}>{list}</li>;
                            }
                            return (
                              <UlContainer type={"disc"} key={idx}>
                                {list.map((data, idx) => (
                                  <li key={idx}>{data}</li>
                                ))}
                              </UlContainer>
                            );
                          })}
                        </UlContainer>
                      </li>
                    );
                  })}
                </UlContainer>
              </Fragment>
            );
          }
          return <li key={idx}>{task}</li>;
        })}
      </UlContainer>
    );
  };

  return (
    <TimeFrame>
      <SummaryFrame>
        <PeriodContainer>
          <BiRadioCircle />
          {period}
        </PeriodContainer>
        <CompanyContainer>
          <p>{company}</p>
          <p>{position}</p>
        </CompanyContainer>
      </SummaryFrame>
      <CarrerFrame>
        <TopFrame>
          <p>{brief}</p>
        </TopFrame>
        <MiddleFrame>
          <>{projects.length !== 0 && "projects"}</>
          <span>
            {projects.length !== 0 &&
              projects.map((project, idx) => (
                <span key={idx}>
                  {project}
                  {idx !== projects.length - 1 ? <>,&nbsp;</> : ""}
                </span>
              ))}
          </span>
          <>{tech.length !== 0 && "tech"}</>
          <div className="tech-list">
            {tech.map((data, idx) => (
              <span key={idx}>
                {data}
                {idx !== tech.length - 1 ? <>,&nbsp;</> : " 등"}
              </span>
            ))}
          </div>
        </MiddleFrame>
        <BottomFrame>{TaskList(tasks)}</BottomFrame>
      </CarrerFrame>
    </TimeFrame>
  );
}

const TimeFrame = styled(motion.div)`
  display: flex;
  gap: 1rem;
  line-height: 2rem;
  padding: 8rem 0px;
  background-color: white;
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    flex-direction: column;
  }
`;

const SummaryFrame = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem;
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    // flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
`;
const PeriodContainer = styled.div``;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  p:nth-child(1) {
    font-size: 2.5rem;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 1.3rem;
    font-weight: lighter;
    font-style: italic;
    color: #0b0c0f;
    letter-spacing: 0.1rem;
  }
  @media ${({
      theme: {
        media: { tablet },
      },
    }) => tablet} {
    // flex-direction: row;
    margin-top: 0;
    align-items: flex-start;
  }
`;

const CarrerFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #3d3d3d;
  letter-spacing: 0.1rem;
  min-height: 10vh;
  margin-top: 4.5rem;
`;
const TopFrame = styled.div``;
const MiddleFrame = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    word-break: normal;
    white-space: normal;
  }
`;
const BottomFrame = styled(motion.div)`
  margin-top: 1.5rem;
`;
const UlContainer = styled.ul`
  list-style-type: ${({ type }) => type};
  padding-inline-start: 1em;
  li {
    line-height: 3rem;
  }
`;
