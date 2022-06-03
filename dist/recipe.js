
let breakfastHandle = document.getElementById(`breakfastBtn`);
let lunchHandle = document.getElementById(`lunchBtn`);
let dinnerHandle = document.getElementById(`dinnerBtn`);

let breakfastSection = document.getElementById("breakfast")
let lunchSection = document.getElementById("lunch")
let dinnerSection = document.getElementById("dinner")

breakfastHandle.onclick=function(){
    console.log(`bfastworks`)
    lunchSection.style.display = "none";
    dinnerSection.style.display = "none";
    breakfastSection.style.display = `block`;
    breakfastSection.setAttribute(`align` , `center`);
}

lunchHandle.onclick=function(){
    console.log(`lunchworks`)
    breakfastSection.style.display = "none";
    dinnerSection.style.display = "none";
    lunchSection.style.display = `block`;
    lunchSection.setAttribute(`align` , `center`);
}

dinnerHandle.onclick=function(){
    console.log(`dinnerworks`)
    breakfastSection.style.display = "none";
    lunchSection.style.display = "none";
    dinnerSection.style.display = `block`;
    dinnerSection.setAttribute(`align` , `center`)
}