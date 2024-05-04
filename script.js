$(document).ready(function(){
    $("#searchUser").click(function(){
        var userId = $('#userId').val();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users' + userID,
            type: 'GET',
            success: function(user){
                var html ='';
                html += '<div class="card carta" style="width: 18rem;">';
                    html += '<img src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" class="card-img-top"">';
                    html += '<div class="card-body"> ' 
                    html += '<p> Usuario: ' + data[i].id + '</p>';
                    html += '<p> Nombre: ' + data[i].name + '</p>';
                    html += '<p> Emeil: ' + data[i].emeil + '</p>';
                    html += '<p> City: ' + data[i].address.city + '</p>';
                  
                $('#result').html(html);
            },
            error:function(error){
                console.log('Error:', error);
             }

        });
    });
});