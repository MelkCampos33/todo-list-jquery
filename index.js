
$(document).ready( () => {

    // adicionando funcionalidade ao button
    $('#button').click( () => {
        var toAdd = $('input[name=ListItem]').val();
        $('ol').append('<li>' + toAdd + '</li>');
    });
    
    // click duplo para concluir a tarefa  
    $(document).on('dblclick','li', function(){
    $(this).toggleClass('strike').fadeOut('slow');    
});
        
    $('input').focus(() => {
    $(this).val('');
});
        
    $('ol').sortable();  

    }
);