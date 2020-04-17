/* Question 1 */

import { is } from "ramda";

export interface Some<T> {
    tag: 'Some';
    value: T;
}

export interface None{
    tag: 'None';
}

export type Optional<T> = Some<T> | None;

export const makeSome : <T>(value: T) => Some<T> =
    <T>(value: T) : Some<T> =>
        ({tag: 'Some', value: value});

export const makeNone : () => None =
    () : None =>
        ({tag: 'None'});

export const isSome : <T>(optional : Optional<T>) => optional is Some<T> = 
    <T>(optional : Optional<T>) : optional is Some<T> =>
        optional.tag === 'Some';

export const isNone : <T>(optional : Optional<T>) => optional is None = 
    <T>(optional : Optional<T>) : optional is None =>
        optional.tag === 'None';


/* Question 2 */
export const bind : <T, U>(optional : Optional<T>, f: (x: T) => Optional<U>) => Optional<U> = 
    <T, U>(optional: Optional<T>, f: (x: T) => Optional<U>) : Optional<U> =>
        isSome(optional) ? f(optional.value) : makeNone();

