
# Blueprint CLI: Streamline Your Code Generation Workflow

## Introduction

The Blueprint CLI empowers you to automate repetitive code generation tasks, promoting efficiency and consistency within your development processes. It leverages Plop ([https://plopjs.com/](https://plopjs.com/)) to provide a flexible framework for building reusable blueprints that generate files, configurations, and other project elements based on your defined logic.

## Features

- **Blueprint Creation:** Use the `create-blueprint` blueprint to quickly establish the foundation for your custom blueprints, leveraging Plop's functionality.
- **Customizable Blueprints:** Tailor Plopfile.ts logic within your custom blueprints to define prompts, actions, and custom logic for generating the desired code, files, and configurations.
- **Modular Structure:** The Blueprint CLI promotes well-organized project structures and simplifies code maintainability.
- **Flexibility:** Create blueprints for a wide range of use cases, from generating basic components to setting up complex project configurations.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm (or yarn) installed on your system.

### Installation

1. Clone this repository:

   ```bash
   git clone [https://github.com/your-username/your-blueprint-cli-repo.git](https://github.com/your-username/your-blueprint-cli-repo.git)
   ```

2. 
  ```bash
  cd your-blueprint-cli-repo
    ```
3.
  ```bash
  npm install
  ```

### Using the CLI
#### Creating a Custom Blueprint:

  Execute the create-blueprint command to generate the initial structure for your blueprint:
    ```Bash

    npx bp create-blueprint
    ```

Follow the prompts to provide a name and description for your blueprint.

Edit the generated Plopfile.ts file to define the custom logic for your blueprint using prompts, actions, and conditional statements.

#### Additional Blueprints (Optional):

##### You can create additional custom blueprints using the same principles as the create-blueprint blueprint:

   - Create a new directory within the blueprints directory for your custom blueprint.
   - Inside this directory, create a Plopfile.ts file to define your blueprint's logic.
   - Optionally, include a README.md file to provide documentation specific to your custom blueprint.

### Using Custom Blueprints:

    Assuming your custom blueprint is named my-blueprint, you can use it within your project directory:
    Bash

    npx bp use my-blueprint

    Use code with caution.

    Follow the prompts specific to your custom blueprint.

### Testing and Contributing

    Consider incorporating a testing framework like Jest to write unit tests for your Blueprint CLI's core functionalities and custom blueprint logic, ensuring robustness.
    Explore tools like DocuSource for creating detailed and interactive documentation to guide users in building and utilizing custom blueprints effectively.

### Contributing

We welcome contributions to this project! Feel free to submit pull requests that improve existing functionalities, add new features, or fix bugs. Refer to the CONTRIBUTING.md file (if available) for specific guidelines.

### License

This project is distributed under the MIT License.

