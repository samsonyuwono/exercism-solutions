function Triangle(a, b, c) {
  this.triangle = [a, b, c].sort();

  Triangle.prototype.kind = function() {
    if (this.triangle[0] < 0) {
      throw "triangles with negative sides are illegal";
    }
    if (this.triangle[0] * this.triangle[1] * this.triangle[2] === 0)
      throw "Triangle cannot have zero area";
    if (this.triangle[0] + this.triangle[1] < this.triangle[2])
      throw "Not a valid triangle";
    if (
      this.triangle[0] === this.triangle[1] &&
      this.triangle[1] === this.triangle[2]
    ) {
      return "equilateral";
    } else if (
      this.triangle[0] === this.triangle[1] ||
      this.triangle[1] === this.triangle[2]
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  };
}

module.exports = Triangle;
