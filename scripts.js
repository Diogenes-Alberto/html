
function geraUf()
{
  let estados=["","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RR","RO","RJ","RN",
  "RS","SC","SP","SE","TO"];
  let html="";
  for(let i=0;i<estados.length;i++)
  {
    html+=`
    <option>${estados[i]}</option>`;
  }
  document.getElementById("uf").innerHTML=html;
}


geraUf();