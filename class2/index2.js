console.log('Chaliyea shuru krte hai bina kisi .......!!');
// OBJECT CREATION
// const rectangle={
//     lenght:1,
//     breadth:2,

//     draw: function(){
//         console.log('Drawing Rectangle');
//     }

// };

//FACTORY FUNNCTION CREATION
function createRectangle() {
    return rectangle() ={
        length:1,
        breadth:2,

        draw() {
            console.log('Drawing Rectangle');
        }
    };
}

//let rectangleObj1= createRectangle();

// function createReactangle(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,

//         draw(){
//             console.log('Draw Rectangle');
//         }
//     };
// }
// let rectangleObj1 = createReactangle(1,2);
// let rectangleObj2 = createReactangle(3,4);
// let rectangleObj3 = createReactangle(5,6);
// let rectangleObj4 = createReactangle(7,8);

// CONSTRUCTOR FUNCTION CREATION

// function reactangle(len,bre){
   
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function(){
//         console.log('drawing function');
//     }

// }
// let createReactangle =new reactangle(10,11);
// createReactangle.color='Yellow';
// console.log(createReactangle);

// delete createReactangle.color;
// console.log(createReactangle);

//PRIMITIVE TYPE :- Primitive are copied by their value

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

//REFERENCE TYPE :- Referance are copied their address

// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

//For-in Loop:- If you want to access the key and value of an  object then in that case we can use the for-in loop

// let rectangle = {
//     lenght:10,
//     breadth:11
// };
// for(let key in rectangle)
// {
//     console.log(key,); // Here we are accessing the key only
//     console.log(rectangle[key]); // here we are accessing the value of the key
// }

//FOR-OF LOOP :-  For-of loop is a type of loop which is used on iterables as well as on objects.

// let rectangle ={
//     lenght:5,
//     breadth:10
// };

// for(let key of Object.key(rectangle)){
//     console.log(key);     // form "key" we are only accessing the key 
// }
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);  // from using "entries" we are accessing the whole key and values of the  
// }

//FINDING THE  PROPERTIES IN AN OBJECT

// let rectangle={
//     lenght:1,
//     breadth:2
// };

// if('Height' in rectangle)
// {
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }

//OBJECT CLONING

// let src ={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// };
// let dest={};

// for(let key in src)  //This cloning is done by the "iteration method."
// {
//     dest[key] = src[key];

//     console.log(dest);
// }

// let src={
    // a:1,
    // b:2,
    // c:3,
    // d:4,
    // e:5
// };

// let dest=Object.assign({},src); //This cloning is done by the "Assign method."
// console.log(dest);

// let src ={
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5

// };
// let dest={... src}; //This cloning is done by the "spread method"
// console.log(dest);
