const form=document.getElementById('signupForm');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fname=document.getElementById('fname').value;
    const lname=document.getElementById('lname').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    if(fname&&lname&&email&&password){
        alert(`Information Submitted!`);
        form.reset();
    }else{
        alert("Please fill out all fields correctly.");
    }
});
