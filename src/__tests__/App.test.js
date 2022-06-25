import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import App from '../App';

test('it should render App page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
