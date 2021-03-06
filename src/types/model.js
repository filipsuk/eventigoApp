/* @flow */

export type Event = {
  id: string,
  name: string,
  description: ?string,
  url: string,
  start: string,
  end?: ?string,
  venue?: ?string,
  country?: ?string,
  image: string,
  tags?: EventTag[]
};

export type EventTag = {
  code: string,
  name: string,
  rate: 1 | 2 | 3 | 4 | 5 // 1: weak, 5: strong relation
};
