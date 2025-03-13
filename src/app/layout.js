"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/style/registry";
import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <NavBar />
            <div key={router}>{children}</div>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
