export function getArray (arrayName) {
    const index = Math.floor(Math.random() * arrayName.length);
    return arrayName[index];
}