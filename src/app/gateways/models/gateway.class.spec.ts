import { Gateway } from './gateway.class';

describe('Gateway model', () => {
  it('should create an instance', () => {
    expect(new Gateway({} as any)).toBeTruthy();
  });
});
