
const form=document.querySelector(".login-form");

form.addEventListener("submit",loginFunc);

function loginFunc(event){
    event.preventDefault();
    const formdüzeni=event.target;
    const email=form.elements.email.value.trim();
    const password=form.elements.password.value.trim();

    if(email===""||password===""){
        alert("All form fields must be filled in");//Kullanıcının ekranında uyarı penceresi açar
    return;

    }
    const user={
        email:email,
        password:password,

    };
    console.log(user);
    form.reset();
}