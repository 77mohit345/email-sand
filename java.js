
function validataForm()
{
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const massage = document.getElementById('massage').value.trim();
    const errorMsg = document.getElementById('error-msg');
    if(!name || !email || !massage)
{
    errorMsg.textContent = "";
    alert("All fields are required!");
    return false;   
}

if(!email.includes('@') || !email.includes('.'))
{
    errorMsg.textContent = "";
    alert("Enter a valid email address!");
    return false;
}
errorMsg.textContent = "";
window.alert('Message sent sussfully!');
return true;
}   