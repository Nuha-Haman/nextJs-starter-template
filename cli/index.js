#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const program = new Command();
const GITHUB_USERNAME = "lamah-co"; // Change this
const REPO_NAME = "nextJs-starter-template"; // Change this

// Promisify exec so we can use async/await
const execPromise = promisify(exec);

async function main() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      validate: (input) => (input ? true : "Project name cannot be empty"),
    },
  ]);

  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log("Error: Folder already exists!");
    process.exit(1);
  }

  const cloneSpinner = ora(
    `Cloning private repo into '${projectName}'...`
  ).start();
  try {
    const repoUrl = `git@github.com:${GITHUB_USERNAME}/${REPO_NAME}.git`;

    // Use execPromise to handle the git clone asynchronously
    await execPromise(
      `git clone --depth 1 ${repoUrl} ${projectName} > /dev/null 2>&1`
    );
    cloneSpinner.succeed("Repo cloned successfully!");

    const gitInitSpinner = ora("Initializing Git repository...").start();
    fs.rmSync(path.join(targetDir, ".git"), { recursive: true, force: true });
    process.chdir(targetDir);
    await execPromise("git init");
    await execPromise("git add .");
    gitInitSpinner.succeed("Git repository initialized!");

    const installSpinner = ora("Installing dependencies...").start();
    await execPromise("npm install");
    installSpinner.succeed("Dependencies installed!");

    ora(`✔ Project setup complete!`).succeed();
    console.log(`cd ${projectName} && npm run dev`);
  } catch (error) {
    ora().fail("Error setting up project: " + error.message);
  }
}

program.action(main);
program.parse(process.argv);
