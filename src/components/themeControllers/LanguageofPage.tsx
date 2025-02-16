import { ActionIcon } from "@mantine/core";
import { LanguagesIcon } from "lucide-react";
import React from "react";

import { useAppDispatch } from "@/redux/hooks";
import { changeLang } from "../../redux/features/themeControllers/ThemeSlice";

function LanguageofPage() {
  const dispatch = useAppDispatch();
  return (
    <>
      <ActionIcon
        onClick={() => dispatch(changeLang())}
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
