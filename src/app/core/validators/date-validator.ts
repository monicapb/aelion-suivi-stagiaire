import { AbstractControl } from "@angular/forms";
import * as moment from "moment";
import { Logger } from "../helpers/logger";

export class DateValidator {
  public static dateNotLessThan(control : AbstractControl) {

    if(control.value.trim() === ''){
      return null;
    }

    // Comment on convertur une chaine de caractere en Date
    const userEnteredDate: moment.Moment = moment(control.value);
    Logger.info('User enter : ' + userEnteredDate.format('DD-MM-YYYY'));
    if(userEnteredDate.isSameOrAfter(moment())) {
      return {dateNotLessThan: true}
    }
    return null;
  }
}
