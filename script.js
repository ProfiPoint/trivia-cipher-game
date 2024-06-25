function print(s){
    console.log(s);
}

class User {
    constructor(n) {
        this.name = n;
        this.questions = [];
        this.whoWillVisitThisPlayerInOrder = {};
        this.team = 0;
        this.startingQuestion = null;
        this.path = [];
        this.letters = [];
    }
}

class Question {
    constructor() {
        this.text = "";
        this.id = -1;
        this.answers = [];
        this.correctAnswer = null;
        this.team = 0
        this.letter = null;
    }
}

class Answear {
    constructor() {
        this.text = "";
        this.owner = null;
        this.nextQuestion = null;
        this.nextUser = null;
        this.nextId = -1;
        this.hadlySet = false;
        this.team = 0;
        this.correct = false;
    }
}



var users = [
    "Tereza B",
    "Štěpán B",
    "Prokop B",
    "Filip B",
    "Jan E",
    "Alexandra F",
    "David H",
    "Arnošt H",
    "Miroslav H",
    "Ludmila K",
    "Štěpán K",
    "Marek L",
    "Daniel M",
    "Judita M",
    "Gabriel N",
    "Matouš N",
    "Tadeáš P",
    "František P",
    "David S",
    "Vít Š",
    "František Š",
    "Alena T",
    "Dominik T",
    "Eliška V",
    "Šimon Z",
]



var usersNum = 25
var questionsPerUserNum = 15
var questionsOnPaper = 4
var teams = 5
var numberOfAnswersPerQuestion = 3;
var differentCategories = false

var totalQuestionsNum = usersNum * questionsOnPaper
var fakeQuestionsNum = questionsOnPaper - teams
var teamSize = usersNum / teams;


var allQuestions = [];
var allAnswers = [];

var totalQuestions = 1000

questionString = ""

// NOW generate a string fro Q1 to Q25 and the strign will look like Q1 A1a A1b A1c A1d A1e Q2 A2a A2b A2c A2d A2e ... Q25 A25a A25b A25c A25d A25e

for (var i = 0; i < totalQuestions; i++) {
    questionString += "Q" + (i + 1) + "\n";
    for (var j = 0; j < numberOfAnswersPerQuestion; j++) {
        questionString += "A" + (i + 1) + String.fromCharCode(97 + j) + "\n";
    }
}

