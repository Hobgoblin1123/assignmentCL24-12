jQuery(function(){
  $('#shutterBtn').on('click',function(){
    $('#shutterBtn').fadeOut(2000);
    $('#shutterBtn').css('animation','clickBtn 0.50s forwards');
    $('#bar1').css('animation','bar1 1s forwards'); //forwards...アニメーション終了後の状態を保存
    $('#bar2').css('animation','bar2 1s forwards');
    setTimeout(function(){
      $('#shutter1').fadeOut(2000);
    },1000); //読み込みしてから1000ミリ秒後に実行

    //shutter1がフェードアウトしてから300ミリ秒後にshutter2のアニメーション(lazer)実行
    setTimeout(function(){
      $('#lazer').css('animation','lazer forwards 4.0s');
    //lazerアニメーションが終わりそうなときにshutter2自体をフェードアウトさせる
      setTimeout(function(){
        $('#shutter2').fadeOut(1000);
      },3000);
    },3300);
    setTimeout(function(){
      $('shutter').remove();
    },14500);
  });
});
