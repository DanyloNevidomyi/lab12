$(function() {
    // оголошення десяти слів
    let EasyCards = ["Hand", "Eye", "Place", "Number", "Problem", "Work", "Feel", "Try", "Time", "Year"];
    let MediumCards = ["Ability", "Between", "Challenge", "Dangerous", "Data", "Education", "Download", "Future", "Grammar", "Grow"];
    let HardCards = ["Absorb", "Beak", "Comparable", "Direct", "Initiative", "Nap", "Preservation", "Press", "Profile", "Promote"];

    $("#accept").prop('disabled', true);
    $("#answer").prop('disabled', true);
    
    // дія для кнопки Почати
    $("#start").click(function() {
        check();
        Cards();
        $("#start").prop('disabled', true);
        $("#answer").prop('disabled', false);
    })

    // дія для кнопки Підтвердити
    $("#accept").click(function() {
        check();
        easyAnswers();
        mediumAnswers();
        hardAnswers();
        Cards();
        statistic();
    })

    // введення за допомогою enter
    $("#answer").on('keydown', function(event) {
        if(event.which == 13) {
            check();
            if ($("#answer").val().trim() !== "") {
                easyAnswers();
                mediumAnswers();
                hardAnswers();
                Cards();
                statistic();
            }
        }
    })

    // перезантажую сторінку при виборі іншого рівня складності
    $("#select").change(function() {
        clearValues();
    })

    // очищення значень
    function clearValues() {
        $("#answer").val('');
        $("#easyCard").html('');
        $("#mediumCard").html('');
        $("#hardCard").html('');
        $("#right").html('Правильно: 0');
        $("#wrong").html('Неправильно: 0');
        $("#start").prop('disabled', false);
        $("#answer").prop('disabled', true);
        right = 0;
        wrong = 0;
        EasyCards = ["Hand", "Eye", "Place", "Number", "Problem", "Work", "Feel", "Try", "Time", "Year"];
        MediumCards = ["Ability", "Between", "Challenge", "Dangerous", "Data", "Education", "Download", "Future", "Grammar", "Grow"];
        HardCards = ["Absorb", "Beak", "Comparable", "Direct", "Initiative", "Nap", "Preservation", "Press", "Profile", "Promote"];
    }

    // перевірка вводу  
    function check() {
        $("#accept").prop('disabled', true);
    
        $("#answer").on("input", function() {
            let trimmedValue = $(this).val().trim();
            $(this).val(trimmedValue);
    
            if (trimmedValue !== "") {
                $("#accept").prop('disabled', false);
            } 
            else {
                $("#accept").prop('disabled', true);
            }
        });
    }

    // виподкова карточка
    function Cards() {
        // легкі слова
        if ($("#select").val() == "Easy") {
            if (EasyCards.length > 0) {
                let randomEasyCard = Math.floor(Math.random() * EasyCards.length);
                let selectedEasyCard = EasyCards[randomEasyCard];
    
                EasyCards.splice(randomEasyCard, 1);
                $("#easyCard").html(selectedEasyCard);
            }
        }
    
        // середні слова
        if ($("#select").val() == "Medium") {
            if (MediumCards.length > 0) {
                let randomMediumCard = Math.floor(Math.random() * MediumCards.length);
                let selectedMediumCard = MediumCards[randomMediumCard];
    
                MediumCards.splice(randomMediumCard, 1);
                $("#mediumCard").html(selectedMediumCard);
            }
        }
    
        // важкі слова
        if ($("#select").val() == "Hard") {
            if (HardCards.length > 0) {
                let randomHardCard = Math.floor(Math.random() * HardCards.length);
                let selectedHardCard = HardCards[randomHardCard];
    
                HardCards.splice(randomHardCard, 1);
                $("#hardCard").html(selectedHardCard);
            }
        }
    }
    
    let right = 0;
    let wrong = 0;

    // перевірка відповідей (легкі слова)
    function easyAnswers() {
        if ($("#select").val() == "Easy") {
            let answ = $("#answer").val().toLowerCase();
            let currentCard = $("#easyCard").text();

            let wordTranslate = {
                "Hand": ["рука"],
                "Eye": ["око"],
                "Place": ["місце"],
                "Number": ["число", "номер"],
                "Problem": ["проблема"],
                "Work": ["робота", "працювати"],
                "Time": ["час"],
                "Year": ["рік"],
                "Feel": ["відчувати"],
                "Try": ["спроба"]
            }

            if (wordTranslate[currentCard] && wordTranslate[currentCard].includes(answ)) {
                right += 1;
                $("#right").text("Правильно: " + right);
            } 
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
    
            // очищення поля введення
            $("#answer").val('');
        }
    }

    // перевірка відповідей (середні слова)
    function mediumAnswers() {
        if ($("#select").val() == "Medium") {
            let answ = $("#answer").val().toLowerCase();
            let currentCard = $("#mediumCard").text();
    
            let wordTranslate = {
                "Ability": ["здатність"],
                "Between": ["між"],
                "Challenge": ["випробування", "виклик"],
                "Dangerous": ["небезпечний"],
                "Data": ["дані"],
                "Education": ["освіта"],
                "Download": ["завантажити", "завантажувати"],
                "Future": ["майбутнє"],
                "Grammar": ["граматика"],
                "Grow": ["рости"]
            }
    
            if (wordTranslate[currentCard] && wordTranslate[currentCard].includes(answ)) {
                right += 1;
                $("#right").text("Правильно: " + right);
            } 
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }
    
            // очищення поля введення
            $("#answer").val('');
        }
    }

    // перевірка відповідей (важкі слова)
    function hardAnswers() {
        if ($("#select").val() == "Hard") {
            let answ = $("#answer").val().toLowerCase();
            let currentCard = $("#hardCard").text();
    
            let wordTranslate = {
                "Absorb": ["поглинати"],
                "Beak": ["дзьоб"],
                "Comparable": ["порівнянний"],
                "Direct": ["прямий", "направлений", "напрямок"],
                "Initiative": ["ініціативний"],
                "Nap": ["дрімота", "дрімати"],
                "Preservation": ["збереження"],
                "Press": ["видавництво", "прес", "тиснути"],
                "Profile": ["профіль"],
                "Promote": ["просувати"]
            }
    
            if (wordTranslate[currentCard] && wordTranslate[currentCard].includes(answ)) {
                right += 1;
                $("#right").text("Правильно: " + right);
            } 
            else {
                wrong += 1;
                $("#wrong").text("Неправильно: " + wrong);
            }

            // очищення поля введення
            $("#answer").val('');
        }
    }

    // щоб було тільки 10 відповідей
    function statistic() {
        let selectedLevel = $("#select").val();
    
        if (selectedLevel == "Easy" && (wrong + right == 10 || wrong == 10 || right == 10)) {
            $("#accept").prop('disabled', true);
    
            if (right == 10) {
                alert("Вітаю, ви пройшли легкий рівень!");
                location.reload();
            }
            else {
                alert("На жаль, вам треба краще вивчити слова");
                location.reload();
            } 
        }
    
        if (selectedLevel == "Medium" && (wrong + right == 10 || wrong == 10 || right == 10)) {
            $("#accept").prop('disabled', true);
    
            if (right == 10) {
                alert("Вітаю, ви пройшли середній рівень!");
                location.reload();
            } 
            else {
                alert("На жаль, вам треба краще вивчити слова");
                location.reload();
            } 
        }
    
        if (selectedLevel == "Hard" && (wrong + right == 10 || wrong == 10 || right == 10)) {
            $("#accept").prop('disabled', true);
    
            if (right == 10) {
                alert("Вітаю, ви пройшли найважчий рівень!");
                location.reload();
            } 
            else {
                alert("На жаль, вам треба краще вивчити слова");
                location.reload();
            }
        }
    }

   // почати заново
   $("#try-again").click(function() {
    location.reload();
   })

   $("#back").click(function() {
    window.location.href = "https://danylonevidomyi.github.io/individual/";
   })
})