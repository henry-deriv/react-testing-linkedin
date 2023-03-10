import data from '../../data/courses.json';

const numItems = data.length;

describe('Number test', () => {
  test('Number of items should equal 12', () => {
    expect(numItems).toBe(12);
  });
  
  test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe('String test', () => { 
  test('There is a JS in this title', () => {
    expect(dataTest).toMatch(/JS/);
  });
  
  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
 });

const dataArray = ['React Native', 'React'];

describe('Arrays and Obj test', () => {
  test('The list of coures contains React Native and react', () => {
    expect(['React Native', 'React', 'Javascript']).toEqual(expect.arrayContaining(dataArray));
  });
  
  test('The first course to have property title', () => {
    expect(data[0]).toHaveProperty('title');
  });
  
  test('The first course to have property title and avalue of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});





