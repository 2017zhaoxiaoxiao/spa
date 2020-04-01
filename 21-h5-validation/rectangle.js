/* global $: true */
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#cal'),
      $perimeter =$('#peri'),
      $area = $('#area');
  $btnCal.click(function(){
    var w =Number($width.val());
    var h =Number($height.val());
    var p=2 * (w+h),
        a=w*h;
    $perimeter.val(Math.round(p * Math.pow(10, 2)) / Math.pow(10, 2));
    $area.val(Math.round(a* Math.pow(10, 2)) / Math.pow(10, 2));
  });
});
