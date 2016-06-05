.container{
	width:800px;
	height:400px;
	padding:20px;
	border:1px solid gray;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
	background: black;	
	text-align: center;
}
.slider_wrapper{
	overflow: hidden;
	position:relative;
	height:280px;
	top:auto;
}
#image_slider{

	position: relative;
	height: auto;
	list-style: none;
	overflow: hidden;
	float: left;
	/*Chrom default padding for ul is 40px */
	padding:0px;
	margin:0px;
}
#image_slider li{
	position: relative;
	float: left;
}
.nvgt{
	position:absolute;
	top: 120px;
	height: 50px;
	width: 30px;
	opacity: 0.6;
}
.nvgt:hover{
	opacity: 0.9;
}
#prev{
	background: #000 url('https://dl.dropboxusercontent.com/u/65639888/image/prev.png') no-repeat center;
	left: 0px;
}
#next{
	background: #000 url('https://dl.dropboxusercontent.com/u/65639888/image/next.png') no-repeat center;
	right: 0px;
}
#pager{
	/* firefox has different center method. this doesn't work for fire fox */
	/* not in the center*/
	padding:0px;
	position:relative;
	height:50px;
	margin:auto;
	margin-top:10px;
}
#pager li{
	padding: 0px;
	margin:5px;
	width:20px;
	height:20px;
	border:1px solid white;
	color:white;
	list-style: none;
	opacity: 0.6;
	float:left;
	border-radius: 3px;
	cursor: pointer;
}
#pager li:hover{
	opacity:0.9;
}
