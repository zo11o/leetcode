var largestRectangleArea = function(heights) {
  var maxArea = 0;
  var len = heights.length;
  var lo = [], hi = [];
  lo[0] = -1;
  hi[len - 1] = len;  
  
  for (var i = 1; i < len; i++) {
      var temp = i - 1;
      while (temp >= 0 && heights[temp] >= heights[i]){
        temp = lo[temp]
        console.log(temp, lo);
      }
      lo[i] = temp;
  }

  for (var j = len - 2; j >= 0; j--) {
      var temp = j + 1;
      while (temp >= 0 && heights[temp] >= heights[j]) temp = hi[temp]
      hi[j] = temp;
  }

  for (var x = 0; x < len; x++) {
      var area = heights[x] * (hi[x] - lo[x] - 1);
      maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

var a = [6, 4, 5, 2, 4, 3, 9];
largestRectangleArea(a);
