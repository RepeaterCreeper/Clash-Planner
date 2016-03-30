var canvas = new fabric.Canvas('c', { selection: false });

//Settings
var stageOption = {'selectable': false, 'scaleX': 0.90, 'scaleY': 0.90}
var tokenTOption = {'borderColor': 'yellow', 'cornerColor': 'black', 'transparentCorners': false, 'lockRotation': true, 'lockScalingX': true, 'lockScalingY': true}
var tokenBOption = {'borderColor': 'yellow', 'cornerColor': 'black', 'transparentCorners': false, 'lockScalingX': true}
var tokenOption = {'borderColor': 'yellow', 'cornerColor': 'black', 'transparentCorners': false, 'lockRotation': true}
fabric.Image.fromURL('/res/image/testBase2.png', function(imageOut) {
    canvas.setWidth(840);
    canvas.setHeight(480);
    imageOut.set({
        lockRotation: true,
        selection: false
    });
    canvas.add(imageOut);
}, stageOption);

var line, isDown;
var allowedToDraw = true; // the default value

/* DRAW */

//Default
function straightLine(){
    canvas.on('mouse:down', function(o){
        isDown = true;
        if (!isDown || !allowedToDraw){
            return;
        } else {
            var pointer = canvas.getPointer(o.e);
            var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
            line = new fabric.Line(points, {
                strokeWidth: 2,
                fill: 'red',
                stroke: 'red',
                originX: 'center',
                originY: 'center'
            });
            canvas.add(line);
        }
    });
    canvas.on('mouse:move', function(o){
        if (!isDown || !allowedToDraw){
            return;
        } else {
            var pointer = canvas.getPointer(o.e);
            line.set({ x2: pointer.x, y2: pointer.y });
            canvas.renderAll();
        }
    });
    canvas.on('mouse:up', function(o){
        isDown = false;
    });
}

function addCircle(){ canvas.add(new fabric.Circle({ lockRotation: true, radius: 20, fill: "transparent", stroke: "red", strokeWidth: 3})); }
//Troops
function addToken(arg1) {
    //Settings
    var tokenWidth = 48;
    var tokenHeight = 48;

    switch (arg1) {
        //Troops
        case 'barbarian':fabric.Image.fromURL('/res/image/ui/tokens/token_Barb.png', function(img) {img.setHeight(tokenHeight);img.setWidth(tokenWidth);canvas.add(img);}, tokenTOption);break;
        case 'archer':fabric.Image.fromURL('/res/image/ui/tokens/token_Arch.png', function(img) {img.setHeight(tokenHeight);img.setWidth(tokenWidth);canvas.add(img);}, tokenTOption);break;
        case 'giant':fabric.Image.fromURL('/res/image/ui/tokens/token_Giant.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'goblin':fabric.Image.fromURL('/res/image/ui/tokens/token_Goblin.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'wallbreaker':fabric.Image.fromURL('/res/image/ui/tokens/token_Wallbreaker.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'balloon':fabric.Image.fromURL('/res/image/ui/tokens/token_Balloon.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'wizard':fabric.Image.fromURL('/res/image/ui/tokens/token_Wizard.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'healer':fabric.Image.fromURL('/res/image/ui/tokens/token_Healer.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'dragon':fabric.Image.fromURL('/res/image/ui/tokens/token_Dragon.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'pekka':fabric.Image.fromURL('/res/image/ui/tokens/token_PEKKA.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'minion':fabric.Image.fromURL('/res/image/ui/tokens/token_Minion.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'hogrider':fabric.Image.fromURL('/res/image/ui/tokens/token_HogRider.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'valkyrie':fabric.Image.fromURL('/res/image/ui/tokens/token_Valkyrie.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'golem':fabric.Image.fromURL('/res/image/ui/tokens/token_golem.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'witch':fabric.Image.fromURL('/res/image/ui/tokens/token_Witch.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'lavahound':fabric.Image.fromURL('/res/image/ui/tokens/token_LavaHound.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'bq':fabric.Image.fromURL('/res/image/ui/tokens/token_BarbarianKing.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;
        case 'aq':fabric.Image.fromURL('/res/image/ui/tokens/token_ArcherQueen.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenTOption);break;

        //Spells
        case 'lightning':fabric.Image.fromURL('/res/image/ui/tokens/spell_Lightning.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'heal':fabric.Image.fromURL('/res/image/ui/tokens/spell_Heal.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'rage':fabric.Image.fromURL('/res/image/ui/tokens/spell_Rage.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'jump':fabric.Image.fromURL('/res/image/ui/tokens/spell_Jump.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'freeze':fabric.Image.fromURL('/res/image/ui/tokens/spell_Freeze.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'poison':fabric.Image.fromURL('/res/image/ui/tokens/spell_Poison.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'earthquake':fabric.Image.fromURL('/res/image/ui/tokens/spell_Earthquake.png', function(img) {canvas.add(img);}, tokenOption);break;
        case 'haste':fabric.Image.fromURL('/res/image/ui/tokens/spell_Haste.png', function(img) {canvas.add(img);}, tokenOption);break;

        //Icons
        case 'redarrow':fabric.Image.fromURL('/res/image/ui/tokens/token_arrowRed.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenBOption);break;
        case 'yellowarrow':fabric.Image.fromURL('/res/image/ui/tokens/token_arrowYellow.png', function(img) {img.setWidth(tokenWidth);img.setHeight(tokenHeight);canvas.add(img);}, tokenBOption);break;
        case 'tesla':fabric.Image.fromURL('/res/image/ui/tokens/token_Tesla.png', function(img) {canvas.add(img);}, tokenBOption);break;
        case 'clancastle':fabric.Image.fromURL('/res/image/ui/tokens/token_clanCastle.png', function(img) {canvas.add(img);}, tokenBOption);break;
        case 'gb':fabric.Image.fromURL('/res/image/ui/tokens/token_giantBomb.png', function(img) {canvas.add(img);}, tokenBOption);break;
        case 'wbboom':fabric.Image.fromURL('/res/image/ui/tokens/effect_wallbreaker.png', function(img) {canvas.add(img);}, tokenBOption);break;
    }
}

/* Other */
function toggleDrawingLine(){
    if (!allowedToDraw) {
        allowedToDraw = true;
        cLine();
    } else {
        allowedToDraw = false;
        cLine();
    }
} 
function save() {
    if (!fabric.Canvas.supports('toDataURL')) {
        alert('Sorry, your browser is not supported.');
    } else {
        canvas.deactivateAll();
        canvas.forEachObject(function(o){
        if(o.get("title") == "Clash Planner"){
            canvas.bringToFront(o);
        }
    });
    window.open(canvas.toDataURL('png'), "Hello");
    canvas.forEachObject(function(o){
        if(o.get("title") == "Clash Planner"){
            canvas.sendToBack(o);
        }
    });
    canvas.renderAll();
}}


// Event Handlers //
$('btn_savetodesktop').on('click', function() { Alert('SAVED!'); })