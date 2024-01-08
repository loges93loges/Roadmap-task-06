class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
        return this.radius;
      }
    
      setRadius(updateradius) {
        this.radius = updateradius;
      }
    
      getColor() {
        return this.color;
      }
    
      setColor(updatecolor) {
        this.color = updatecolor;
      }
    
      toString() {
        return `Circle [radius=${this.radius}  color=${this.color}]`;
      }
    
      getArea() {
        return Math.PI * Math.pow(this.radius, 2);
      }
    
      getCircumference() {
        return 2 * Math.PI * this.radius;
      }
    }
    
  
  // Example usage:
  const myCircle = new Circle(1.0,"red"); 
  

  console.log(myCircle.getRadius());

  myCircle.setRadius = 3
  console.log(myCircle.setRadius)

  console.log(myCircle.getColor());

  myCircle.setRadius = "blue"
  console.log(myCircle.setRadius)

  console.log(myCircle.toString());

  console.log(myCircle.getArea());

  console.log(myCircle.getCircumference());
