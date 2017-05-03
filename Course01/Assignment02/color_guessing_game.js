var target;
var guess_input_text;
var finished = false;
var guesses = 0;
var random_color_list = new Array(10);

function do_game(){
    var random_number = Math.random() * 10;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer;

    while(!finished){
        var color_list_text = random_color_list.reduce((prev,elem)=>{
            return prev + "," + elem;
        }, "");
        guess_input_text = prompt("I am thinking of one of these colors: " +
                                    color_list_text + 
                                    "What color am I thinking of?");
        guesses++;
        finished = check_guess();
        
                
    }
}

function check_guess(){
    if(random_color_list.indexOf(guess_input_text))
}