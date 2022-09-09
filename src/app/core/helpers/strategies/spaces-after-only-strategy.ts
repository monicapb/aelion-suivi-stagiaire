import { ISanitizePuntutionStrategy } from "./i-sanitize-puntuation-strategy";

export class SpaceAfterOnlyStrategy implements ISanitizePuntutionStrategy  {


  sanitize(index: number, stringAsArray: string[], output: string): string {
    let previousChar = stringAsArray[index - 1];
    if (previousChar === ' ') {
      output = output.substring(0, output.length - 1) + stringAsArray[index];;
    } else {
      output += stringAsArray[index];
    }
    return output;
    //throw new Error("Method not implemeted");
  }
}
