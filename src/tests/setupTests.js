import dotenv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

dotenv.config({ path: '.env.test' });
