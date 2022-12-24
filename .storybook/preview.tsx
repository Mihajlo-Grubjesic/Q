import React from "react";
import { ThemeProvider } from "styled-components";
import { DecoratorFn } from "@storybook/react";

import { GlobalStyles } from "../src/styles/GlobalStyles";
import { darkTheme, lightTheme } from "../src/theme/themes";

export const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyles />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [withTheme];
