// console.log("Hello, welcome to the 14th class script!");
// // bad aproach to store student names
// let student1 = "Alice";
// let student2 = "Bob";
// let student3 = "Charlie";       
// let student4 = "Diana";

// console.log( student1);
// console.log( student2);
// console.log( student3);
// console.log( student4);
// // better aproach to store student names is using arrays
// let classStudents = [ "Alice", "Bob", "Charlie", "Diana" ];
// let classmarks = [ 85, 92, 78, 90 ];
// let isStudentPassed = [ true, true, false, true ];
// let mixedArray = [ "Alice", 85, "passed", "Bob", 92, "passed", "Charlie", 78, "failed", "Diana", 90, "passed" ];

// console.log( classStudents );
// console.log( classmarks );
// console.log( isStudentPassed );
// console.log( mixedArray );
// console.log( classStudents[2] ); // accessing 3rd student
// console.log( classmarks[0] ); // accessing 1st student's marks
// console.log( isStudentPassed[3] ); // accessing 4th student's pass status   
// console.log( mixedArray[5] ); // accessing 2nd student's pass status

// console.log( "Total students in class: " + classStudents.length);

// classStudents[1] = "Robert"; // updating 2nd student's name
// console.log( classStudents );

// classStudents.push("Eve"); // adding new student at the end
// console.log( classStudents );

// delete classStudents[2];
// console.log( classStudents );


let stuedent1 = {
    name: "Alice",
    marks: 85,
    isPassed: true,
    isAdult: false,
    address: {
        street: "123 Main St",
        city: "berlin",
        zip: "12345"
    }
};
let stuedent2 = {
    name: "Bob",
    marks: 92,
    isPassed: true,
    isAdult: true,   
    address: {
        street: "456 Elm St",
        city: "New York",
        zip: "67890"
    }
};
let stuedent3 = {   
    name: "Charlie",
    marks: 78,
    isPassed: false,   
    isAdult: false,  
    address: {
        street: "789 Oak St",
        city: "capetown",
        zip: "11223"
    }
};
let stuedent4 = {
    name: "Diana",
    marks: 90,
    isPassed: true,
    isAdult: true,    
    address: {
        street: "321 Pine St",
        city: "saint petersburg",
        zip: "44556",
    }
};      
let classStudents = [ stuedent1, stuedent2, stuedent3, stuedent4 ];
console.log( classStudents );
console.log( classStudents[1] );