
/**
 * @fileoverview format-intl-number Libary - provides convenient defaults for Intl.NumberFormat.
 * @author SimpleNotSimpler
 * @version 1.0.0
 * @license MIT
 * 
 */

/**
 * @function formatIntlNumber
 * @summary function that returns a formatted number. provides a convenient set of defaults for Intl.NumberFormat. 
 * @param {number} value 
 * @param {string} numberStyle: currency-us, percent, number-grouped, number-ungrouped 
 * @param {number} minFracDigits 
 * @param {string} locales 
 * @see {@link https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript}
 * 
 **/
function formatIntlNumber(value, numberStyle='', minFracDigits = 0, locales = 'en-us') {
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
    // from PEP 20 Zen of Python: Explicit is better than implicit.
    // Following above, have chosen to specify defaults even if same as specification.
 
    let options = {};
    
    try {
        //use Number.isNaN not isNaN
        //https://github.com/airbnb/javascript#standard-library
        if (Number.isNaN(value)) {
            throw 'Error - Value: Please enter a number.'
        }
        switch (numberStyle) {
            case 'currency-us':
                options = {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: minFracDigits,
                }
                break;
            case 'percent':
                options = {
                    style: 'percent',
                    minimumFractionDigits: minFracDigits,
                }
                break;
            case 'number-grouped':
                options = {
                    style: 'decimal',
                    minimumFractionDigits: minFracDigits,
                    useGrouping: true,
                }
                break;
            case 'number-ungrouped':
                options = {
                    style: 'decimal',
                    minimumFractionDigits: minFracDigits,
                    useGrouping: false,
                }
                break;
            //not sure if need default ? is so, should it be error message?
            default:
                throw 'Error - Number Style: Please specify a valid number style, e.g. currency-us, percent, number-grouped, number-ungrouped.'
                break;
        }
    
        // const formatter = new Intl.NumberFormat(locales, options).format(value);
        let formatter = new Intl.NumberFormat(locales, options);
    
        return formatter.format(value);
        // return formatter.resolvedOptions();
    } catch (error) {
        console.error(error);
    }

}

