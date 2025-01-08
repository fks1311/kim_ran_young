import { BiRadioCircle } from "react-icons/bi";
import Image from "next/image";
import profile from "@/lib/image.jpeg";
import me from "@/lib/me.jpg";

// ABOUT ME 2문단!!!

export default function AboutMeFrame() {
  return (
    <div className="AboutFrame">
      <div className="profile">
        <Image
          src={me}
          height={500}
          style={{
            borderRadius: "10px",
          }}
          alt="profile"
        />
      </div>
      <div className="about">
        <div className="sub-title">
          <BiRadioCircle />
          ABOUT ME
        </div>
        <div className="intro">
          <div className="name">
            KIM RAN YOUNG<span>김란영</span>
          </div>
          <div className="brief-info">
            <span>TEL.</span>
            <span>010.2994.3118</span>
            <span>E-mail.</span>
            <span>fks1311@gmail.com</span>
            <span>GIT.</span>
            <span>https://github.com/fks1311</span>
            <span>BLOG.</span>
            <span>https://velog.io/@well_log/posts</span>
          </div>
        </div>
        <div className="brief-intro">
          <p>
            Janet was a creative freelancer based in New York City who specialized in app design and web design. She had
            years of experience under her belt, and had the unique skillset needed to craft stunning websites that
            captured each client's individual brand identity.
          </p>
          <p>
            When it came to designing mobile or web-based applications, Janet had a deep understanding of UX principles,
            such as interaction design, visual design, animation. She also had the ability to create custom user
            interfaces and experiences tailored specifically to each client's needs.
          </p>
        </div>
      </div>
      <style jsx>{`
        .AboutFrame {
          display: flex;
          gap: 2rem;
          width: 100%;

          .profile {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70vh;
            border-radius: 10px;
            background-color: black;
          }
          .about {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 5rem;
            padding: 2rem;

            .sub-title {
              font-size: 1.5rem;
            }

            .intro {
              display: flex;
              flex-direction: column;
              gap: 2rem;
              .name {
                font-size: 7rem;
                font-weight: lighter;
                span {
                  font-size: 1.3rem;
                  margin-left: 1rem;
                }
              }
              .brief-info {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                max-width: 80%;
                font-size: 1.5rem;
                padding: 1rem;
                span:nth-child(6) {
                  margin-right: 1rem;
                }
              }
            }

            .brief-intro {
              display: flex;
              flex-direction: column;
              gap: 2rem;
              font-size: 2rem;
              font-weight: lighter;
              max-width: 80%;
              line-height: 3rem;
            }
          }
        }
      `}</style>
    </div>
  );
}
