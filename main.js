function sortByAge(a, b){
    if (parseInt(a.age) > parseInt(b.age) == true)
    {
        client.table = client.table.reverse();
    }
    else
    {
        return parseInt(a.age) < parseInt(b.age);
    }
}

function sortByName(a, b)
{
    if (a.name.toUpperCase() > b.name.toUpperCase() == true)
    {
        client.table = client.table.reverse();
    }
    else
    {
        return a.name.toUpperCase() < b.name.toUpperCase();
    }
}


class Client 
{
    
    constructor() 
    {
        this.table = [];
    }
    
    add(client) 
    {
        this.table.push(client);
    }
    
    
    // viewClient(sortBy){
        //         $('#test').empty();
        //         client.table.sort(sortBy).forEach(user => {
            //                 jQuery($('#test')).prepend('<tr class="col-12"><td>'+user.name+'</td><td>'+user.age+'</td><td>'+user.id+'</td></tr>');
            //             });
            //         }
            
    viewClient(sortBy)
    {
        $('#test').empty();
        client.table.sort(sortBy).forEach(function(user) 
        {           
            $('#test').prepend('<tr> <td>' + user.name + '</td> <td>' + user.age + '</td> <td>' + user.ID + '</td> </tr>');
        });
    }
}

        
var client = new Client();

$.ajax({ 
    type: 'GET', 
    url: 'users.json', 
    async: false,
    data : 'clients',     
    success: function(data) 
    {
        for (let i = 0; i < data.clients.length; i++)
        {
            const e = data.clients[i];
            client.add(e);
        }
    }, 
    error: function() { 
        alert('La requête n\'a pas abouti'); 
    } 
});

function checkSortBy()
{
    switch($('#slctExo4').val()){
        case "1":
            client.viewClient(sortByAge);
            // console.log($('#slctExo4').val());
            break;
        case "2":
            client.viewClient(sortByName);
            // console.log($('#slctExo4').val());
            break;
    }
}