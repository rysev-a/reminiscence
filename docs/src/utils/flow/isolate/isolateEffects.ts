import { map } from 'ramda';
import isolateHtml from './isolateHtml';

const isolateTarget = scope => target =>
  target ? `${scope}.${target}` : scope;

const isolateEffectItem = (scope: string) => effect => {
  if (effect.plugin === 'dom') {
    return {
      ...effect,
      payload: {
        ...effect.payload,
        ...(effect.payload.target
          ? { target: isolateTarget(scope)(effect.payload.target) }
          : {}),
        html: isolateHtml(scope)(effect.payload.html),
      },
    };
  }

  if (effect.plugin === 'store') {
    return {
      ...effect,
      payload: {
        ...effect.payload,
        target: isolateTarget(scope)(effect.payload.target),
      },
    };
  }

  if (effect.plugin === 'time') {
    return {
      ...effect,
      payload: {
        ...effect.payload,
        id: isolateTarget(effect.payload.id),
      },
    };
  }

  return effect;
};

const isolateEffects = scope => map(isolateEffectItem(scope));

export default isolateEffects;
