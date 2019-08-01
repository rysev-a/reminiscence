import { path, includes } from 'ramda';

export const startTimeout = ({ id, message, delay }) => ({
  plugin: 'time',
  action: 'startTimeout',
  payload: {
    id,
    delay,
    message,
  },
});

export const stopTimeout = id => ({
  plugin: 'time',
  action: 'stopTimeout',
  payload: id,
});

export const startInterval = ({ id, delay, message }) => ({
  plugin: 'time',
  action: 'startInterval',
  payload: {
    id,
    delay,
    message,
  },
});

export const stopInterval = id => ({
  plugin: 'time',
  action: 'stopInterval',
  payload: id,
});

// export const debounceAction = debounceTimeoutId => action => message => {
//   // if (message.context.time.timeouts[debounceTimeoutId]) {
//   //   return [
//   //     stopTimeout(debounceTimeoutId),
//   //     startTimeout({
//   //       id: debounceTimeoutId,
//   //       message: debounceMessage(message),
//   //       delay: 1000,
//   //     }),
//   //   ];
//   // }

//   if (message.data && message.data.debounced) {
//     return action(message);
//   }

//   return [
//     startTimeout({
//       id: debounceTimeoutId,
//       message: debounceMessage(message),
//       delay: 1000,
//     }),
//   ];
// };

const deferMessage = (message, deferId) => ({
  ...message,
  data: {
    ...message.data,
    defers: [...((path(['data', 'defers'])(message) as []) || []), deferId],
  },
});

const isDefered = (message, deferId) =>
  includes(deferId, (path(['data', 'defers'])(message) as any) || []);

export const delayAction = ({
  delay,
  action,
  deferId,
}) => computer => rawMessage => {
  if (rawMessage.id !== action || isDefered(rawMessage, deferId)) {
    return computer(rawMessage);
  }

  return startTimeout({
    delay,
    id: deferId,
    message: deferMessage(rawMessage, deferId),
  });
};
