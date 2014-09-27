/* 
HTML
------
<td>
<div class="pwdbar"><div class="pwdbar2"></div></div>
<input type="password" id="frmsignup_pwd" class="input_txt" name="pwd1" value=""  />
</td>

CSS
-----
pwdbar has fixed width,
pwdbar2 has a dynamic width(unit: %) which is decided by javascript
*/
$frmsignup.find('.pwdbar').siblings('[type=password]').keyup(function(){
  var pwd=$(this).val(),
      pwd_match = [/[a-z]+/, /[A-Z]+/, /[0-9]+/],
      pwd2_width=[0,'33%','66%','100%'];
      match=0,
      maxMatch=pwd2_width.length-1;
  for(var k in pwd_match){
    if(pwd_match[k].test(pwd)){match++;} // blog: always use bracket for one line code.
  }
  if(match<3&&pwd.length>9){
    match++;
  }
  if(match<3&&pwd.length>14){
    match++;
  }
  if(match>maxMatch){match=maxMatch;}
  $(this).siblings('.pwdbar').eq(0).find('.pwdbar2').css('width',pwd2_width[match]);
}).trigger('keyup');

