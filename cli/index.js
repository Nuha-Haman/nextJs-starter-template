#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const execPromise = promisify(exec);
const program = new Command();
const IGNORED_FOLDERS = [".git", "cli", ".next", "node_modules"];

async function main() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      validate: (input) => (input ? true : "Project name cannot be empty"),
    },
  ]);

  const templateDir = path.resolve(__dirname, ".."); // Parent directory (template root)
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.error("Error: Folder already exists!");
    process.exit(1);
  }

  const copySpinner = ora(
    `Copying template files to '${projectName}'...`
  ).start();

  try {
    // Copy all files except ignored ones
    await fs.copy(templateDir, targetDir, {
      filter: (src) => {
        // Always allow .gitignore
        if (path.basename(src) === ".gitignore") return true;

        const relativePath = path.relative(templateDir, src);
        return !IGNORED_FOLDERS.some((folder) =>
          relativePath.startsWith(folder)
        );
      },
    });

    copySpinner.succeed("Template copied successfully!");

    // Initialize a new Git repository
    const gitInitSpinner = ora("Initializing Git repository...").start();
    process.chdir(targetDir);
    await execPromise("git init && git add .");
    gitInitSpinner.succeed("Git repository initialized!");

    // Install dependencies
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
