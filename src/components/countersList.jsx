import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  // CounterList - это наша компонент
  // инициализируем наш компонет const CounterList
  // затем переходим в app.jsx и импортируе CounterList
  //В  const App прописываем return <CountersList />
  const initialState = [
    { id: 0, value: 0, name: "ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "ложка" },
    { id: 2, value: 0, name: "вилка" },
    { id: 3, value: 0, name: "тарелка" },
    { id: 4, value: 0, name: "набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    console.log("handleDelete:", id);
    const newCounters = counters.filter((c) => c.id !== id);
    // console.log(newCounters);
    setCounters(newCounters); // чтобы обновить сосояние вызываем setCounters и передать туда новый
    //массив newCounters в котором отсутсвует данный элемент
  };

  const handleIncrement = (id) => {
    console.log("handleIncrement");

    const newCounters = counters.map((counter) => {
      if (counter.id === id) {
        counter.value++;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((counter) => {
      if (counter.id === id && counter.value) {
        counter.value--;
      }
      return counter;
    });
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
    console.log("handlereset");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
          // аргумент всегда начинается с on
        />
        // здесь для каждого компонета Counter установлены атрибуты key...
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
