import { getURLHashParam } from '@shm-open/utilities';

const get = (key: string): string[] | string => {
  return getURLHashParam(window.location.href, key);
};

const getOne = (key: string): string => {
  const v = get(key);
  return Array.isArray(v) ? v[0] : v;
};

const getFrom = (): string => {
  return getOne('from') || 'unknown';
};

export const urlParams = {
  get,
  getOne,
  getFrom,
};
