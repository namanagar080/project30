class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
  if(this.body.speed<3){
    super.display();
  }
  else{
    push ();
    World.remove(world,this.body);
    tint (255,this.visibility);
this.visibility-=5;
pop ();
  }
}
};
