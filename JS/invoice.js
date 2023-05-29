var data=document.querySelectorAll('.data')
        let cust_name = data[0]
        let item_name = data[1]
        let weight = data[2]
        let waste = data[3]
        let margin = data[4]
        let FW = data[5]
        let nag_weight
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
