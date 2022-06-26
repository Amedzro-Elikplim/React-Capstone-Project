import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import WeatherDetails from '../pages/Weather/WeatherDetails';

test('it should render weather page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HashRouter>
          <WeatherDetails />
        </HashRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
