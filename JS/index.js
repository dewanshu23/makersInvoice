var itemDes=[],qnt=[],price=[],amount=[];
function fun()
{
    let table=document.querySelector('#table');
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    let c1in = document.querySelector('#desc');
    let c2in = document.querySelector('#qnt');
    let c3in = document.querySelector('#price');
    let c4in = c2in.value*c3in.value;
    //data entry to the table
    c1.innerText = c1in.value;
    c2.innerText = c2in.value;
    c3.innerText = c3in.value;
    if(c4in!=0){c4.innerText = c4in;}
    
    //adding item in Array
    itemDes.push(c1in.value);

    qnt.push(c2in.value);

    price.push(c3in.value);
    
    amount.push(c4in);
    //empty colls
    c1in.value='';
    c2in.value='';
    c3in.value='';
    c4in.value='';
}
var inp=document.querySelectorAll('input')
var cn;
var data=document.querySelectorAll('.data');
function CN()
{
    var item,weight,waste,margin,FW;
    cn=inp[0].value;
    localStorage.setItem("cust_name", cn);

    item=inp[1].value;
    localStorage.setItem("item_name", item);

    weight=inp[2].value;
    localStorage.setItem("weight", weight);
    
    waste=inp[3].value;
    localStorage.setItem("Waste",waste);

    margin=inp[4].value;
    localStorage.setItem("margin",margin)

    FW=inp[5].value;
    localStorage.setItem("FW",FW);

    localStorage.setItem("itemDes",itemDes);
    localStorage.setItem("qnt",qnt);
    localStorage.setItem("price",price);
    localStorage.setItem("amount",amount);
    localStorage.setItem("tableLen",price.length);
    
}