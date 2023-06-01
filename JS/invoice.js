var data=document.querySelectorAll('.data')

        let cust_name = data[0]
        let item_name = data[1]
        let weight = data[2]
        let waste = data[3]
        let margin = data[4]
        let FW = data[5]
        let nag_weight
        var itemDes = localStorage.getItem("itemDes").split(",")
        var qnt = localStorage.getItem("qnt").split(",")
        var price = localStorage.getItem("price").split(",")
        var amount = localStorage.getItem("amount").split(",")
        var tableLen=localStorage.getItem("tableLen")

        
        cust_name.innerHTML = localStorage.getItem("cust_name");
        item_name.innerHTML = localStorage.getItem("item_name");
        weight.innerHTML = localStorage.getItem("weight");
        waste.innerHTML = localStorage.getItem("Waste");
        margin.innerHTML = localStorage.getItem("margin");
        FW.innerHTML = localStorage.getItem("FW")
        
        
        // Converting the values in number
        margin=parseFloat(margin.innerText);
        waste=parseFloat(waste.innerText);
        FW=parseFloat(FW.innerText);
        weight=parseFloat(weight.innerText);
        
        //Calculating the नग वजन
        nag_weight = (FW+waste+margin-weight).toFixed(3);
        document.querySelector('#NW').innerHTML=nag_weight;



        for(let i=0;i<tableLen;i++)
        {
                let table=document.querySelector('#table');
                let row = table.insertRow(-1);
                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1);
                let c3 = row.insertCell(2);
                let c4 = row.insertCell(3);

                //insert data
                c1.innerText = itemDes[i];
                c2.innerText = qnt[i];
                c3.innerText = price[i];
                c4.innerText = amount[i];
        }

        function printDiv() 
        {
                var divContents = document.getElementById("GFG").innerHTML;
                var a = window.open('', '', 'height=500, width=500');
                a.document.write('<html>');
                a.document.write('<body > <h1>Div contents are <br>');
                a.document.write(divContents);
                a.document.write('</body></html>');
                a.document.close();
                a.print();
        }