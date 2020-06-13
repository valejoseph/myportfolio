window.onload = function(){
    alert("Thank you for visiting my portfolio!");
    let name = this.prompt ("What is your name?");
    let domname = this.document.getElementById('name');
    domname.innerHTML= 'Welcome! ' + name;

    var first_num = prompt("Enter the first number", "");
    var second_num = prompt("Enter the second number", "");
    var answer = first_num + second_num;
    let message = this.document.getElementById('test')
    message.innerHTML=("The sums of the two number is = " + answer);

    let i =answer
    if (i>10){
        this.alert("This is a big number");
    }
        else if (i<=10)
        {
            this.alert("this is a small number");
        }
        else{
        this.alert('Thank you');
        }



    }
   






   



      



