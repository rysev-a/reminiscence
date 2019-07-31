type plugin = 'dom' | 'state' | 'history' | 'http' | 'time';

export interface Message {
  id: string;
  data?: any;
  context?: any;
}

export interface Effect {
  plugin: plugin;
  action: any;
  payload: any;
}

export interface Ui {
  tag: string;
  node?: string;
  attributes?: any;
  events?: any;
  children?: any;
}

export interface Compute {
  (message: Message): Effect[];
}

export interface Transducer {
  ({ message, effects }: { message: Message; effects: Effect[] }): {
    message: Message;
    effects: Effect[];
  };
}

export interface Attributes {
  href?: string;
  id?: string;
  className?: string;
  innerHTML?: string;
  colSpan?: number;
  rowSpan?: number;
  title?: string;
  role?: string;
  ariaLabel?: string;
  events?: any;
}
