import { prompt, action } from 'plop'; // Mocked Plop API
import  generateBlueprint  from './plopfile'; // Your Plopfile.ts logic

jest.mock('plop'); // Mock Plop for testing

describe('create-blueprint', () => {
  it('should create a new blueprint directory', async () => {
    const fakePlop = {
      setPrompt: jest.fn(),
      setGenerator: jest.fn(),
      // Mock other Plop functions as needed
    };

    await generateBlueprint(fakePlop);

    expect(fakePlop.setGenerator).toHaveBeenCalled();
    // Add assertions for specific actions or prompts
  });
});
