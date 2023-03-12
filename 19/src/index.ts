class Coordinate { 
protected x : number ;
protected  y : number ;

   constructor (x:number ,y: number){
   this.x = x
   this.y = y
   }

  
   protected abcd ( ){}
} 
class MyCoordinate extends Coordinate{
   get X(){
      return this.x
   }

   set X(value: number){
      this.x = value
   }
}

const point = new MyCoordinate(44,5)
point.X = 55 
console.log(point.X); 
