function Orb(){
  this.loc = new JSVector(100, 0);
  this.rad = 25;
  this.c = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
  this.theta = 0;
  this.angvel = 1/25;
}

Orb.prototype.update = function(){
  this.theta += this.angvel;
  this.loc.setDirection(Math.sin(this.theta)*(3/2));
}

Orb.prototype.render = function(){
  // ctx.beginPath();
  // var loc = JSVector.addGetNew(mover.loc, this.loc);
  // ctx.arc(loc.x,loc.y,this.rad,0,2*Math.PI);
  // ctx.fillStyle = this.c;
  // ctx.fill();
  // ctx.strokeStyle = this.c;
  // ctx.stroke();
}
