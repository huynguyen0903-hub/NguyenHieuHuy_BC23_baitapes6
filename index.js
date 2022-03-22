document.querySelector('#signup-form .actions ul li:last-child a').onclick = function(){
    // let btnSubmit = document.querySelector('#signup-form ul li:last-child a');
    var arrInput = document.querySelectorAll("#signup-form input, #signup-form select");
    
    let nguoiDung = {};
    for (let input of arrInput){
        let {id,value,style} = input;
        nguoiDung = {...nguoiDung,[id]:value}

    }
    let contentHTML = '';
    for (let  key in nguoiDung){
        contentHTML += `
        <tr>
            <td>${key}</td>
            <td>${nguoiDung[key]}</td>
            </tr>
        `
    }
    document.querySelector('tbody').innerHTML = contentHTML;
}