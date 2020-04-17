/* Question 3 */

export interface Ok<T>{
    tag: 'Ok',
    value: T
}

export interface Failure{
    tag: 'Failure',
    message: string
}

export type Result<T> = Ok<T> | Failure;

export const makeOk : <T>(value: T) => Ok<T> =
    <T>(value: T) : Ok<T> =>
        ({tag: 'Ok', value: value});

export const makeFailure : (msg : string) => Failure =
    (msg : string) : Failure =>
        ({tag: 'Failure', message : msg});

export const isOk : <T>(result : Result<T>) => result is Ok<T> = 
    <T>(result : Result<T>) : result is Ok<T> =>
        result.tag === 'Ok';

export const isFailure : <T>(result : Result<T>) => result is Failure = 
    <T>(result : Result<T>) : result is Failure =>
        result.tag === 'Failure';

/* Question 4 */
export const bind : <T, U>(result : Result<T>, f: (x: T) => Result<U>) => Result<U> = 
    <T, U>(result: Result<T>, f: (x: T) => Result<U>) : Result<U> =>
        isOk(result) ? f(result.value) : result;

/* Question 5 */
interface User {
    name: string;
    email: string;
    handle: string;
}

const validateName = (user: User): Result<User> =>
    user.name.length === 0 ? makeFailure("Name cannot be empty") :
    user.name === "Bananas" ? makeFailure("Bananas is not a name") :
    makeOk(user);

const validateEmail = (user: User): Result<User> =>
    user.email.length === 0 ? makeFailure("Email cannot be empty") :
    user.email.endsWith("bananas.com") ? makeFailure("Domain bananas.com is not allowed") :
    makeOk(user);

const validateHandle = (user: User): Result<User> =>
    user.handle.length === 0 ? makeFailure("Handle cannot be empty") :
    user.handle.startsWith("@") ? makeFailure("This isn't Twitter") :
    makeOk(user);

export const naiveValidateUser : (user : User) => Result<User> =
    (user : User) : Result<User> =>
        isFailure(validateName(user)) ? validateName(user) :
        isFailure(validateEmail(user)) ? validateEmail(user) :
        isFailure(validateHandle(user)) ? validateHandle(user) : 
        makeOk(user);

export const monadicValidateUser : (user : User) => Result<User> =
    (user : User) : Result<User> =>
        [validateName, validateEmail, validateHandle]
        .reduce((acc : Result<User>, curr : ((user: User) => Result<User>)) =>
            bind<User,User>(acc, curr), makeOk<User>(user));
