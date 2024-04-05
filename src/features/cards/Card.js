import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCardById } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector(selectCardById(id)); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}


/*
echo "# flashcards-starting-code-react-v18" >> README.md
git init
git add .
git commit -m "saving project"
git branch -M main
git remote add origin https://github.com/elreyyyy/flashcards-starting-code-react-v18.git
git push -u origin main
 */