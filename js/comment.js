var now;
function print() {
    now = new Date();
    if($('#comment').val()){
        $('#content').prepend('<p>' + $('#comment').val() + '\t댓글등록시간 : ' + now.getHours() + ' : ' + now.getMinutes() + '</p>');
        $('#comment').val('');
    }
}
$('#button').click(function() {
    print();
});
$('#comment').keypress(function(e){
    if(e.keyCode == 13){
        print();
    }
});
