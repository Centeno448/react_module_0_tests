import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TareasLista from "./TareasLista"


beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('Has only 1 <div> component', () => {
  const wrapper = shallow(<TareasLista />);
  const div = wrapper.find("div");
  expect(div).toBeDefined();
  expect(div.length).toBe(1);
});

test('<div> component says "Hola Mundo"', () => {
  const wrapper = shallow(<TareasLista />);
  const div = wrapper.find("div").first();
  expect(div.html()).toContain("Hello World");
});