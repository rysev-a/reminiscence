import unpackMessage from '../unpackMessage';
import { pipe } from 'ramda';
import { expect } from 'chai';

const message = {
  id: 'app.module.load',
};

describe('Check unpack message', () => {
  it('Unpack message', () => {
    const unpackedMessage = pipe(
      unpackMessage('app'),
      unpackMessage('module')
    )(message);

    expect(unpackedMessage.id).to.equal('load');
  });

  it('Do not touch message', () => {
    const unpackedMessage = pipe(
      unpackMessage('anotherApp'),
      unpackMessage('anotherModule')
    )(message);

    expect(unpackedMessage.id).to.equal(message.id);
  });
});
