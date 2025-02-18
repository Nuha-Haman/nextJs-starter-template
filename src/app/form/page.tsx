"use client";

import React, { JSX } from "react";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

import {
  Button,
  Group,
  TextInput,
  Container,
  Title,
  Text,
} from "@mantine/core";
import { initialValues, schema } from "./schema";

function ExampleForm(): JSX.Element {
  const form = useForm({
    mode: "uncontrolled",
    initialValues,
    validate: zodResolver(schema),
  });

  // form.validate();
  // form.errors;

  return (
    <React.Fragment>
      <Container size={"sm"} mt="xl">
        <Title ta="center" mt="md">
          Example form
        </Title>
        <Text ta={"center"} mt="sm">
          This form uses Mantine and Zod with useForm for type-safe validation
          and real-time feedback, ensuring a seamless user experience with
          structured validation rules.
        </Text>
        <form onSubmit={form.onSubmit(() => {})}>
          <TextInput
            label="Name"
            placeholder="Name"
            withAsterisk
            key={form.key("name")}
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Your email"
            placeholder="Your email"
            withAsterisk
            mt="md"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <TextInput
            label="password"
            placeholder="password"
            withAsterisk
            mt="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <TextInput
            label="Your phone number"
            placeholder="Your phone"
            withAsterisk
            mt="md"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default ExampleForm;
