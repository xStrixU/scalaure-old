export type OneRequired<T, V extends keyof T> = T & { [P in V]-?: T[P] };
