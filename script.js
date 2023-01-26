

function VerificaIdade(){
    var data=new Date()
    var ano=data.getFullYear()
    var anonascimento=document.querySelector('#anonascimento')
    var frase=document.querySelector('#frase')
    
    var img=document.createElement('img')
        if(anonascimento.value.length==0||Number(anonascimento.value)>ano)
             {
                alert('Erro! Verifique os dados e tente novamente!')
             }
    else{
        var fsex=document.getElementsByName('btnradio')
        var idade=ano-Number(anonascimento.value)
        var genero=''
            if(fsex[0].checked){
                genero='homem'
                if(idade>=0&&idade<10){
                    frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                    img.setAttribute ('src','img/bebe menino.png')
                }
                else if(idade<21){
                    frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                    img.setAttribute ('src','img/jovem.png')
                }
                else if(idade<50){
                    frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                    img.setAttribute ('src','img/homemadulto.png')
                }
                else {
                    frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                    img.setAttribute('src', 'img/idoso homem.png')
                }
                }

            else if(fsex[1].checked)
           {
            genero='mulher'
            if(idade<0&&idade<=10){
                frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                img.setAttribute=('src', 'img/bebe menina.png')
            }
            else if(idade<21){
                frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                img.setAttribute= ('src','img/mulher jovem.png')
            }
            else if(idade<50){
                frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                img.setAttribute= ('src','img/mulheradulta.png')
            }
            else {
                frase.innerHTML=`Detectamos ${genero} de ${idade} anos`
                img.setAttribute= ('src','img/idosa png.png')
            }
    }
    frase.appendChild(img)
}  
}
