Hi Isabelle!

Nice work! It was a bit confusing because there werre no instructions on how to play the game but wasn't too hard to work out.

As you can see below you have easily met the criteria for a Gödkänt grade, but unfortunately there are a few things left to do if you want a VG grade.

JS is very difficult abd you should be proud you made this! Let me know what you want to do.



*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅

Array: ✅

Random selection from array: ✅ 

Loops:
  For: ✅
  The first for loop at line 11 is slightly unnecessary because the value of "guesses" does not change in that loop. It starts at 2, runs twice in th line 11 loop and still has a value of 2 at line 22 & 24.

  You could refactor the loop at line 24 and remove the for loop at 11.

  While: ✅

Comparison with user entered data: ✅

Final message: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ❌

Nested logic: ✅

Input validation: ❌

Cancel button handling: ❌

Semantic variable naming: ✅
  "arraays" could be "targetWord" or somesuch

Code style: ✅
   A few missed things ik the closing ) here:

   if (letter === arraays
        ) {

   When printing a string that includes a variable make sure you have correct mellanslager -

   alert("Spelet är slut!! Du förlora, ordet var" + arraays+ ".");

   - on my first game I had to ask my family what a "varråtta" was beacuse there is no space between "ordet var' and arraays!
          