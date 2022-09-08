import { first } from "rxjs";

export class StringHelper {
  /**
   *
   * @param {string} input
   * @returns  String without leading and trailing spaces from param
   * @usages StringHelper.removeSpaces('string to trim)
   */
  public static removeSpaces(input: string): string {
    return input.trim();
  }

  /**
   *
   * @param {string} value
   * @returns Utilise la methode removesString et remplace les spaces par des -
   * Dans une methode static je pourrais pas utiliser this car elle est pas instanciée, donc je l'appelle directement par le nom de ma classe
   */
  public static replaceSpacesWithDashes(value: string): string {
    return StringHelper.removeSpaces(value).replace('','-');

  }


  /**
   *
   * @param value
   * @param regexp
   * @returns
   */
  public static removeUnexpectedLeadingChars(value: string , regexp: RegExp): string {
    let firstChar: string = value.charAt(0);
    while(firstChar.match(regexp)) {
      value = value.substring(1);
      firstChar = value.charAt(0);
    }
    return value;

  }
  /**
   *
   * @param value
   * @param regexp
   * @returns Une chaine de caractere qui a ete retourné a l'envers
   */
  public static removeUnexpectedTrailingChars(value: string , regexp: RegExp): string {
    value = value.split('').join('');//retourner la chaine de string la mettre a l'envers
    value = StringHelper.removeUnexpectedLeadingChars(value, regexp);
    return value.split('').reverse().join('');
  }



  /**
   *
   * @param value String to sanitize
   * @param locale Optional locale to compute, default fr
   * @usage StringHelper.sanitizePuncuation(' ma chaine', 'es')
   *    or StringHelper.sanitizePunctuation('ma chaine')
   */
   public static sanitizePunctuation(value: string, locale?: string): string {
    if (locale === undefined) {
      locale = 'fr';
    }

    if (value.match(/[.,;:\!\?]/g) === null) {
      return value;
    }

    const initialValue: string[] = value.split('');
    const outputValue: string[] = [];
    let output: string = '';

    for (let i: number = 0; i < initialValue.length; i++) {
      if (initialValue[i] === ';' || initialValue[i] === ':' || initialValue[i] === '?') {
        console.log(`J'ai trouvé un truc à faire avec espace avant et après`);

      } else {
        if (initialValue[i] === ',' || initialValue[i] === '.') {

          console.log(`J'ai un truc à faire avec la virgule et le point`);
          const previousChar: string = initialValue[i - 1];

          if(previousChar === ' ') {
             output = output.substring(0, output.length - 1) + initialValue[i];
          } else {
            output = output += initialValue[i];
          }

        } else {
          output = output + initialValue[i];
        }
      }
    }
    //return outputValue.join('');
    return output;
  }
/**
 * Sanitize string ponctuation according language
 * @param input String to sanitize
 * @param locale Language to use to sanitize
 *
 * @returns string input with correct ponctuation
 *
 * @usage
 *  input => La méthode s'utilise de la manière suivante: sanitize
 *  locale => fr
 *  Must return : La méthode s'utilise de la manière suivante : santize
 *  locale => us
 *  Must return : La méthode s'utilise de la manière suivante: sanitize
 *
 * French language
 *  => : | ; One space before, One space after
 *  => ,|. One space after
 * English languages
 *  => : | ; One space after only
 *  => ,|. One space after
 */
public static sanitizePonctuation(input: string, locale?: string): string {
    return '';
}

/**
 * Sanitize compound firstname (i.e Jean Luc => Jean-Luc)
 * @param firstname
 * @returns string firstname correctly spelled
 */
public static sanitizeFirstName(firstname: string): string {
    return '';
}

/**
 * Remove unexpected chars before and after a string
 *  i.e !_ Pierre Blin *- => Pierre Blin
 * @param value String to sanitize
 * @param regexp RegExp containing unexpected chars before and after string
 * @returns
 */
public static removeUnexpectedChars(value: string, regexp: RegExp): string {
    return '';
}
}

const sanitized: string = StringHelper.sanitizePonctuation('il n\'y a rien a faire');
console.log(sanitized);
