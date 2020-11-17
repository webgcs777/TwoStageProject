class Banner {
	//判断一个类是否需要参数
	//从HTML是否需要获取元素
	constructor(newImg, newLis) {
		//初始的index为0
		this.index = 0;
		this.oImg = newImg;
		this.oLis = newLis;
		//设置初始的背景图
		this.oImg.style.backgroundImage = "url(img/" + this.index + ".jpg)";
		//设置初始红色点的位置
		//oLis数组
		this.oLis[this.index].style.backgroundColor = "red";
	}

	//设置背景
	setBgcImage() {
		this.oImg.style.backgroundImage = "url(img/" + this.index + ".jpg)";
	}

	//设置li颜色
	setLiColor() {

		for (let i = 0; i < this.oLis.length; i++) {
			if (this.index == i) {
				this.oLis[i].style.backgroundColor = "red";
			} else {
				this.oLis[i].style.backgroundColor = "#ffffff";
			}
		}
	}
	//点击先后一步
	next() {
		this.index++;
		//如果index（图的位置）等于oLis.length（li的总数量也可以理解为最大值）
		if (this.index == this.oLis.length) {
			//那么就让index（图的位置）等于0  ，等于0就是等于第一张
			this.index = 0;
		}
		//再次调用函数
		this.setBgcImage();
		this.setLiColor();

	}
	//点击向前一步
	prev() {
		this.index--;
		if (this.index == -1) {
			this.index = this.oLis.length - 1;
		}
		this.setBgcImage();
		this.setLiColor();
	}
	//小黑点
	click() {
		let that = this;
		for (let i = 0; i < this.oLis.length; i++) {
			this.oLis[i].onclick = function() {
				that.index = i;
				that.setBgcImage();
				that.setLiColor();
			}
		}
	}
	//事件
	getEvent() {
		let oBtnNext = document.getElementById("btn-next");
		let oBtnPrev = document.getElementById("btn-previous");
		let that = this;
		oBtnNext.onclick = function() {
			that.next();			
		}
    //自动播放
    
	setInterval(()=>{
			that.next() 
		},5000)
	 
		oBtnPrev.onclick = function() {
			that.prev();
		}
		this.click();
	}


}

