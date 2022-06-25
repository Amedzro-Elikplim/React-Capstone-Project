import { fetchData } from "../redux/Weather/ActionCreators";

test('mock api call', async () => {
    const response = await fetchData(5.5571096, -0.2012376);
    expect(response).toHaveProperty("name");
})

test('mock api call', async () => {
    const response = await fetchData(5.5571096, -0.2012376);
    expect(response).toHaveProperty("base");
})