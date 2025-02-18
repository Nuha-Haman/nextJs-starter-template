"use client";

import { Button, Group, useMantineColorScheme } from "@mantine/core";
import React, { JSX } from "react";

export default function ColorSchemeToggle(): JSX.Element {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <React.Fragment>
      <Group justify="center" mt="xl">
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      </Group>
    </React.Fragment>
  );
}
