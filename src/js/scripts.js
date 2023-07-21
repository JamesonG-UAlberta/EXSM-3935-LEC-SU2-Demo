async function main() {
    const a = await input("Please enter a side of the triangle: ");
    const b = await input("Please enter another side of the triangle: ");

    const c = Math.sqrt(a**2 + b**2);

    output(c);
}


