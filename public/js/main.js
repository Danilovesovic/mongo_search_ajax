var template = $('#template').html();
console.log(template);
$('input').on('keyup',function () {
 if ($(this).val().length > 2) {
     $.ajax({
         url : "/data",
         dataType : "json",
         type : "post",
         data : { data : $('input').val() }
     })
         .done(function (res) {
             console.log(res)
             var text = '';
             if (res.length !== 0) {
                 res.forEach(function (e) {
                     text += template.replace('{{name}}',e.name)
                     .replace('{{age}}',e.age)
                     .replace('{{job}}',e.job);
                 });
                 console.log(text)
                 $('#display').html(text);
             }
         })
 }
});