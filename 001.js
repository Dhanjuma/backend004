
// function grade(cgpa){
//     if (cgpa>=4.50&&cgpa<=5.0){
//         return "1st class"
//     }
//     else if (cgpa>=3.50&&cgpa<=4.49){
//         return "2nd class upper"
//     }
//     else if(cgpa>=2.40&&cgpa<=3.49){
//         return "2nd class lower"
//     }
//     else if(cgpa>=1.50&&cgpa<=2.39){
//         return "3rd class"
//     }
//     else if(cgpa>=1.00&&cgpa<=1.49){
//         return "Pass"
//     }
//     else{
//         return "Fail"
//     }
// }
// console.log(grade(0.89));


let cgpa = 3.89;
let reply = (cgpa>=4.50&&cgpa<=5.0) ? "1st class":
    (cgpa>=3.50&&cgpa<=4.49) ? "2nd class upper":
    (cgpa=>2.40&&cgpa<=3.49) ? "2nd class lower":
    (cgpa=>1.50&&cgpa<=2.39) ? "3rd class" :
    (cgpa=>1.00&&cgpa<=1.49) ? "pass" : "fail";
console.log(reply);

