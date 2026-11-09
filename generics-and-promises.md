
# Understanding Generics and Promise in TypeScript

## Introduction

While learning TypeScript, I discovered that writing reusable code is an important part of development. Generics help us create functions and classes that work with different data types without losing type safety. They are also very useful when working with asynchronous operations like Promises.

## How Generics Work

Generics allow us to use a type as a parameter. Instead of writing separate functions for different data types, we can write one function that works with many types.

For example:

```ts
function getValue<T>(value: T): T {
  return value;
}

const name = getValue<string>("Tania");
const age = getValue<number>(23);
```

Here, `T` is a generic type parameter. TypeScript understands the type based on what we provide. The same function works with both strings and numbers.

## Generics with Promise

A Promise represents a value that may be available in the future. In TypeScript, `Promise<T>` tells us what type of value the Promise will resolve with.

For example:

```ts
function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tania");
    }, 1000);
  });
}
```

Here, `Promise<string>` means the function will return a Promise that resolves with a string. This helps us understand what data to expect from an asynchronous operation.

We can also use generics when creating reusable API functions. This makes our code easier to maintain and helps TypeScript check the returned data types.

## Conclusion

Generics make TypeScript code more flexible and reusable. When combined with Promises, they help us manage asynchronous data with better type safety. I think learning these concepts is very useful for building real-world applications.
