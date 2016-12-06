import { expect } from 'chai';
import { foo } from './app';

describe('foo returns bar', () => {
  expect(foo()).to.equal('bar');
});
