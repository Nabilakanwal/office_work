/**
 * Created by AttaurRehman on 04-Jul-15.
 */

$(document).ready(function () {
    $("#slide").mouseenter(function(){
        var div = $("#slide");
        div.animate({height: '500px', opacity: '0.4'}, "slow");
        div.animate({width: '850px', opacity: '0.8'}, "slow");
        div.animate({height: '200px', opacity: '0.4'}, "slow");
        div.animate({width: '800px', opacity: '0.8'}, "slow");
    });
    var a;
    var b;
    //Dresses process
    $("#purchasechild1").click(function () {
        a= prompt("Please Enter Your Name");
        b=prompt("Quantity Items");
        var c=300;
      var  total_Amount1 = 0;
        total_Amount1 = b*c;
        var User_data1 = {
            name : a,
            Quantity : b,
            Unit_price : c,
            total_amount : total_Amount1
        }
        //var data = [{},{}];
        //var mydata =[];
        //function storeData (key,value){
        //    if(typeof value === 'number' && !isFinite(value)){
        //        return String(v)
        //    }
        //}


        //Array store in local storage

        //var data = localStorage.getItem('data');
        //data = JSON.parse(data);
        //
        //if(data && data.length ){
        //    data.push(User_data1)
        //} else {
        //    data = [User_data1]
        //}

        localStorage.setItem('data',JSON.stringify(User_data1));
        //document.getElementById('show_data').innerHTML = JSON.parse(localStorage.getItem(User_data.key));
        //localStorage['data'] = JSON.stringify(User_data1);
    });
    $("#purchasechild2").click(function(){
        a= prompt("Please Enter Your Name");
        b=prompt("Quantity Items");
        var d=400;
        var total_Amount2=0;
        total_Amount2 = b*d;
        var User_data2 = {
            name : a,
            Quantity : b,
            Unit_price : d,
            total_amount1 : total_Amount2
        }
        localStorage.setItem('data1',JSON.stringify(User_data2));
    })
    $("#purchasechild3").click(function(){
        a= prompt("Please Enter Your Name");
        b=prompt("Quantity Items");
        var d=500;
       var total_Amount3 = 0;
        total_Amount3 = b*d;
        var User_data3 = {
            name : a,
            Quantity : b,
            Unit_price : d,
            total_amount3 : total_Amount3
        }
        localStorage.setItem('data3',JSON.stringify(User_data3));
    })







    //fruits item
    $("#fi1").click(function(){
        a = prompt("Please Enter Your Name");
        b = Number(prompt("Quantity Items"));
        var s=100;
        var S_amount = 0;
        S_amount= b*s;
        var Fdata1 = {
            names : a,
            Quanity : b,
            Unit_price : s,
            total_amount1 : S_amount
        }
        localStorage.setItem('fdata1',JSON.stringify(Fdata1))
    });




     //end friuit items




    //Sports Item
    $("#si1").click(function () {
        a= prompt("Please Enter Your Name");
        b=prompt("Quantity Items");
        var e=100;
        var  S_Amount1 = 0;
        S_Amount1 = b*e;
        var sdata1 = {
            user : a,
            Quantity : b,
            Unit_price : e,
            total_amount1 : S_Amount1
        }

        localStorage.setItem('Sdata1',JSON.stringify(sdata1))
    });





        //bakeri Item
        $("#bi1").click(function () {
            a = prompt("Please Enter Your Name");
            b = prompt("Quantity Item");
            var cake =  5000;
            var bek = 0;
            bek =  b*cake;
            var bekri = {
                user : a,
                Quantity : b,
                Unit_price : cake,
                total_amount1 : bek
            };
            localStorage.setItem('bdata1',JSON.parse(bekri));
        });


    $("#bekri").click(function () {
        a= prompt("Please Enter Your Name");
        b=prompt("Quantity Items");
        var e=5000;
        var  b_Amount1 = 0;
        b_Amount1 = b*e;
        var bdata1 = {
            user : a,
            Quantity : b,
            Unit_price : e,
            total_amount1 : b_Amount1
        };

        localStorage.setItem('bdata1',JSON.stringify(bdata1))
    });

    $("#checkpage").click(function () {
        alert("Hello");
    });

    //Dress portion
    var obj1 = JSON.parse(localStorage.getItem('data'));
    var obj = JSON.parse(localStorage.getItem('data1'));
    var obj2 = JSON.parse(localStorage.getItem('data3'));
    var html = obj ? ("Name: "+obj.name +" Quantity :" +obj.Quantity + " Unit Price: "+ obj.Unit_price + " Total Amount :"+ obj.total_amount1) : "";
    var html1 = obj1? ( "Name: "+obj1.name +" Quantity :" +obj1.Quantity + " Unit Price: "+ obj1.Unit_price + " Total Amount :"+ obj1.total_amount) : "";
    var html2 = obj2 ? ("Name: "+obj2.name +" Quantity :" +obj2.Quantity + " Unit Price: "+ obj2.Unit_price + " Total Amount :"+ obj2.total_amount3) : "";
    //var Bill_Payment = obj.total_amount1+obj1.total_amount+obj2.total_amount3;
    var fobj1 = JSON.parse(localStorage.getItem('fdata1'));
    var fhtml1 = fobj1 ? ("Name: "+fobj1.names + " Unit Price: "+ fobj1.Unit_price + " Total Amount :"+ fobj1.total_amount1) : "";
    var sports1 = JSON.parse(localStorage.getItem('Sdata1'));
    var sports = sports1 ? ("Name: "+sports1.user +" Quantity :" +sports1.Quantity + " Unit Price: "+ sports1.Unit_price + " Total Amount :"+ sports1.total_amount1) : "";
    var bekriItem1 = JSON.parse(localStorage.getItem('bdata1'));
    var bekriItem =bekriItem1 ?("Name: "+bekriItem1.user +" Quantity :" +bekriItem1.Quantity +  " Unit Price: "+ bekriItem1.Unit_price + " Total Amount :"+ bekriItem1.total_amount1): "";
    document.getElementById('dressesData').innerHTML= "Dress:"+"<br>"+html+"<br>"+html1+"<br>"+html2+"<br>"+"Fruits :"+"<br>"+fhtml1 +"<br>"+"Sports"+"<br>"+sports+"<br>"+"<br>"+"Bakeri Items"+"<br>"+bekriItem;
    document.getElementById("index").innerHTML = window.onload(localStorage.clear());
});