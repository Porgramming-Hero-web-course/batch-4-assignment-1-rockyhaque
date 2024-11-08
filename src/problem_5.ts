function getProperty<T, R extends keyof T>(obj: T, key: R): T[R]{
    return obj[key]
}

// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));