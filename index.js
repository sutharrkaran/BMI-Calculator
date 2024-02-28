const yourBMI = document.querySelector(".your-bmi").innerHTML


document.querySelector(".calculate").addEventListener('click' , function(){
        const height = Number(document.querySelector(".height-input").value);
    const weight = Number(document.querySelector(".weight-input").value);
        const BMI = weight/((height/100)**2);
        document.querySelector(".bmi").innerHTML = `Your BMI is ${ Math.round(BMI * 10) / 10}`;
    if(BMI<18.5){
        document.querySelector(".bmi-message").innerHTML = 'You are under weight';
    }else if(BMI<25){
        document.querySelector(".bmi-message").innerHTML = 'Your Weight is normal';
    }else if(BMI<30){
        document.querySelector(".bmi-message").innerHTML = 'Your are over weight';
    }else if(BMI>31){
        document.querySelector(".bmi-message").innerHTML = 'Obesity';
    }
})