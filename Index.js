$(document).ready(function () {

    $('#btnHobbies').click(function(){
        if($('#hobbies').val() == '') {
            alert("Digite um hobbie!");
        } else {
            $('#hobbiesList').append('<li>' + $('#hobbies').val() + '</li>');
            $('#hobbies').val('');
        }
    });

    $('#btnHobClean').click(function(){
        $('#hobbiesList').empty();
    });

    $('#btnDoubts').click(function(){
        if($('#doubts').val() == '') {
            alert("Digite uma dúvida!");
        } else {
            $('#doubtsList').append('<li>' + $('#doubts').val() + '</li>');
            $('#doubts').val('');
        }
    });

    $('#btnDouClean').click(function(){
        $('#doubtsList').empty();
    });
});