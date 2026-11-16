import { useState } from "react";
function Formulaire()
{
    const [Nom,SetNom]=useState("");
    const [Prenom,SetPrenom]=useState("");
    const[clicked,isclicked]=useState(false);

    function Afficher(e)
    {
        e.preventDefault();
        isclicked(true);
        }
    return (
        <>
        <form onSubmit={Afficher}>
            <fieldset><legend>Formulaire D'inscription : </legend></fieldset>
            <label>Nom :</label>
            <input type="text" value={Nom} onChange={(e)=>{SetNom(e.target.value)}}></input>
            <label>Prenom :</label>
            <input type="text" value={Prenom} onChange={(e)=>{SetPrenom(e.target.value)}}></input>
            <button type="submit">Afficher</button>
            {clicked && <p>Name is : {Nom} et  Prenom is : {Prenom}  </p>}
        </form>
        </>

    )
}

function CheckPassword()
{
    const[Password,SetPassword]=useState("");
    const[ConfirmedPassword,SetConfirmedPassword]=useState("");
    const lenghpassword=Password.length;
    

    return(
        <>
        <form>
            <fieldset>
                <label>Enter your Password :</label>
                <input type="password" value={Password} onChange={(e)=>{SetPassword(e.target.value)}}></input>
                 <p> {lenghpassword < 4 ? "Password doit avoir au moins 4 caracteres" :""} </p>
                 <label>Confirm your Password :</label>
                <input type="password" value={ConfirmedPassword} onChange={(e)=>{SetConfirmedPassword(e.target.value)}}></input>
                <p>{ConfirmedPassword!== Password ? "Les mots de passe ne correspondent pas": ""}</p>
            </fieldset>
        </form>
        </>
    )
}

export {Formulaire,CheckPassword};