import { prompt, action } from 'plop'; // Import plop functionalities
import { join } from 'path'; // For path manipulation

export default function (plop: any) {
  // Define prompts for user input
  plop.setPrompt('blueprintName', {
    type: 'input',
    message: 'Enter the name of your blueprint (lowercase, kebab-case):',
  });
  plop.setPrompt('blueprintDescription', {
    type: 'input',
    message: 'Enter a brief description of your blueprint:',
  });

  // Define actions for creating the blueprint directory structure
  plop.setGenerator('createBlueprint', {
    description: 'Creates a new blueprint directory structure',
    prompts: [
      { type: 'blueprintName' },
      { type: 'blueprintDescription' },
    ],
    actions: [
      action({
        type: 'makeDir',
        path: '{{blueprintName}}-blueprint',
      }),
      action({
        type: 'add',
        path: join('{{blueprintName}}-blueprint', 'blueprint.json'),
        template: file => `
        {
          "name": "{{blueprintName}}",
          "description": "{{blueprintDescription}}",
          "prompts": [], 
          "actions": [], 
          "files": []  
        }
        `,
      }),
      action({
        type: 'add',
        path: join('{{blueprintName}}-blueprint', 'Plopfile.ts'),
        template: file => `
        import { prompt, action } from 'plop'; // Import plop functionalities
        import { BlueprintConfig } from '../../bin/bp'; // Import BlueprintConfig interface (Optiona)
        import {{blueprintName}} from './{{blueprintName}}.json'; // Import your custom blueprint logic (optional)

        export default function (plop: any) {
          // Define prompts for user input
          plop.setPrompt('customPrompt', {
            type: 'input',
            message: 'Enter a custom prompt:',
          });

          // Define actions for file generation
          plop.setGenerator('{{blueprintName}}', {
            description: '{{blueprintDescription}}',
            prompts: [],
            actions: [],
            files: [],
          });
        }
        `,
      }),
    ],
  });
}
