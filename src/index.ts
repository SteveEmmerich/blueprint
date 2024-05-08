

// Project Structure
const userBlueprintsDir = 'user-blueprints';
const generatorsDir = 'generators'; // Optional

// User-defined Blueprint Structure
interface BlueprintConfig {
  name: string;
  description: string;
  prompts?: any[]; // Prompt definitions
  actions?: any[]; // Actions for file generation
  files?: string[]; // List of files to create/modify
  repository?: string; // Optional: User's blueprint repository URL
}

import { spawn } from 'child_process';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { SimpleGit } from 'simple-git'; // Consider using simple-git for shallow cloning


const generatorName = process.argv[2];

if (!generatorName) {
  console.error('Please provide a generator name!');
  process.exit(1);
}

// Implement logic to handle user input (e.g., prompts, actions) based on the blueprint
// ... (your implementation for prompts, actions, and scaffolding goes here)

async function runBlueprint(config: BlueprintConfig) {
  // ... (your implementation for prompts, actions, and scaffolding)
  const blueprintDir = join(__dirname, userBlueprintsDir, `${generatorName}-blueprint`);

  // Check for user-provided repository URL
  if (config.repository) {
    const userRepoUrl = config.repository;
  
    // Check if user blueprint directory already exists (might be a local copy)
    if (existsSync(blueprintDir)) {
      console.log('Using local copy of user-defined blueprint.');
    } else {
      console.log(`Downloading user-defined blueprint from ${userRepoUrl}`);

      // Secure Git Cloning (consider using simple-git for shallow cloning)
      const git = new SimpleGit(blueprintDir);
      try {
        await git.init().addRemote('origin', userRepoUrl).shallow(true).clone();
      } catch (error) {
        console.error('Error downloading user blueprint:', error);
        process.exit(1);
      }
    }
  }

  // Load user's Plopfile.ts and execute the blueprint logic
  require(join(blueprintDir, 'Plopfile.ts'));
}

// Usage within bp.ts
(async () => {
  const userBlueprintDir = join(__dirname, userBlueprintsDir, `${generatorName}-blueprint`);
  if (existsSync(userBlueprintDir) && existsSync(join(userBlueprintDir, 'Plopfile.ts'))) {
    const blueprintConfig = JSON.parse(readFileSync(join(userBlueprintDir, 'blueprint.json'), 'utf-8'));
    await runBlueprint(blueprintConfig);
  } else {
    console.error(`User blueprint '${generatorName}' not found!`);
    process.exit(1);
  }
})();
 