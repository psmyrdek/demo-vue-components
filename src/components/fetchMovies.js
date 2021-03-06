export function fetchMoviesWithDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6])
        }, 5000);
    })
}

export function fetchMoviesWithLongDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6])
        }, 30000);
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