function Part(position){
  this.acceleration = new JSVector(0, 0);
  this.velocity = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.position = position.copy();
  this.lifespan = 1000.0;
  this.rad = 15;
  this.star = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',';
}

Part.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.velocity.limit(3);
  this.lifespan -= 2;
  if(this.position.x + this.rad >= canvas.width || this.position.x - this.rad <= 0){
    this.position.x = canvas.width-this.position.x;
    //this.velocity.x = -(this.velocity.x);
  }
  if(this.position.y + this.rad >= canvas.height || this.position.y - this.rad <= 0){
    this.position.y= canvas.height-this.position.y;
    //this.velocity.y = -(this.velocity.y);
  }
}

Part.prototype.render = function(){
  ctx.beginPath();
  ctx.ellipse(this.position.x, this.position.y, 15, 15, 0, 0, 2*Math.PI);
  this.c = this.star + this.lifespan/1000.0 + ')';
  ctx.fillStyle = this.c;
  ctx.fill();
  this.strokeStyle = this.c;
  ctx.stroke();
}

Part.prototype.isDead = function(){
  if (this.lifespan < 0.0) {
    return true;
  } else {
    return false;
  }
}

Part.prototype.applyForce = function(f){
  this.acceleration.add(f);
}