questionString = `Např. jaká fce není nerostoucí a zároveň není klesající v celém Df.
rostoucí
nerostoucí
konstantní
Jaké je 16. slovo na 131. stránce v knize Pět neděl v baloně - mlp online
tříštil
prášil
vařil
Jaký z těhto memů je spojený s písničkou The Spectre
Smurf Cat
Bongo Cat
Nyan Cat
Víš, jak se jmenuje manžel ředitelky Pachové?
Ne
Aleš
Jakub
Jaká je dnešní odpověď na worlde?
KNEAD
WRATH
SKULL
Jakou věc označuje tato definice: monopol násilí na daném území
Stát
Kartel
Mafie
Při jaké teplotě se Fahrenheit rovná stupňům Celsia.
-40
40
jiná možnost
Při přípitku se ozvalo 21 ťuknutí, každý si ťuknul 1x s každým. Kolik osob se zúčastnilo ťukání
7
5
jiná možnost
Kdo je autorem těchto slov: "Ještě jednou, abychom neměli pocit, že to děláme pořád dokola"
Semeráková
Kocúrová
Skoupilová
Kdy byla založena naše škola?
1953
1964
1975
Který z těchto názvu naše škola nikdy nenesla?
Na Vinohradech
Korunní
Zborovská
V roce 1993 se gchd přesunulo do současné budovy. Co tu bylo před tím?
Stavební průmyslová škola
VŠE
Právnická Fakulta
V roce 2007 byla v GCHD postavena školní jídelna, kam se chodilo papat předtím?
Štefánikova
Ve třídách
Slovanský ostrov
Jaký z těchto významných lidí nikdy nestudovali na naší škole?
Edvard Beneš
Karel Janeček
David Navara
Proč se naše škola jmenuje po Christianu Dopplerovi?
Díky úspěchům v soutěžích.
Kvůli Daňovým únikům
Podle výzkumu Dopplerova jevu
V roce 2009 proběhla na naší škole kauza, která se objevila v novinách. Čeho se týkala?
Zlepšení prospěchu studentů vedením
Lidské fekálie v Sekretariátu
Mrtvola v jídelně
Kdo bude novým ředitelem příští rok
Petr Pudivítr
Renata Pachová
Jiří Šperl
Školní fasáda byla nedávno přetřena do původní barvy. Jakou barvu má Budova GCHD teď?
Šedá, Bílá
Šedá, Zelená
Zelená, Bílá
Kolik korun stojí jeden oběd pro studenta?
45
42
38
Jaké je heslo na wifi
akademie45
akademie42
akademie43
Kdo byl vaším spolupracovníkem při vyplňování dotazníku od Ondry Č.
princezna
školník
ředitelka
Jaký z těhto římských čísel je největší
MCLXXVII
MCLXXI
MCXLVII
Jaká je správná odpověď na toto číslo: 1233
BUM BUM BUM
BUM BUM BUM BUM
BUM BUM
V jaké patře jsou nejlepší mužské toalety
4.
2.
1.
Kolik lidí letos neodmaturovalo ze školní matematiky v celém GCHD
hodně
0
1
Urči kolik písmen "i" (velké i malé) je v tomto stringu: LiLiiIIilLlIiiLLLlLLlliIiIiiIlLiIiLlliIiiIlL
24
25
26
Jaké z těhto čísel je prvočíslo
131
253
187
Kdo z vás letos vystupoval na školní akademii
nikdo :(
Prokop B.
Dominik T.
Kdo je váš třídní pan profesor
my ale máme profesorku (VS)…
J. Hudlický
M. Matúšík
Který z nich NENÍ zvíře čínského zvěrokruhu?
Slon
Kohout
Opice
Které znamení zvěrokruhu probíhá od 23. srpna do 22. září? 
Panna
Vodnář
Ryba
Co je chemický symbol pro zlato?
Au
To
Bolí
Má kráva více žaludků
Ano
Ne
Nemá
Které zvíře má nejdelší jazyk ve vztahu k délce těla?
Chameleón
Šnek
Mravenec
Který z těchto slavných skladatelů přišel o sluch? 
Beethoven
Mozart
Bach
Který z těchto nástrojů hraje po boku 2. houslí a violoncella v tradičním smyčcovém kvartetu? 
Viola
Kontrabas
Klavír
Jaký z těhto politiků se označuje slovem Hranatost
Filip Turek
Lubomír Volný
Jaroslav Bašta
Jakou barvu má logo PowerPointu
Oranžová
Zelená
Modrá
Jaké číslo nemá vlastní číslo?
0
i
e
Jaké číslo je pí
Iracionální
Imaginární
Přirozené
9N = 108; Kolik je 2N
12
6
24
Co předchází Kuadrillion
Trilion
Kvintilion
Centilion
Který den je den pí
14. března
31. dubna
někdy jindy
Průměr prvních 50 přirozených čísel
25,5
25
26
Jaké z těhto hodnot pí je nejpřesnější
3,1425
3,14262
3,142605
334x7+335 se rovná jakému číslu?
2673
2573
2473
Kolik akrů tvoří čtvereční míli?
640
128
252
Jaký úhel je definován stranami 5 a 12 trojúhelníku, jehož strany měří 5, 13 a 12?
60°
45°
90°
Co prochází městy, kopci nahoru a dolů, ale nepohybuje se?
Cesta
Loď
Louka
Kolik nejvíce dětí je teoreticky žena za svůj život porodit
jiná možnost (víc)
47
69`

// generate list of unique numbers 5 to 50 in random order
var questionsIds = [];
for (var i = 0; i <= totalQuestionsNum; i++) {
    questionsIds.push(i);
}
questionsIds.sort(() => Math.random() - 0.5);
print(questionsIds);


questionList = [];
// split the string to array of questions in format "question" : ["answear1", "answear2", ...]
var questionArray = questionString.split("\n");
var currentQuestion = "";
var curKey = "";
var tempAnswers = [];

for (var i = 0; i < questionArray.length; i++) {
    if (i%(numberOfAnswersPerQuestion+1) == 0) {
        if (curKey != "") {
            questionList.push([curKey, tempAnswers]);
        }
        curKey = questionArray[i];
        tempAnswers = [];
    } else {
        tempAnswers.push(questionArray[i]);
    }
}

print(questionList);
var questionsNum = questionList.length;

