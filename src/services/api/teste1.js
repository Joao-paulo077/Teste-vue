import httpClient from '@/plugins/axios';

const getTeste = () => {
  return httpClient.get('/product/search/product?$limit=15&$skip=0&$total=100000&$market=tui-es');
}
export { getTeste };