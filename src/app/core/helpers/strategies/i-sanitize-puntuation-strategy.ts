export interface ISanitizePuntutionStrategy {
  sanitize(index: number, stringAsArray: string[], output: string): string;

}
