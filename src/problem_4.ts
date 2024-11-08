type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shapeInput: Shape): number {
  if (shapeInput.shape === "circle") {
    const result: number = Math.PI * shapeInput.radius * shapeInput.radius;

    return parseFloat(result.toFixed(2));
  }

  if (shapeInput.shape === "rectangle") {
    return shapeInput.height * shapeInput.width;
  }

  return 0;
}

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea);

// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(rectangleArea);