//shuffle users randomly
users.sort(() => Math.random() - 0.5);

// now split the users in teams of same size randomly
var teamsArray = [];

for (var i = 0; i < teams; i++) {
    teamsArray.push([]);
}

for (var i = 0; i < usersNum; i++) {
    teamsArray[Math.floor(i / teamSize)].push(users[i]);
}

// now get them teamid from 1 to 5 based on the index in the array +1 and init the users class

var ciphers = [
    "GRATULUJIVAMALE", // GRATULUJI VÁM, ALE
    "NEZATOŽEJSTENÁS", // NE ZA TO ŽE JSTE NÁS
    "PORAZILIAUHODLI", // PORAZILI A UHODLI
    "ŠIFRUALEZAHRANÍ", // ŠIFRU, ALE ZA HRANÍ.
    "SNADVASTOBAVILO" // SNAD VÁS TO BAVILO.
]

var ciphersArray = [];
for (var i = 0; i < ciphers.length; i++) {
    ciphersArray.push(ciphers[i].split(""));
}

print(ciphersArray);

var usersArray = [];
for (var i = 0; i < usersNum; i++) {
    var user = new User(users[i]);
    user.team = Math.floor(i / teamSize) + 1;
    usersArray.push(user);
}

print(usersArray);

/*
for (var u = 0; u < usersNum; u++) {
    var indexNow = u;

    for (var t = 0; t < usersNum - questionsPerUserNum; t++) {
        indexNow++;
        if (indexNow >= usersNum) {
            indexNow = 0;
        }
    }

    for (var q = 0; q < questionsPerUserNum; q++) {
        var question = new Question();
        question.text = questionList[indexNow][0];
        question.id = q + 1;
        question.team = usersArray[u].team;
        for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
            var opinion = new Optinion();
            opinion.text = questionList[indexNow][1][a];
            opinion.letter = String.fromCharCode(97 + a);
            opinion.team = usersArray[u].team;
            question.answers.push(opinion);
        }
        //usersArray[u].questions.push(question);
        indexNow++;
        if (indexNow >= questionList.length) {
            indexNow = 0;
        }
    }
}
*/



// print the usersArray with all the questions and answers
/*
for (var i = 0; i < usersArray.length; i++) {
    for (var j = 0; j < usersArray[i].questions.length; j++) {
        print(usersArray[i].name + " " + usersArray[i].team + " " + usersArray[i].questions[j].text + " " + usersArray[i].questions[j].answers[0].text + " " + usersArray[i].questions[j].answers[1].text + " " + usersArray[i].questions[j].answers[2].text);
    }
}
*/

teamQuestions = [];

function checkDuplicates(curarr, tQuestions) {
    for (var i = 0; i < usersNum; i++) {
        for (var j = 0; j < tQuestions.length-1; j++) {
            if (curarr[i] != null && tQuestions[j][i] != null && curarr[i][0] == tQuestions[j][i][0]) {
                return false;
            }
        }
    }
    return true;
}

//team questions
for (var i = 0; i < teams; i++) {
    while (true){
        var letterId = 0;
        //create array of numbers 0 to size of questionList and shuffle it
        var numbers = [];
        for (var j = 0; j < questionsNum; j++) {
            numbers.push(j);
        }
        numbers.sort(() => Math.random() - 0.5);
        teamQuestions.push(Array(usersNum).fill(null));
        var r = i*teamSize;
        for (var j = 0; j < questionsPerUserNum; j++) {
            teamQuestions[i][r] = [numbers[j],i+1,ciphersArray[i][letterId]];
            r++;
            letterId++;
            if (r >= usersNum) {
                r = 0;
            }
        }
        if (checkDuplicates(teamQuestions[i],teamQuestions)) {
            break;
        } else {
            teamQuestions.pop();
        }
    }
}

// fill the rest of the questions with fake questions
while (true){
    var updatedNow = false;
    while (true){
        var numbers = [];
        for (var j = 0; j < usersNum; j++) {
            numbers.push(j);
        }
        numbers.sort(() => Math.random() - 0.5);
        teamQuestions.push(Array(questionsNum).fill(null));

        for (var j = 0; j < usersNum; j++) {
            var previousQuestionsOfUserCount = 0
            for (var k = 0; k < teamQuestions.length; k++) {
                if (teamQuestions[k][j] != null) {
                    previousQuestionsOfUserCount++;
                }
            }
            if (previousQuestionsOfUserCount < questionsOnPaper) {
                var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
                teamQuestions[teamQuestions.length-1][j] = [numbers[j],0,randomLetter];
                updatedNow = true;
            } 
        }
        if (checkDuplicates(teamQuestions[teamQuestions.length-1],teamQuestions) || updatedNow == false) {
            break;
        } else {
            teamQuestions.pop();
        }
    }
    if (updatedNow == false) {
        break;
    }
}

