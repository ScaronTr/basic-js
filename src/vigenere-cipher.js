const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 class VigenereCipheringMachine {
  constructor(type = true) {
    if (type == true ) {
      this.type = 'straight';
    } else if (type == false) {
      this.type = 'reverse';
    }
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  createMatrix() {
    let matrix = [];
    for (let i = 0; i <= 25 ; i++) {
      matrix.push((this.alphabet.slice(i) + this.alphabet.slice(0, i)).split(''));
    }
    return matrix;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const matrix = this.createMatrix();
    let col = [];
    let row = [];
    let b = 0;
    let result = [];
    let messageOnlyLetter = [];
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let char of message) {
      if (matrix[0].includes(char)) {
        messageOnlyLetter.push(char)
      }
    }
    messageOnlyLetter = messageOnlyLetter.join('');

    if (message.length > key.length) {
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, key.length - (key.length - message.length));
    }

    for (let char of messageOnlyLetter) {
      for (let i = 0; i < this.alphabet.length; i++) {
        if (char == this.alphabet[i]) {
          col.push(i);
          break;
        }
      }
    }

    for (let char of key) {
      for (let i = 0; i < this.alphabet.length; i++) {
        if (char == this.alphabet[i]) {
          row.push(i);
          break;
        }
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (matrix[0].includes(message[i])) {
        result.push(matrix[row[b]][col[b]]);
        ++b;
      } else result.push(message[i]);
    }

    if (this.type == 'straight') {
      return result.join('');
    } else if (this.type == 'reverse') {
      return result.reverse().join('');
    }
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const matrix = this.createMatrix();
    let col = [];
    let row = [];
    let b = 0;
    let result = [];
    let messageOnlyLetter = [];
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let char of message) {
      if (matrix[0].includes(char)) {
        messageOnlyLetter.push(char)
      }
    }
    messageOnlyLetter = messageOnlyLetter.join('');

    if (message.length > key.length) {
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, key.length - (key.length - message.length));
    }

    for (let char of key) {
      for (let i = 0; i < this.alphabet.length; i++) {
        if (char == this.alphabet[i]) {
          row.push(i);
          break;
        }
      }
    }

    for (let c = 0; c < messageOnlyLetter.length; c++) {
      for (let i = 0; i < this.alphabet.length; i++) {
        if (messageOnlyLetter[c] == this.alphabet[i]) {
          if (i - row[c] >= 0) {
            col.push(i - row[c]);

            break;
          } else {
            col.push(26 - (row[c] - i));

            break;
          }
        }
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (matrix[0].includes(message[i])) {
        result.push(matrix[0][col[b]]);
        ++b;
      } else result.push(message[i]);
    }

    if (this.type == 'straight') {
      return result.join('');
    } else if (this.type == 'reverse') {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
