import { render } from '@testing-library/react-native';
import Textfield from './Textfield';

describe('Textfield', () => {
it('matches the snapshot', () => {
const tree = render(
<Textfield/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
  })
  })
