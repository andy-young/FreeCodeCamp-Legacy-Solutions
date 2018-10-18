var count = 0;

function cc(card) {
  
if (card == 2) {
    count = count + 1;
  }
else if (card == 3) {
    count = count + 1;
  }
else if (card == 4) {
    count = count + 1;
  }
else if (card == 5) {
    count = count + 1;
  }
else if (card == 6) {
    count = count + 1;
  }
if (card == 7) {
    count += 0;
  }
if (card == 8) {
    count += 0;
  } 
if (card == 9) {
    count += 0;
  }
if (card == 10) {
    count--;
  }
else if (card == 'J') {
    count = count - 1;
  }
else if (card == 'Q') {
    count = count - 1;
  }
else if (card == 'K') {
    count = count - 1;
  }
else if (card == 'A') {
    count = count - 1;
  } 
  if (count > 0) {
   return count + " Bet"; 
  }
  if (count <= 0) {
    return count + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
