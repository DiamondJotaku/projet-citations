import citationAleatoire from '../src/app.js';

test('La fonction retourne une citation', () => {
  const result = citationAleatoire();
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(0);
});