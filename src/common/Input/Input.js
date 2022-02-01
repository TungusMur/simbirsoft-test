const Input = ({ setDate, date, type }) => {
  const Type = {
    date: {
      function: () => {
        <input
          type={type}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />;
      },
    },
  };
  return Type.date.function;
};

export default Input;
