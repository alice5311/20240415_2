let bg = ["#F2EDEC"];

//var gradationpallet1 ="7f5539-606c38-ff758f-f7ede2-936639-4ecdc4-f9c74f".split("-").map(a=>"#"+a)
//var gradationpallet2 ="582f0e-c6ac8f-fe6d73-713200-bd897e-f9c74f-6a4c93-e5383b".split("-").map(a=>"#"+a)
//var color ="e9c46a-e63946-f7ede2-ffffff-582f0e".split("-").map(a=>"#"+a)
let topping = ["#e9c46a", "#e63946", "#f7ede2", "#ffffff", "#582f0e"];
// グラデーションの色　上, 下
let gradationpallet1 = [
  "#7f5539",
  "#606c38",
  "#ff758f",
  "#f7ede2",
  "#936639",
  "#4ecdc4",
  "#f9c74f",
];
let gradationpallet2 = [
  "#582f0e",
  "#c6ac8f",
  "#fe6d73",
  "#713200",
  "#bd897e",
  "#f9c74f",
  "#6a4c93",
  "#e5383b",
];

//let cx = this.x + this.w / 2;
//let cy = this.y + this.h / 2;
//let d = h;
//let d = this.h;
var ices = []
var ice


class ice_class{  //宣告一個ice_class物件，
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容   
    this.p =args.p || {x:width/2,y:height/2};
    this.w =args.w ||random(30,50)
    this.h =args.h ||random(30,50)
    this.d =args.d ||random(30,50)
    this.v = args.v || {x:random(-2,2),y:random(-2,2)}
    this.gdcolor1 = random(gradationpallet1);
    this.gdcolor2 = random(gradationpallet2);
    this.color = random(topping)
    //this.gradient=[this.w / 2,-this.h / 2,this.w / 2,this.h / 2]
  }
  draw(){   //畫出物件畫面的程式碼，一個物件繪出的程式碼    
    push();
    translate(this.p.x + this.w / 2, this.p.y + this.h / 2);
      rotate(random(-20, 20));

      //　どこからどこにかけてのグラデーションか
      let gradient = drawingContext.createLinearGradient(
        this.w / 2,
        -this.h / 2,
        this.w / 2,
        this.h / 2
      );

      // グラデーションの色(gradationpalletからランダムに決定)
      let gdcolor1 = random(gradationpallet1);
      let gdcolor2 = random(gradationpallet2);

      // グラデーションの設定(0～1 の間のどこに, その色を置く)
      gradient.addColorStop(0, this.gdcolor1);
      gradient.addColorStop(1, this.gdcolor2);

      // このグラデーションで塗りつぶす

      noStroke();
      drawingContext.fillStyle = gradient;
      //fill(this.gdcolor1)

      arc(0, 0, this.d * 0.9, this.d, 180, 360);

      circle(0, this.d / 8, this.d / 2);
      circle(this.d / 3, this.d / 8, this.d / 2);
      circle(-this.d / 3, this.d / 8, this.d / 2);

      for (let n = 0; n < this.d / 5; n++) {
        fill(this.color);
        circle(
          random(-this.d / 3, this.d / 3),
          random(-this.d / 14, -this.d / 2.5),
          random(this.d / 10)
        );
      }

      pop();
  }

 
  update(){  //物件移動更新後的程式碼
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  for (i=0;i<50;i=i+1){ //產生多個資料
    ice= new ice_class({ 
      //傳一串參數到class內
      p:{x:random(width/2-300,width/2+300),y:100}
    })
    ices.push(ice)
  }
}
function draw() {
  background(bg);
  for(j=0;j<ices.length;j=j+1){
    ice = ices[j]
    ice.draw()
    ice.update()

  }
}