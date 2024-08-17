module.exports = function toReadable (number) {
        const constNumbers = {
            0: 'zero', 1: 'one', 2: 'two', 3: 'three',
            4: 'four', 5: 'five', 6: 'six', 7: 'seven',
            8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
            12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
            16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
            20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
            60: 'sixty', 70: 'seventy', 80: 'eighty',  90: 'ninety'
        };

        if (number in constNumbers) {
            return constNumbers[number];
        }
        if (number > 20 && number < 100) {
            let x = number % 10;
            return `${constNumbers[Math.floor(number - x)]} ${constNumbers[x]}`;
        }
        if (number >= 100 && number < 1000) {
            let y = number % 100;
            let f = y % 10;
            let floorNumber = Math.floor(number - y) ;
            if (y === 0) {
                return `${constNumbers[floorNumber / 100]} hundred`;
            }
            if (y in constNumbers) {
                return `${constNumbers[floorNumber/ 100]} hundred ${constNumbers[y]}`;
            }
            return `${constNumbers[floorNumber / 100]} hundred ${constNumbers[y-f]} ${constNumbers[f]}`;
        }
    }