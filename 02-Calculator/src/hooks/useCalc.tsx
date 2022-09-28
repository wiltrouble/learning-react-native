import {useState, useRef} from 'react'

enum Operators {
  sum,
  substraccion,
  multiply,
  split,
}

export const useCalc = () => {

  const [number, setNumber] = useState("0");
  const [pastNumber, setPastNumber] = useState("0");

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber("0");
    setPastNumber('0')
  };

  const buildNumber = (numberText: string) => {
    if (number.includes(".") && numberText === ".") return;
    if (number.startsWith("0" || number.startsWith("-0"))) {
      if (numberText === ".") {
        setNumber(number + numberText);
      } else if (numberText == "0" && number.includes(".")) {
        setNumber(number + numberText);
      } else if (numberText !== "0" && !number.includes(".")) {
        setNumber(numberText);
      } else if (numberText === "0" && number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const btnDelete = () => {
    let negative = "";
    let tempNumber = number;
    if (number.includes("-")) {
      negative = "-";
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber("0");
    }
  };

  const changeNumber = () => {
    if (number.endsWith(".")) {
      setPastNumber(number.slice(0, -1));
    } else {
      setPastNumber(number);
    }
    setNumber("0");
  };

  const btnSplit = () => {
    changeNumber()
    lastOperation.current = Operators.split;
  };
  const btnMultiply = () => {
    changeNumber()
    lastOperation.current = Operators.multiply;
  };
  const btnSubstract = () => {
    changeNumber()
    lastOperation.current = Operators.substraccion;
  };
  const btnSum = () => {
    changeNumber()
    lastOperation.current = Operators.sum;
  };

  const calc = () => {
    const num1 = Number(number)
    const num2 = Number(pastNumber)

    switch (lastOperation.current) {
      case Operators.sum:
          return setNumber(`${num1 + num2}`)
      case Operators.substraccion:
          return setNumber(`${num2 - num1}`)
      case Operators.multiply:
          return setNumber(`${num1 * num2}`)
      case Operators.split:
          return setNumber(`${num2 / num1}`)
    }

    setPastNumber('0')
  }

  return {
    pastNumber,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnSplit,
    buildNumber,
    btnMultiply,
    btnSubstract,
    calc,
    btnSum,
    
  }
}