var qIndex = 0;
for (var t = 0; t < teamQuestions.length; t++) {
    for (var q = 0; q < usersNum; q++) {
        if (teamQuestions[t][q] != null) {
            tempQ = new Question();
            tempQ.text = questionList[teamQuestions[t][q][0]][0];
            tempQ.id = questionsIds[qIndex];
            tempQ.team = teamQuestions[t][q][1];
            tempQ.letter = teamQuestions[t][q][2];
            tempQ.owner = usersArray[q];
            usersArray[q].questions.push(tempQ);
            allQuestions.push(tempQ);

            if (t < teams) {
                for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
                    tempA = new Answear();
                    tempA.text = questionList[teamQuestions[t][q][0]][1][a];
                    tempA.letter = String.fromCharCode(97 + a);
                    tempA.team = teamQuestions[t][q][1];
                    tempA.correct = false;
                    tempQ.answers.push(tempA);
                    allAnswers.push(tempA);
                    if (a == 0) {
                        tempA.correct = true;
                    }
                }
            } else {
                print("this is fake question")
                for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
                    tempA = new Answear();
                    tempA.text = questionList[teamQuestions[t][q][0]][1][a];
                    tempA.letter = String.fromCharCode(97 + a);
                    tempA.team = 0;
                    tempQ.answers.push(tempA);
                }
            }
            qIndex++;
        }
    }
}

for (var t = 1; t < teams+1; t++) {
    var userNow = 0;
    var previousQuestion = null;
    var previousAnswear = null;

    while (true){
        var questionNow = null;
        var answearNow = null;
        for (var i = 0; i < usersArray[userNow].questions.length; i++) {
            if (usersArray[userNow].questions[i].team == t) {
                questionNow = usersArray[userNow].questions[i];
                break;
            }
        }

        if (questionNow) {
            for (var j = 0; j < questionNow.answers.length; j++) {
                if (questionNow.answers[j].correct == true) {
                    answearNow = questionNow.answers[j];
                    break;
                }
            }
        }

        if (questionNow && answearNow) {
            if (previousQuestion) {
                previousAnswear.nextId = questionNow.id;
                previousAnswear.nextUser = questionNow.owner;
                previousAnswear.nextQuestion = questionNow;
                previousAnswear.hadlySet = true;
                //print(questionNow.owner);
            }
            previousQuestion = questionNow;
            previousAnswear = answearNow;

            if (answearNow.nextId != -1) {
                break;
            }
        }

        userNow++;
        if (userNow >= usersNum) {
            userNow = 0;
        }
    }
}



function hasDuplicates(array) {
    const seen = new Set();
    for (const value of array) {
        if (seen.has(value)) {
            return true; // Duplicate found
        }
        seen.add(value);
    }
    return false; // No duplicates found
}

//fill the rest of the answers with fake answers

