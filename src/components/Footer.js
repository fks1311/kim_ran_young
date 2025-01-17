import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const nav = ["HOME", "ABOUT", "PROJECT", "GIT", "BLOG", "CONTACT"];
  const onClick = (route) => {
    const externalLinks = {
      GIT: "https://github.com/fks1311",
      BLOG: "https://velog.io/@well_log/posts",
    };

    const url = externalLinks[route] || route.toLowerCase();
    url.startsWith("http") ? window.open(url, "_blank") : route === "HOME" ? router.push("/") : router.push(url);
  };

  return (
    <footer>
      <div>create. 2025 portfolio</div>
      <div className="nav">
        {nav.map((nav, idx) => (
          <p key={idx} onClick={() => onClick(nav)}>
            {nav}
          </p>
        ))}
      </div>
      <div
        onClick={() => router.push("/")}
        style={{
          letterSpacing: ".1rem",
        }}
      >
        KIMRANYOUNG
      </div>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: space-between;
          margin-top: 5rem;
          padding: 3rem 0px 1rem 0px;
          color: white;
          font-size: 1.3rem;
          border-top: 1px solid #2e313a;
          cursor: pointer;
        }
        .nav {
          display: flex;
          gap: 5rem;
        }
      `}</style>
    </footer>
  );
}

// 페이지 전환 애니메이션 적용 및 스크롤 top 적용
