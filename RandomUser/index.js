

document.querySelector('#getUser').addEventListener("click",randomUser)
function randomUser(){

$.getJSON("https://randomuser.me/api",function(data){
        console.log(data);

        const userPicture = data.results[0].picture.large;
        const firstName = data.results[0].name.first;
        const lastName = data.results[0].name.last;
        const userEmail = data.results[0].email;
        const phone = data.results[0].phone;
        const location = data.results[0].location.country;
        
        const allData ={
            
            firstName:firstName,
            lastName:lastName,
            userEmail:userEmail,
            phone:phone,
            location:location
        }
        var img = document.createElement('img');
        img.src = userPicture;
        document.getElementById("myData").appendChild(img);
       
        console.log(allData);
        var codeBlock = '<div class="content">' +
                   
                 
                    '<h5> <span>User Full Name </span> ' + allData.firstName +' '+ allData.lastName + '  </h5>' +
                    '<h5> <span>User Email </span>  ' + allData.userEmail + '  </h5>' +
                    '<h5> <span>Tel </span> ' + allData.phone + '  </h5>' +
                    '<h5> <span>Country </span> ' + allData.location + '  </h5>' +
                   
                '</div>';
        var mainContainer = document.getElementById("myData");
        mainContainer.classList.add = ('mainContainerClass');
        mainContainer.style.color = "#fff";
     

        mainContainer.innerHTML = codeBlock;
        mainContainer.appendChild(img);
        

    })
}
