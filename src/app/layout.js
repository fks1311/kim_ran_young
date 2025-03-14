"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/style/registry";
import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <NavBar />
            <AnimatePresence mode="wait">
              <motion.div
                key={router}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
