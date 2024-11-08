# Blog - Type Guards

## Why Are Type Guards Necessary? An Overview of Types and Use Cases

`Answer: `

In TypeScript, type guards play an essential role in making the codebase more reliable, and developer-friendly.It improves JavaScript by adding static types, which makes the code more reliable. A key feature of TypeScript is type guards, which ensure safety when using variables that can have different types. 

It is important when working with variables that can have multiple types (union types).

Example:

- `typeof` Type Guards

    ```Typescript
    function formatValue(value: string | number) {
        if (typeof value === "string") return value.toUpperCase();
        return value.toFixed(2);
    }
    ```

- `instanceof` Type Guards

    ```Typescript
    class Dog { bark() { console.log("Woof!"); } }
    class Cat { meow() { console.log("Meow!"); } }

    function petSound(pet: Dog | Cat) {
        if (pet instanceof Dog) pet.bark();
        else pet.meow();
    }

    ```
<br>

Type guards in TypeScript ensure safe and efficient handling of union types, improving code reliability and maintainability.






