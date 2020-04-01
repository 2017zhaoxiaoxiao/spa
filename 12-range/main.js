$(function() {
    var $range =$('#range'),
        $age=$('#age');
    $range.change(function(){
        console.log($range.val());
          $age.html($range.val());

    })
})
