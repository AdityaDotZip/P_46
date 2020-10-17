class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.laptop = createButton('Laptop');
       this.mobile = createButton('Mobile');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.mobile.hide();
        this.laptop.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.laptop.position(875, 350);
        this.laptop.style('width', '150px');
        this.laptop.style('height', '35px');
        this.laptop.style('background', 'lightblue');

        this.mobile.position(875, 420);
        this.mobile.style('width', '150px');
        this.mobile.style('height', '35px');
        this.mobile.style('background', 'lightblue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.laptop.hide();
            this.mobile.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.laptop.mousePressed(()=>{
            device = "laptop";
            this.laptop.hide();
            this.mobile.hide();
        });

        this.mobile.mousePressed(()=>{
            device = "mobile"
            this.laptop.hide();
            this.mobile.hide();
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            player.delete();
            device = "";
        });        

    }
}