for (var i = 0; i < usersArray.length; i++) {
    var selectedQuestions = [];


    var totalPeopleInAnswers = questionsOnPaper * numberOfAnswersPerQuestion;
    var currentPeopleInAnswers = 0;
    var theUser;
    for (var q = 0; q < questionsOnPaper; q++) {
        for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
           if (usersArray[i].questions[q].answers[a].nextId != -1) {
                currentPeopleInAnswers ++;
                theUser = usersArray[i].questions[q].answers[a].nextUser;
           }
        }
    }
    var numberOfUniqueUsers = Math.ceil((totalPeopleInAnswers - currentPeopleInAnswers) / currentPeopleInAnswers);
    var usersNow = [];
    for (var u = 0; u < usersNum; u++) {
        if (theUser != usersArray[u] && usersArray[u] != usersArray[i]){
            usersNow.push(usersArray[u]);
        }
    }
    usersNow.sort(() => Math.random() - 0.5);

    totalPeopleInAnswers -= currentPeopleInAnswers;
    for (var u = 0; u < numberOfUniqueUsers; u++){
        var questionsOfUser = [];
        for (var q = 0; q < usersArray[u].questions.length; q++) {
            questionsOfUser.push(usersArray[u].questions[q]);
        }
        questionsOfUser.sort(() => Math.random() - 0.5);

        //selects first few questions of the user and adds them into the selectedQuestions array
        for (var q = 0; q < currentPeopleInAnswers; q++) {
            selectedQuestions.push(questionsOfUser[q]);
        }

        totalPeopleInAnswers--;
        if (totalPeopleInAnswers == 0) {
            break;
        }
    }

    //get all ansears of the user questions that has id -1
    for (var t = 0; t < 10000; t++) {
        var indexUnusedAns = 0;

        selectedQuestions.sort(() => Math.random() - 0.5);

        var duplInAnsw = false;


        for (var q = 0; q < questionsOnPaper; q++) {
            for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
                if (usersArray[i].questions[q].answers[a].hadlySet == false) {
                    usersArray[i].questions[q].answers[a].nextId = selectedQuestions[indexUnusedAns].id;
                    usersArray[i].questions[q].answers[a].nextUser = selectedQuestions[indexUnusedAns].owner;
                    usersArray[i].questions[q].answers[a].nextQuestion = selectedQuestions[indexUnusedAns];
                    indexUnusedAns++;
                }
            }
        }

        for (var q = 0; q < questionsOnPaper; q++) {
            var usersInQuestion = [];
            for (var a = 0; a < numberOfAnswersPerQuestion; a++) {
                usersInQuestion.push(usersArray[i].questions[q].answers[a].nextUser);
            }
            if (hasDuplicates(usersInQuestion)) {
                duplInAnsw = true;
            }
        }

        if (duplInAnsw == false) {
            break;
        }
    }
}

function printUsers(){
    for (var i = 0; i < usersArray.length; i++) {
        print(usersArray[i].name + " " + usersArray[i].team);
        for (var j = 0; j < usersArray[i].questions.length; j++) {
            var qNow = usersArray[i].questions[j];
            print(qNow.text + " " + qNow.id + " " + qNow.team + " " + qNow.letter);
            for (var k = 0; k < qNow.answers.length; k++) {
                print(qNow.answers[k].text + " " + qNow.answers[k].letter + " " + qNow.answers[k].team + " " + qNow.answers[k].correct + " " + qNow.answers[k].nextId + " " + qNow.answers[k].nextUser.name);
            }
            print("");
        }
        print("");
        print("");
    }
    print("");
    print("");
    print("");
    print("");
    print("");
}


function printAllQA(){
    for (var i = 0; i < allQuestions.length; i++) {
        print(allQuestions[i].text + " " + allQuestions[i].id + " " + allQuestions[i].team + " " + allQuestions[i].letter);
    }
    for (var i = 0; i < allAnswers.length; i++) {
        print(allAnswers[i].text + " " + allAnswers[i].letter + " " + allAnswers[i].team + " " + allAnswers[i].correct + " " + allAnswers[i].nextId + " " + allAnswers[i].nextUser.name);
    }
}

function checkPaths(thisUser){
    
    var letters = [];
    var path = [];
    var team = thisUser.team;
    var UserNow = "";
    var questionNow = "";
    var order = 1;
    thisUser.whoWillVisitThisPlayerInOrder[order] = thisUser;
    order++;
    //print(thisUser);

    for (var q = 0; q < thisUser.questions.length; q++) {
        if (thisUser.questions[q].team == team) {
            path.push(thisUser.questions[q].owner.name+" ("+thisUser.questions[q].id+")");
            letters.push(thisUser.questions[q].letter);
            questionNow = thisUser.questions[q];
            break;
        }
    }

    thisUser.startingQuestion = questionNow;
    

    while (true){

        var answearNow = null;
        for (var j = 0; j < questionNow.answers.length; j++) {
            if (questionNow.answers[j].correct == true) {
                answearNow = questionNow.answers[j];
                break;
            }
        }

        UserNow = answearNow.nextUser;
        UserNow.whoWillVisitThisPlayerInOrder[order] = thisUser;
        order++;
        

        if (UserNow == thisUser) {
            path.push(thisUser.questions[q].owner.name+" ("+thisUser.questions[q].id+")");
            break;
        } else {
            //print(path);
            //print()
        }

        for (var q = 0; q < UserNow.questions.length; q++) {
            if (UserNow.questions[q].team == team) {
                letters.push(UserNow.questions[q].letter);
                path.push(UserNow.questions[q].owner.name+" ("+UserNow.questions[q].id+")");
                questionNow = UserNow.questions[q];
                break;
            }
        }
    }    

    var found = false;
    for (var i = 0; i < path.length; i++) {
        var newLetters = [];
        for (var j = i; j < path.length-1; j++) {
            newLetters.push(letters[j]);
        }
        for (var j = 0; j < i; j++) {
            newLetters.push(letters[j]);
        }
        for (var j = 0; j < ciphersArray.length; j++) {
            if (ciphersArray[j].join("") == newLetters.join("")) {
                found = true;
                break;
            }
        }
    }
    if (!found) {
        print("!!!!!!!!!!!!!!!!");
        console.error("ERROR: no cipher found for user "+thisUser.name+" team "+team);
    }

    print(path);
    print(letters);
    thisUser.path = path;
    thisUser.letters = letters;

}

