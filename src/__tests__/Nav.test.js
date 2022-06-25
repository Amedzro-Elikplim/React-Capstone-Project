import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import Nav from '../components/Nav/Nav';

test('it should render Nav bar', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HashRouter>
          <Nav />
        </HashRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
