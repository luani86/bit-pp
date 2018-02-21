  function shuffle(a) {
      //new array
      var b = [];
      var usedIndexes = [];
      for (var i = 0; i < a.length;) {
          //in each iteration
          //generate random index
          var randomIndex;
          randomIndex = Math.floor(Math.random() * a.length);

          //check if have already used it
          if (usedIndexes.indexOf(randomIndex) == -1) {
              //if not
              //copy the element and extend the array of used indexes
              b.push(a[randomIndex]);
              usedIndexes.push(randomIndex);
              i++;
          } else {
              //if yes
              //go to the next iteration
              continue;

          }
      }
      return b;
  }
  console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));