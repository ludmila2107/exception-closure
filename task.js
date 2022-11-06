function parseCount(str) {
    let result = Number.parseInt(str);
    if (isNan(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  };
  let obj = "2";
  console.log(parseCount(obj));
  function validateCount(str) {
    try {
      return parseCount(str);
    } catch (error) {
      return error;
    }
  }
  console.log(validateCount(obj));


  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
   
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    getArea() {
      return Number(
        Math.sqrt(
          (this.getPerimeter() / 2) *
            (this.getPerimeter() / 2 - this.a) *
            (this.getPerimeter() / 2 - this.b) *
            (this.getPerimeter() / 2 - this.c)
        ).toFixed(3)
      );
    }
  }
   
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      let ob = {};
      ob.getArea = function () {
        return "Ошибка! Треугольник не существует";
      };
      ob.getPerimeter = function () {
        return "Ошибка! Треугольник не существует";
      };
   
      return ob;
    }
  }
  