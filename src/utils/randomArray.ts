export function getArray (arrayName : any) : any {
    const index : number = Math.floor(Math.random() * arrayName.length);
    return arrayName[index];
}