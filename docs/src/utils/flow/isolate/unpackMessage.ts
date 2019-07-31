import { lensPath, view, length, slice, startsWith } from 'ramda';

const unpackMessageId = scope => messageId =>
  startsWith(scope, messageId)
    ? slice(length(scope) + 1, Infinity, messageId)
    : messageId;

const unpackStore = scope => rawStore => {
  const store = {
    prevState:
      view(lensPath(['prevState', scope]), rawStore) || rawStore.prevState,
    nextState:
      view(lensPath(['nextState', scope]), rawStore) || rawStore.nextState,
  };

  return store;
};

const unpackMessageContext = scope => context => ({
  ...context,
  store: unpackStore(scope)(context.store),
});

const unpackMessage = scope => rawMessage => {
  const message = {
    ...rawMessage,
    id: unpackMessageId(scope)(rawMessage.id),
    context: unpackMessageContext(scope)(rawMessage.context),
  };

  return message;
};

export default unpackMessage;
