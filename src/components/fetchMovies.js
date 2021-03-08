import {getRandomInt} from './helpers/randomInt'

export function fetchMovies() {
    const scenarios = [
        fetchMoviesWithDelay,
        fetchMoviesWithDelay,
        fetchMoviesWithDelay,
        fetchMoviesWithDelay,
        fetchMoviesWithLongDelay,
        fetchNoMovies,
        fetchMoviesWithError
    ]

    const scenario = getRandomInt(0, scenarios.length - 1)
    return scenarios[scenario]();
}

export function fetchMoviesWithDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6])
        }, 1000);
    })
}

export function fetchMoviesWithLongDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 10000);
    })
}

export function fetchNoMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([])
        }, 5000);
    })
}

export function fetchMoviesWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error')
        }, 5000);
    })
}