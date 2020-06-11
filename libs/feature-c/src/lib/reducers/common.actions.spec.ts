import * as fromCommon from './common.actions';

describe('loadCommons', () => {
  it('should return an action', () => {
    expect(fromCommon.loadCommons().type).toBe('[Common] Load Commons');
  });
});
