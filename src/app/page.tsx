"use client";

import {
  Container,
  Title,
  Text,
  Image,
  Center,
  Group,
  Stack,
} from "@mantine/core";

import dynamic from "next/dynamic";
import logo from "@/assets/lamah-logo.png";
import { JSX } from "react";
// Client Components:
const DirectionOfPage = dynamic(
  () => import("@/components/themeControllers/DirectionOfPage")
);
const LanguageofPage = dynamic(
  () => import("@/components/themeControllers/LanguageofPage")
);
const ColorSchemeToggle = dynamic(
  () => import("@/components/themeControllers/ColorSchemaToggle"),
  { ssr: false }
);

export default function StartPage(): JSX.Element {
  return (
    <Container>
      <Center>
        <Image
          src={logo.src} // Ensure your logo is placed in the public directory
          alt="Logo"
          width={150}
          height={150}
          loading="lazy"
        />
      </Center>
      <Title ta="center" mt="md">
        Welcome to My Template
      </Title>
      <Text ta={"center"} mt="sm">
        This template is designed to help you kickstart your Next.js project
        with ease. It includes pre-configured settings and components to
        streamline your development process.
      </Text>

      <Stack align="center" mt="xl">
        <Group align="center" mt="xl">
          <DirectionOfPage />
          <LanguageofPage />
        </Group>
        <ColorSchemeToggle />
      </Stack>
    </Container>
  );
}
