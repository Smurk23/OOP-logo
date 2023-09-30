class MySVG {
    constructor() {
      this.text = "";
      this.shape = "";
    }

    display() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
      }
      
}

