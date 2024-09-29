import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

interface ConfigProvider {
  children: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProvider> = ({
  children,
}): React.ReactNode => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
};

export default ConfigProvider;
