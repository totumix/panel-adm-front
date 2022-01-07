import { FilterCustomersPipe } from './filter-client.pipe';

describe('FilterCustomersPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterCustomersPipe();
    expect(pipe).toBeTruthy();
  });
});
