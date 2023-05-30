import { useState } from "react";
import { useLayoutEffect } from "react";
import { Dropdown } from "./Dropdown";

export function ManagedField({ words }) {
  const [userInput, setUserInput] = useState("");
  const [wordsArray, setWordsArray] = useState([...words]);
  const [currentPlaceholder, setPlaceholder] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!words.includes(userInput) && userInput !== "") {
      setWordsArray([userInput, ...wordsArray]);
    }
    setUserInput("");
  }

  function handleAnswerChange(event) {
    if (event.key === "Tab") {
      setUserInput(currentPlaceholder);
    }
  }

  useLayoutEffect(() => {
    if (userInput !== "") {
      const regexpr = new RegExp(`^${userInput}`, "i");
      for (let index = 0; index < wordsArray.length; index++) {
        if (regexpr.test(wordsArray[index])) {
          setPlaceholder(wordsArray[index]);
        }
      }
    } else {
      setPlaceholder("");
    }
  }, [userInput, wordsArray]);

  return (
    <>
      <form className="form-outline mb-4" onSubmit={handleFormSubmit}>
        <h1>Автодополнение - TAB</h1>
        <p className="place">{currentPlaceholder}</p>
        <textarea
          id="managed-area"
          className="form-control mt-0"
          rows={4}
          value={userInput}
          onKeyDown={handleAnswerChange}
          onChange={(event) => setUserInput(event.target.value)}
        ></textarea>
        <button className="btn btn-primary btn-block mb-4">Сохранить</button>
      </form>
      <Dropdown className="clue" allWords={wordsArray}></Dropdown>
    </>
  );
}
