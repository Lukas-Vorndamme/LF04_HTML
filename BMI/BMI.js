let BMI = () => {

    let cm = parseInt(document.getElementById("cm").value);

    let kg = parseInt(document.getElementById("kg").value);

    let erg = document.getElementById("erg");

    if (!isNaN(cm) && !isNaN(kg)) {
        let x = Math.round((kg /  Math.pow((cm / 100), 2))*100)/100;

        erg.value = x;
        erg.style.color = "green"

        if(isNaN(x) || x < 0){
            erg.value = x + "  Dein BMI ist Negativ oder Nicht berechenbar also  gib vernünftige werte ein du Pfeife";
            erg.style.color = "red";
        }
        if(x > 30){
            erg.value = x +"  Nimm ab du Fettes Schwein";
            erg.style.color = "red"
        }
    } else{
        erg.value = x + "  Bitte geben sie die Größe und das Gewicht ein";
        erg.style.color = "red";
    }


}