print("#############")

printUsers();

for (var i = 0; i < usersArray.length; i++) {
    print(usersArray[i].team);
    print(usersArray[i].name);
    print("");
    checkPaths(usersArray[i]);
    print(usersArray[i].startingQuestion.id);
    //print who will visit this player in order
    for (var key in usersArray[i].whoWillVisitThisPlayerInOrder) {
        print(key + " " + usersArray[i].whoWillVisitThisPlayerInOrder[key].name);
    }
}




var Arn = 0;
for (var i = 0; i < usersArray.length/2; i++) {
    for (var x = 0; x < 2; x++){
        if (Arn < usersArray.length) {
            var userACA = usersArray[Arn];
            print(userACA);
            var userQuestions = userACA.questions.map(question => question.text);
            //console.log(user.name + " " + userQuestions);
            var checkpoins = []; // get checpoint 5 9 13
            //print(user + " " + u);
            //print(userNow);
            for (var key in userACA.whoWillVisitThisPlayerInOrder) {
                var value = userACA.whoWillVisitThisPlayerInOrder[key];
                if (key == 5 || key == 9 || key == 13) {
                    checkpoins.push(value.name);
                }
            }
            print(checkpoins);
            createFirstPage(userACA.name,userACA.startingQuestion.id,checkpoins);
        
            Arn++;
        }
        
    }

    addPageBreak();
    if (Arn < usersArray.length) {
        Arn=Arn-2;
    } else {
        Arn=Arn-1;
    }
    for (var x = 0; x < 2; x++){
        if (Arn < usersArray.length) {
            var userACA = usersArray[Arn];
            addNewBox(userACA.questions)
            Arn++;
        }
        
    }
    addPageBreak();
}

function randomizeString(string) {
    string = string.replace(/\s/g, '');
    var array = string.split("");
    array.sort(() => Math.random() - 0.5);
    return array.join("");
}


// NOW SORT THE USERS ARRAY BY NAME ALPHABETICALLY
usersArray.sort((a, b) => a.name.localeCompare(b.name));

// NOW PRINT THE USERS ARRAY
result = ""
for (var i = 0; i < usersArray.length; i++) {
    
    //convert userArray[i].path to string
    var pathString = "";
    for (var j = 0; j < usersArray[i].path.length; j++) {
        pathString += usersArray[i].path[j] + " ["+(j+1)+"] - ";
    }

    var lettersString = "";
    for (var j = 0; j < usersArray[i].letters.length; j++) {
        lettersString += usersArray[i].letters[j] + "-";
    }

    print(usersArray[i].name);
    result += "<b>["+usersArray[i].name+"] ("+usersArray[i].team+"):  PATH: </b>" + pathString.slice(0, -2) + "<br><b>LETTERS: </b>" + lettersString.slice(0, -1) + "<br><br>";
    if (i%5 == 4) {
        print("");
        createPathBox(result);
        result = "";
        addPageBreak();
    }
}

if (result != "") {
    createPathBox(result);
    addPageBreak();
}

var result = "";
// now add all names and separate them by br
for (var i = 0; i < usersArray.length; i++) {
    result += usersArray[i].name + ": ________________________________________________________________________________________________________________________________________ <br>";
}
createPathBox(result,true);
