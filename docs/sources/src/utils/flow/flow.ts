import { pipe, map, flatten } from 'ramda';
import { Compute, Message, Effect } from 'interfaces';
import isolateEffects from './isolate/isolateEffects';
import unpackMessage from './isolate/unpackMessage';

export const getModulesEffects = scope => modules => message =>
  pipe(
    map((module: Compute) => module(unpackMessage(scope)(message))),
    map(isolateEffects(scope)),
    flatten
  )(modules);

export const mergeComputers = (...computers) => (message: Message): Effect[] =>
  flatten(map((compute: Compute) => compute(message))(computers));

export const routeMessage = routing => message => {
  if (message.id === 'history.update') {
    return {
      ...message,
      id: routing[message.data] || routing.escape,
    };
  }

  return message;
};
