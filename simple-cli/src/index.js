export const Greeter = (name) => `Hello ${name}, from ${import.meta.url}`;

export async function run(args) {
    console.log(Greeter(args[2]));
}
