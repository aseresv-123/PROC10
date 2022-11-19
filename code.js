var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["97e4d5e6-08b0-45e7-9f48-112168e1a1bd","9eea345f-e9bd-47a8-8084-66489b1feb1e","7812423e-1546-474e-8628-2eb84e634eed"],"propsByKey":{"97e4d5e6-08b0-45e7-9f48-112168e1a1bd":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc/category_people/kid_36_side.png","frameSize":{"x":225,"y":335},"frameCount":1,"looping":true,"frameDelay":2,"version":"AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":335},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AKnIi4fARdbZ_jONkZ4dRc4pyeaD_Gwc/category_people/kid_36_side.png"},"9eea345f-e9bd-47a8-8084-66489b1feb1e":{"name":"cars","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":2,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"},"7812423e-1546-474e-8628-2eb84e634eed":{"name":"commercial","sourceUrl":"assets/api/v1/animation-library/gamelab/loOkl.ZSx9w_KHQ692ewHrxrHiqfMFGU/category_buildings/commercial_09.png","frameSize":{"x":314,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"loOkl.ZSx9w_KHQ692ewHrxrHiqfMFGU","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":314,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loOkl.ZSx9w_KHQ692ewHrxrHiqfMFGU/category_buildings/commercial_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var tienda;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
sam.setAnimation("sam");
sam.scale = 0.08;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
car1.setAnimation("cars");
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
car2.setAnimation("cars");
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
car3.setAnimation("cars");
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car4.setAnimation("cars");

  
  
  car1.velocityY = 4;
car1.scale = 0.20;
  car2.velocityY = 4;
car2.scale = 0.20;
  car3.velocityY = -4;
car3.scale = 0.20;
  car4.velocityY = -4;
car4.scale = 0.20;
 tienda = createSprite(370, 200, 80, 20);
tienda.setAnimation("commercial");
tienda.scale = 0.2;

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);

  if(sam.isTouching(tienda))
  text("You Win");
  strokeWeight(0);
  fill("red");
  rect(200,200,20,20);
  fill("yellow");
  rect(200,200,20,20);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 4;
  }
  if(keyDown("left")){
    sam.x = sam.x - 4;
  }
  if(keyDown("down")){
    sam.y = sam.y + 4;
  }
  if(keyDown("up")){
    sam.y = sam.y -4;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
