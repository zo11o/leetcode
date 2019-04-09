
Number.prototype.digits = function() {
  return (
    this.valueOf()
      .toString()
      .split(".")[1] || ""
  ).length;
}

Number.prototype.add = function(i = 0) {
  if (typeof i !== "number") {
    throw new Error("请输入正确的数字");
  }
  const v = this.valueOf();
  const thisDigits = this.digits();
  const iDigits = i.digits();
  const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
  return (v * baseNum + i * baseNum) / baseNum;
}

Number.prototype.minus = function(i = 0) {
  if (typeof i !== "number") {
    throw new Error("请输入正确的数字");
  }
  const v = this.valueOf();
  const thisDigits = this.digits();
  const iDigits = i.digits();
  const baseNum = Math.pow(10, Math.max(thisDigits, iDigits));
  return (v * baseNum - i * baseNum) / baseNum;
}

console.log((5).add(3).minus(2))
console.log((5.3).add(3.2).minus(2.6))
