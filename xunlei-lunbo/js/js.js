$(function()
{
	init()
	//初始化函数
	function init()
	{
		$('.playImg img').hide().eq(0).show();
		// $('.playImg img').eq(0).show().siblings('img').hide();这种写法繁琐
		$('.bar div').hide();
		$('.nav img').css('border','1px solid white').eq(0).css('border','1px solid yellow')
		setTimeout(function()
			{
				$('.bar div').eq(now).show();
			},800);
	};

	var time=null;
	//hover小图切换大图
	var now=0;
	$('.nav img').hover(
		function()
		{
			now=$(this).index();
			changeImg();
		}
	)
	//大图切换
	function changeImg()
	{
		$('.playImg img').hide().eq(now).show();
		$('.bar div').hide();
		setTimeout(function()
			{
				$('.bar div').eq(now).show();
			},800);
		$('.nav img').css('border','1px solid white').eq(now).css('border','1px solid yellow');
		$('.trangle').css('left',now*75+'px');
	}
	//自动播放
	function move()
	{
		if(now==$('.nav img').length-1)
			{
				now=0;
			}
			else
			{
				now++;
			}
			changeImg();
	}
	time=setInterval(move,3000);

	//鼠标移入暂停，鼠标移出自动播放
	$('.wrap').hover(function()
	{
		clearInterval(time);
	},function()
	{
		time=setInterval(move,3000);
	})
	
})