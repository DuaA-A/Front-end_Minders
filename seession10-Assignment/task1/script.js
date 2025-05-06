document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        if(!response.ok)
            console.log('error');
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const dataList = document.getElementById('data-table');
        for(let i=0;i<data.length;i++){
            let tr=document.createElement('tr');
            tr.innerHTML=`
                <th>${data[i].userId}</th>
                <th>${data[i].id}</th>
                <th>${data[i].title}</th>
                <th>${data[i].body}</th>
            `;
            dataList.appendChild(tr);
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})