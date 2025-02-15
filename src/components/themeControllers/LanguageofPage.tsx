import { ActionIcon } from "@mantine/core";
import { LanguagesIcon } from "lucide-react";
import React from "react";
import { changeLanguage } from "@/utils/changeLanguage";

function LanguageofPage() {
  return (
    <>
      <ActionIcon
        onClick={() => changeLanguage()}
        variant="default"
        radius="md"
        size="lg"
        color="red"
      >
        <LanguagesIcon />
      </ActionIcon>
    </>
  );
}

export default LanguageofPage;
