$(document).ready(()=>{
    let list = [
		{ 	
			img_title : "<573돌 한글날 : 다시 보는 한글, 다시 보는 한울>",
			img_url : "0.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "2019년 한국의 그래픽 문화. 문한샘, 박한솔",
			img_url : "1.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "",
			img_url : "3.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "6번째 감각",
			img_url : "4.jpg" ,
			img_desc : "인간의 다섯가지 감각을 벗어나 과학적으로 설명되지 않는 예지럭, 직감, 텔레파시, 투시 등을 포함하고 있는 ‘6번째 감각’. 이것이 발현될 때 머리에서 연상되는 이미지 혹은 신체에 오는 여러 반응이 뒤섞이는 그 순간을 시각화하고자 하였습니다. 시각디자인과 연합 소모임 D:sense 에서 ‘감각’을 주제로 진행된 전시에 출품한 작업입니다." 
		},
		{ 	
			img_title : "",
			img_url : "5.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "",
			img_url : "6.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "",
			img_url : "7.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "",
			img_url : "8.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "",
			img_url : "9.jpg" ,
			img_desc : "" 
		},
	];

	let list2 = [
		{ 	
			img_title : "lettt",
			img_url : "l1.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l2.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l3.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l4.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l5.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l6.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l7.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l8.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l9.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l10.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l11.jpg" ,
			img_desc : "" 
		},
		{ 	
			img_title : "lettt",
			img_url : "l12.jpg" ,
			img_desc : "" 
		},
	];
	
    list.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx' : idx});
		$("#contents1-1").append(copied_thumb);

		$('[data-type-idx ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
	
	list2.map((item , idx) =>{
		let copied_thumb = $('.mockup').clone().removeClass('mockup');
		copied_thumb.find('.item-thumb_img').attr({'src': item.img_url , 'data-type-idx2' : idx});
		$("#contents1-2").append(copied_thumb);

		$('[data-type-idx2 ='+idx+']').on("click", function(){
			$("#contents1-3").find('.item-img').attr('src' , item.img_url);
			$("#contents1-3").find('.item-img_desc').text(item.img_desc);
			$("#guidebox1-3").find('.guidetext').text(item.img_title);
		});
	});
});
