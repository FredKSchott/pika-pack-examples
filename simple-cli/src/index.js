export const Greeter = (name) => `Hello ${name}, from ${import.meta.url}`;

/**
 * Will be called by the CLI wrapper provided by @pika/plugin-simple-bin
 */
export async function run(args) {
    console.log(Greeter(args[2]));
}
