var base={

	// 获取node
	id:function(id){
		return document.getElementById(id)
	},
	name:function(name){
		return document.getElementsByName(name)
	},
	tagname:function(tagname){
		return document.getElementsByTagName(tagname)
	},
};