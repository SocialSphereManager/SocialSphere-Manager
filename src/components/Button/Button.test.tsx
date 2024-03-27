import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
it('matches the snapshot', () => {
const tree = render(
<Button/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
  })
  })
