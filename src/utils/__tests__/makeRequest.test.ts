
import makeRequest from '../makeRequest';
import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import { mockBlogPostData } from '../../mocks/blogPosts';
import { GET_BLOG_DATA } from '../../constants/apiEndPoints';


jest.mock('axios');

describe('makeRequest', () => {
  it('should return data from the backend', async () => {
    // const data = await makeRequest({ url: '/test', method: 'GET' });
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValue({ data: mockBlogPostData });
    // expect(mockedAxios).toHaveBeenCalledTimes(0);
    expect(mockedAxios).toHaveBeenCalledTimes(0);
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_BLOG_DATA.url,
      method: GET_BLOG_DATA.method,
    });
    expect(response).toEqual(mockBlogPostData);
  });
    
//   it('should return data from the backend with dynamicConfig', async () => {
//     const data = await makeRequest({ url: '/test', method: 'GET' }, { baseURL: BACKEND_URL });
//     expect(data).toEqual({ message: 'Hello World!' });
//   });
});
    