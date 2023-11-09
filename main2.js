function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1_name";
answer_turn = "player2_name";

function check(){
    get_answer = document.getElementById("input_box").value;
    if(answer_turn == actual_answer)
    {
        if(answer_turn == "player1_name")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player2_score;
        
        }

    }

    if(question_turn == "player1_name")
    {
        question_turn = "player2_name"
        document.getElementById("actual_question").innerHTML = "Turno de Pergunta - " + player2_name;
    }

    else
    {
        question_turn = "player1_name"
        document.getElementById("actual_question").innerHTML = "Turno de Pergunta - " + player1_name;
    } 
}