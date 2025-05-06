document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response =>{
            if(!response.ok)
                console.log('error');
            return response.json();
        })
        .then(user=>{
            console.log(user);
                const profile = document.getElementById('profile-section');
                profile.innerHTML = `
                <div><span class="label">Name:</span> <span class="value">${user.name}</span></div>
                <div><span class="label">Username:</span> <span class="value">${user.username}</span></div>
                <div><span class="label">Email:</span> <span class="value">${user.email}</span></div>
                <div><span class="label">Phone:</span> <span class="value">${user.phone}</span></div>
                <div><span class="label">Website:</span> <span class="value"><a href="http://${user.website}" target="_blank" style="pointer:cursor; color:#4d4d05">${user.website}</a></span></div>
                `;
                const addr = user.address;
                const address = document.getElementById('address-section');
                address.innerHTML = `
                <div><span class="label">Street:</span> <span class="value">${addr.street}</span></div>
                <div><span class="label">Suite:</span> <span class="value">${addr.suite}</span></div>
                <div><span class="label">City:</span> <span class="value">${addr.city}</span></div>
                <div><span class="label">Zipcode:</span> <span class="value">${addr.zipcode}</span></div>
                <div><span class="label">Geo (lat, lng):</span> <span class="value">${addr.geo.lat}, ${addr.geo.lng}</span></div>
                `;
                const comp = user.company;
                const company = document.getElementById('company-section');
                company.innerHTML = `
                <div><span class="label">Company Name:</span> <span class="value">${comp.name}</span></div>
                <div><span class="label">Catch Phrase:</span> <span class="value">"${comp.catchPhrase}"</span></div>
                <div><span class="label">Business Focus:</span> <span class="value">${comp.bs}</span></div>
                `;
        })
        .catch((error)=>{
            console.log(error);
        })
})