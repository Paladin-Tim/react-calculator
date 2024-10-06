import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./App.module.css";

const cx = classNames.bind(styles);

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleBtnClick = (btn) => {
    switch (btn.id) {
      case 10:
      case 11:
        if (
          inputValue[inputValue.length - 1] === "+" ||
          inputValue[inputValue.length - 1] === "-"
        ) {
          setInputValue((prev) => prev);
          setIsResult(false);
        } else {
          setInputValue((prev) => prev + btn.value);
          setIsResult(false);
        }
        break;
      case 12:
        if (["+", "-"].some((i) => inputValue.includes(i))) {
          setInputValue(
            inputValue
              .split(/(?=-)|\+/g)
              .reduce((acc, num) => acc + Number(num), 0)
              .toString(),
          );
          setIsResult(true);
        } else {
          setInputValue((prev) => prev);
        }
        break;
      case 13:
        setInputValue("");
        setIsResult(false);
        break;
      default:
        setInputValue((prev) => prev + btn.value);
        setIsResult(false);
    }
  };

  const buttons = [
    { id: 7, value: "7" },
    { id: 8, value: "8" },
    { id: 9, value: "9" },
    { id: 13, value: "C" },
    { id: 4, value: "4" },
    { id: 5, value: "5" },
    { id: 6, value: "6" },
    { id: 1, value: "1" },
    { id: 2, value: "2" },
    { id: 3, value: "3" },
    { id: 12, value: "=" },
    { id: 10, value: "+" },
    { id: 0, value: "0" },
    { id: 11, value: "-" },
  ];

  return (
    <>
      <main className={styles.calculator}>
        <input
          type="text"
          className={cx("textField", isResult ? "result" : null)}
          value={inputValue}
        ></input>
        <article className={styles.buttonsWrapper}>
          {buttons.map((btn) => (
            <button
              onClick={() => handleBtnClick(btn)}
              type="button"
              key={btn.id}
              className={cx(
                "calcButton",
                btn.id === 10 || btn.id === 11 ? "btnOperation" : null,
                btn.id === 12 ? "btnEqual" : null,
                btn.id === 13 ? "btnClear" : null,
              )}
            >
              {btn.value}
            </button>
          ))}
        </article>
      </main>
    </>
  );
};
