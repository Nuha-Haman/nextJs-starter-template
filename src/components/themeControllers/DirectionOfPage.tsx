import { ActionIcon, useDirection } from "@mantine/core";
import { PilcrowLeftIcon, PilcrowRightIcon } from "lucide-react";
import React, { JSX } from "react";

function DirectionOfPage(): JSX.Element {
  const { toggleDirection, dir } = useDirection();

  return (
    <>
      <ActionIcon
        onClick={() => toggleDirection()}
        variant="default"
        radius="md"
        size="lg"
        color="red"
      >
        {dir === "rtl" ? (
          <PilcrowLeftIcon color="#000" absoluteStrokeWidth />
        ) : (
          <PilcrowRightIcon color="#000" absoluteStrokeWidth />
        )}
      </ActionIcon>
    </>
  );
}

export default DirectionOfPage;
