async function main() {
    // If the string contains apostrophes, you can use double quotes to enclose it.
    output("Jimmy's mom went to the store.");
    // Otherwise you can escape them.
    output('Jimmy\'s mom went to the store.');
    // If the string contains double quotes, you can use single quotes to enclose it.
    output('Jimmy says, "Hello!"');
    // Otherwise you can escape them.
    output("Jimmy says, \"Hello!\"");
    // If the string contains both, you can use backticks to enclose it.
    output(`Jimmy's mom says, "Jimmy says, 'Hello!'"`);
}


