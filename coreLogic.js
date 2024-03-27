let arr1=[];
let arr2=[];
let result=[];
//let tbl;
//let tableName;
//let label1,label2,label3;
//let image=document.createElement('img');
function initialCheck(){
    let input1=document.getElementById("input1").value;
    let input2=document.getElementById("input2").value;
    let len1=input1.length;
    let len2=input2.length;
    //forcing to reset array in case number of bit is changed for both input and expecting different length output without refresh
    arr1=[];
    arr2=[];
    result=[];
    if(len1==len2){
        if(len1!=0&&len2!=0){
            if(checkInput1(input1)&&checkInput2(input2)){
                for(let i=0;i<len1&&len2;i++){
                    arr1[(len1-1)-i]=Number.parseInt(input1%10);
                    input1=Number.parseInt(input1/10);
                    arr2[(len2-1)-i]=Number.parseInt(input2%10);
                    input2=Number.parseInt(input2/10);
                }
                //return true;
            }
        }
        else{
            alert("You did not enter any Number");
        }
    }
    else{
        alert("Length of the two Binary Numbers are not Equal");
    }
    //return false;
}
//checking not exception case
/*function notException(){
    //forcing to reset array in case number of bit is changed for both input and expecting different length output without refresh
    arr1=[];
    arr2=[]
    result=[];
    let input=document.getElementById('input1').value;
    let len=input.length;
    if(len!=0){
        if(checkInput1(input)){
            for(let i=0;i<len;i++){
                arr1[(len-1)-i]=Number.parseInt(input%10);
                input=Number.parseInt(input/10);
            }
            return true;
        }
    }
    else{
        alert("Input Box 1 is Empty");
    }
    //console.log(arr1);
    return false;
}
//function to check whether input 1 is valid or not
function checkInput1(input1){
    /*if(input1.length>4||input1.length<4){
        document.getElementById("input1").style.border="2px solid red";
        alert("invalid length of number");
        return false;
    }*/
    for(let i=0;i<input1.length;i++){
        console.log(input1.charAt(i));
        if(input1.charAt(i)==1||input1.charAt(i)==0){
            document.getElementById("input1").style.border="none";
            continue;
        }
        else{
            document.getElementById("input1").style.border="2px solid red";
            alert("Entered Number is not Binary");
            return false;
        }
    }
    return true;
}
function to check whwether input 2 is valid or not
function checkInput2(input2){
    if(input2.length>4||input2.length<4){
        document.getElementById("input2").style.border="2px solid red";
        alert("invalid length of number");
        return false;
    }*/
  /*  for(let i=0;i<input2.length;i++){
        if(input2.charAt(i)==1||input2.charAt(i)==0){
            document.getElementById("input2").style.border="none";
            continue;
        }
        else{
            document.getElementById("input2").style.border="2px solid red";
            alert("Entered Number is not Binary");
            return false;
        }
    }
    return true;
}
/*function andop(){
    initialCheck();

    /*
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
          result[i]=(arr1[i]==1&&arr2[i]==1)?1:0;
        }
        console.log(result);
        setTable1('AND');
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('AND');
    }
}
function orop(){
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
            result[i]=(arr1[i]==1||arr2[i]==1)?1:0;
        }
        //console.log(result);
        setTable1('OR');
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('OR');
    }
}
function notop(){
    if(notException()){
        for(let i=0;i<arr1.length;i++){
            result[i]=(arr1[i]==0)?1:0;
            arr2[i]=0;
        }
        setTable2('NOT');
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('NOT');
    }
    //console.log(arr1);
    //console.log(result);
}
function nandop(){
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
            result[i]=(arr1[i]==1&&arr2[i]==1)?0:1;
        }
        //console.log(result);
        setTable1('NAND');
        //document.getElementById('table-cont').style.visibility="visible";
        imageSet('NAND');
    }
}
function norop(){
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
            result[i]=(arr1[i]==1||arr2[i]==1)?0:1;
        }
        setTable1('NOR');
        //console.log(result);
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('NOR');
    }
}
function xorop(){
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]==1&&arr2[i]==0){
                result[i]=1;
            }else if(arr1[i]==0&&arr2[i]==1){
                result[i]=1;
            }else{
                result[i]=0;
            }
        }
        //console.log(result);
        setTable1('XOR');
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('XOR');
    }
}
function xnorop(){
    if(initialCheck()){
        for(let i=0;i<arr1.length;i++){
            if (arr1[i]==1&&arr2[i]==0) {
                result[i]=0;
            }else if(arr1[i]==0&&arr2[i]==1){
                result[i]=0;
            }else{
                result[i]=1;
            }
        }
        //console.log(result);
        setTable1('XNOR');
        document.getElementById('table-cont').style.visibility="visible";
        imageSet('XNOR');
    }
}
function refresh(){
    window.location.reload();
}
/*function setTable1(name){
    if(tbl!=undefined){
        removeTable();
    }
    //create table name
    tableName=document.createElement('h3');
    tableName.innerHTML="TRUTH TABLE for Digital "+name+" Function";
    tableName.style.color='#ffff';
    document.getElementById('table-cont').appendChild(tableName);
    //create table
    tbl=document.createElement('table');
    for(let k=0;k<2;k++){
        if(k==0){
            let tableHead=document.createElement('thead');
            for(let i=0;i<2;i++){
                let row=document.createElement('tr');
                if(i==0){
                    for(let j=0;j<2;j++){
                        let column=document.createElement('td');
                        if(j==0){
                            column.innerHTML="Input";
                            column.colSpan="2";
                        }
                        else{
                            column.innerHTML="Output";
                        }
                        column.style.backgroundColor='beige';
                        column.style.border='2px solid black';
                        column.style.padding='10px 50px';
                        row.appendChild(column);
                    }
                }
                else{
                    for(let j=0;j<3;j++){
                        let column=document.createElement('td');
                        if(j==0){
                            column.innerHTML="Input 1";
                        }
                        else if(j==1){
                            column.innerHTML="Input 2";
                        }
                        else{
                            column.innerHTML="";
                        }
                        column.style.backgroundColor='beige';
                        column.style.border='2px solid black';
                        column.style.padding='10px 50px';
                        row.appendChild(column);
                    }
                }
                tableHead.appendChild(row);
            }
            tbl.appendChild(tableHead);
        }
        else{
            tableBody=document.createElement('tbody');
            for(let i=0;i<arr1.length;i++){
                let row=document.createElement('tr');
                for(let j=0;j<3;j++){
                    let column=document.createElement('td');
                    if(j==0){
                        column.innerHTML=arr1[i];
                        column.style.backgroundColor='beige';
                        column.style.border='2px solid black';
                        column.style.padding='10px 50px';
                    }
                    else if(j==1){
                        column.innerHTML=arr2[i];
                        column.style.backgroundColor='beige';
                        column.style.border='2px solid black';
                        column.style.padding='10px 50px';
                    }
                    else{
                        column.innerHTML=result[i];
                        column.style.backgroundColor='beige';
                        column.style.border='2px solid black';
                        column.style.padding='10px 50px';
                    }
                    row.appendChild(column);
                }
                tableBody.appendChild(row);
            }
            tbl.appendChild(tableBody);
        }
    }
    tbl.style.width='100%';
    document.getElementById('table-cont').appendChild(tbl);
}
/*function setTable2(name){
    if(tbl!=undefined){
        removeTable();
    }
    //create table name
    tableName=document.createElement('h3');
    tableName.innerHTML="TRUTH TABLE for Digital "+name+" Function";
    tableName.style.color='#ffff';
    document.getElementById('table-cont').appendChild(tableName);
    //create table
    tbl=document.createElement('table');
    for(let k=0;k<2;k++){
        if(k==0){
            let tableHead=document.createElement('tbody');
            let row=document.createElement('tr');
            for(let j=0;j<2;j++){
                let column=document.createElement('td');
                if(j==0){
                    column.innerHTML="Input";
                }
                else{
                    column.innerHTML="Output";
                }
                column.style.backgroundColor='beige';
                column.style.border='2px solid black';
                column.style.padding='10px 50px';
                row.appendChild(column);
            }
            tableHead.appendChild(row);
            tbl.appendChild(tableHead);
        }
        else{
            let tableBody=document.createElement('tbody');
            for(let i=0;i<arr1.length;i++){
                let row=document.createElement('tr');
                for(let j=0;j<2;j++){
                    let column=document.createElement('td');
                    if(j==0){
                        column.innerHTML=arr1[i];
                    }
                    else{
                        column.innerHTML=result[i];
                    }
                    column.style.backgroundColor='beige';
                    column.style.border='2px solid black';
                    column.style.padding='10px 50px';
                    row.appendChild(column);
                }
                tableBody.appendChild(row);
            }
            tbl.appendChild(tableBody);
        }
    }
    tbl.style.width='100%';
    document.getElementById('table-cont').appendChild(tbl);
}
/*function removeTable(){
    document.getElementById('table-cont').removeChild(tableName);
    let tableParent=tbl.parentElement;
    tableParent.removeChild(tbl);
}
/*function imageSet(op){
    image.style.position='absolute';
    image.style.zIndex='-1';
    switch(op){
    case 'AND':
        image.src='and.png';
        setLabel1();
        break;
    case 'OR':
        image.src='or.png';
        setLabel1();
        break;
    case 'NOT':
        image.src='not.png';
        setLabel2();
        break;
    case 'NAND':
        image.src='nand.png';
        setLabel1();
        break;
    case 'NOR':
        image.src='nor.png';
        setLabel1();
        break;
    case 'XOR':
        image.src='xor.png';
        setLabel1();
        break;
    case 'XNOR':
        image.src='xnor.png';
        setLabel1();
        break;
    default:
        image.src='';
    }
    image.style.height='300px';
    image.style.width='100%';
    document.getElementById('imgdiv').appendChild(image);
}
/*function setLabel1(){
    if(label1!=undefined){
        removeLabel();
    }
    label1=document.createElement('div');
    label1.style.height='30px';
    label1.style.width='10%';
    //label1.style.border='1px solid blue';
    label1.style.padding='2px 2px';
    label1.style.overflowX='auto';
    label1.style.overflowY='hidden';
    label1.style.whiteSpace='nowrap';
    label1.style.top='58px';
    label1.style.left='5%';
    label1.style.position='absolute';
    label1.style.zIndex='1'; 
    let para1=document.createElement('h4');
    let str1=replaceAll(arr1.toString());
    para1.innerHTML=str1;
    label1.appendChild(para1);
    document.getElementById('imgdiv').appendChild(label1);
    label2=document.createElement('div');
    label2.style.height='30px';
    label2.style.width='10%';
    //label2.style.border='1px solid blue';
    label2.style.padding='2px 2px';
    label2.style.overflowX='auto';
    label2.style.overflowY='hidden';
    label2.style.whiteSpace='nowrap';
    label2.style.bottom='125px';
    label2.style.left='5%';
    label2.style.position='absolute';
    label2.style.zIndex='1'; 
    let para2=document.createElement('h4');
    let str2=replaceAll(arr2.toString())
    para2.innerHTML=str2;
    label2.appendChild(para2);
    document.getElementById('imgdiv').appendChild(label2);
    label3=document.createElement('div');
    label3.style.height='30px';
    label3.style.width='10%';
    //label3.style.border='1px solid blue';
    label3.style.padding='2px 2px';
    label3.style.overflowX='auto';
    label3.style.overflowY='hidden';
    label3.style.whiteSpace='nowrap';
    label3.style.top='100px';
    label3.style.right='5%';
    label3.style.position='absolute';
    label3.style.zIndex='1'; 
    let para3=document.createElement('h4');
    let str3=replaceAll(result.toString());
    para3.innerHTML=str3;
    label3.appendChild(para3);
    document.getElementById('imgdiv').appendChild(label3);
}
/*function setLabel2(){
    if(label1!=undefined){
        removeLabel();
    }
    label1=document.createElement('div');
    label1.style.height='30px';
    label1.style.width='10%';
    //label1.style.border='1px solid blue';
    label1.style.padding='2px 2px';
    label1.style.overflowX='auto';
    label1.style.overflowY='hidden';
    label1.style.whiteSpace='nowrap';
    label1.style.top='95px';
    label1.style.left='5%';
    label1.style.position='absolute';
    label1.style.zIndex='1'; 
    let para1=document.createElement('h4');
    let str1=replaceAll(arr1.toString());
    para1.innerHTML=str1;
    label1.appendChild(para1);
    document.getElementById('imgdiv').appendChild(label1);
    label3=document.createElement('div');
    label3.style.height='30px';
    label3.style.width='10%';
    //label3.style.border='1px solid blue';
    label3.style.padding='2px 2px';
    label3.style.overflowX='auto';
    label3.style.overflowY='hidden';
    label3.style.whiteSpace='nowrap';
    label3.style.top='95px';
    label3.style.right='5%';
    label3.style.position='absolute';
    label3.style.zIndex='1'; 
    let para3=document.createElement('h4');
    let str3=replaceAll(result.toString());
    para3.innerHTML=str3;
    label3.appendChild(para3);
    document.getElementById('imgdiv').appendChild(label3);
    
}
function removeLabel(){
    let l1parent=label1.parentElement;
    l1parent.removeChild(label1);
    label1=undefined;
    if(label2!=undefined){
        let l2parent=label2.parentElement;
        l2parent.removeChild(label2);
        label2=undefined;
    }
    let l3parent=label3.parentElement;
    l3parent.removeChild(label3);
    label3=undefined; 
}
//to remove , from string which is converted from array
function replaceAll(str){
    return str.replace(/,/gi,'');
}