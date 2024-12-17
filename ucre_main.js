document.addEventListener("DOMContentLoaded", () => {
    const link = "https://digital-business-856659.framer.app/"
    const levels = [
      { answer: "bias", hint: "Hint: In module 1, I learned about ____ in GenAI systems." },
      { answer: "context", hint: "Hint: In Module 2, I learned about understanding the ____ of the problem I'm trying to solve." },
      { answer: "data", hint: "Hint: In module 3, we sifted through existing ____ in order to understand patterns and insights from our participants!" },
      { answer: "heuristics", hint: "Hint: In module 4, we learned about Neilsen's Ten usability ______" },
      { answer: "usability", hint: "Hint: Throughout the course, we used think-aloud ______ testing!" },
      { answer: "might", hint: "Hint: How ____ we motivate and engage users to report GenAI bias? These are the objective questions we used to address our user needs." },
      { answer: "sorting", hint: "Hint: Card ______ is a contextual research method we used to understand the thought processes of our participants." },
      { answer: "interpretation", hint: "Hint: From our contextual research activity, we created _______ notes that helped us better understand our users." },
      { answer: "affinity", hint: "Hint: ______ diagramming is a very important contextual research tool that we used to find patterns and connections in the data after our user research!" },
      { answer: "storyboards", hint: "Hint: My favorite activity was speed dating where we got to talk to different people and show them various ________." },
      { answer: "parallel", hint: "Hint: In module 8, I learned about _____ prototyping and how it helps teams come up with diverse ideas!"},
      { answer: "signals", hint: "Hint: Honest ______ gave us insights on how users would interact with our product."},
      { answer: "pitch", hint: "Hint: Finally, in the last module, we gave an elevator _____ about our idea!" },
      { answer: "artifacts", hint: "Hint: We created assumption _______."},
      { answer: "insights", hint: "Hint: We had three _____ that inspired our final product"},
      { answer: "transparency", hint: "Hint: Users need _______ to understand that they are making an impact"},
      { answer: "confident", hint: "Hint: Users need to feel _______ in their ability to identify and report bias."},
      { answer: "experience", hint: "Hint: Users need a seamless _________ that doesn't conflict with their goals."},
      { answer: "dashboard", hint: "Hint: We created a bias report _______."},
      { answer: "forum", hint: "Hint: We also designed a community _____ where users could share their experiences with bias in GenAI systems."},
      { answer: "ImpactLens", hint: "Hint: The final product my team came up with was called _______"},
    ];
  
    let currentLevel = 0;
    let points = 0;
    let curr_word = 1;
    //idea: code in a pop-up screen for when they get it correct
  
    const scrambledWordElement = document.getElementById("scrambled-word");
    const hintElement = document.getElementById("hint");
    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submit-button");
    const restartButton = document.getElementById("restart-button");
    const resultElement = document.getElementById("result-element");
    const nextButton = document.getElementById("next-button");
    const points_element = document.getElementById("points");
    const go_to_site = document.getElementById("impact-button");
    const current_word = document.getElementById("curr_count");
  
    function shuffleWord(word) {
      const shuffled = word.split("").sort(() => 0.5 - Math.random()).join("");
      return shuffled === word ? shuffleWord(word) : shuffled;
    }
  
    function loadLevel() {
      const level = levels[currentLevel];
      const scrambledWord = shuffleWord(level.answer);
      scrambledWordElement.textContent = scrambledWord;
      hintElement.textContent = level.hint;
      guessInput.value = "";
      resultElement.textContent = "";
      // nextButton.style.display = "none";
      submitButton.disabled = false;
      nextButton.style.display = "inline-block";
      restartButton.style.display = "inline-block";
      guessInput.style.display = "inline-block";
      submitButton.style.display = "inline-block";
      points_element.style.display = "block";
      points_element.textContent = `Points: ${points}`;
      current_word.textContent = `Word ${curr_word} of ${levels.length}`
      current_word.style.display = "block";
    }
  
    function checkAnswer() {
      const level = levels[currentLevel];
      const userGuess = guessInput.value.trim().toLowerCase();
      const correctAnswer = level.answer.toLowerCase();

      if (userGuess === correctAnswer) {
        scrambledWordElement.textContent = correctAnswer;
        scrambledWordElement.style.color = "green";
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        submitButton.disabled = true;
        nextButton.style.display = "inline-block";
        points += 1;
        points_element.textContent = `Points: ${points}`;
      } else {
        scrambledWordElement.style.color = "red";
        resultElement.textContent = "Try again!";
        resultElement.style.color = "red";
      }
    }
  
    submitButton.addEventListener("click", checkAnswer)
  
    nextButton.addEventListener("click", () => {
      currentLevel++;
      if (currentLevel < levels.length) {
        scrambledWordElement.style.color = "black";
        curr_word += 1;
        loadLevel();
      } else {
        scrambledWordElement.textContent = "You completed all the levels! Great Job!";
        if (points == 1){
            points_element.textContent = `You got 1 point!`;
        }
        else{
            points_element.textContent = `You got ${points} points!`;
        }
        hintElement.textContent = "";
        resultElement.textContent = "";
        guessInput.style.display = "none";
        submitButton.style.display = "none";
        nextButton.style.display = "none";
      }
    })

    go_to_site.addEventListener('click', () => {
      // Redirect to a new site
      window.location.href = link;
    })

    restartButton.addEventListener("click", () =>{
        currentLevel = 0;
        points = 0;
        curr_word = 0;
        scrambledWordElement.style.color = "black";
        loadLevel();
    })

    // Load the first level
    loadLevel();
  });
  