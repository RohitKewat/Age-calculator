console.log("working ");

const handleClick = () => {
    const message = document.getElementById("message")
    const date = document.getElementById('input-1').value
    const month = document.getElementById('input-2').value
    const year = document.getElementById('input-3').value
    const answer = []
    
    console.log(Date());
    let currentDate = new Date();
    
    console.log(currentDate.getMonth());
    let curMonth = currentDate.getMonth() +1 ;
    let curDate =  currentDate.getDate()
    let curYear =  currentDate.getFullYear();

    answer.push( curDate - parseInt(date) )
    answer.push (curMonth - month)
    answer.push(curYear - year)
    let today = new Date() ;
    console.log(today,"line 21");
    

    if (date && month && year) {    
        message.innerHTML = `<p> Your Age is ${answer[2] } Year ${answer[1]} Month ${answer[0]}  Days </p>`
    } else {
        message.innerHTML = "<p> Please Enter valid value in all input field</p>"
    }
}