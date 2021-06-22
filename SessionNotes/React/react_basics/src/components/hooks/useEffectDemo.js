import React from "react";

function UseEffectDemo() {
  const [user, setUser] = useState({
    userName: "Jhon",
    gender: "male",
    age: 20,
  });

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <>
      Name:
      <input
        type="text"
        value={user.userName}
        onChange={(event) => {
          setUser({
            ...user,
            userName: event.target.value,
          });
        }}
      />
      Gender:
      <input
        type="text"
        value={user.gender}
        onChange={(event) => {
          setUser({
            ...user,
            gender: event.target.value,
          });
        }}
      />
      Age:
      <input
        type="text"
        value={user.age}
        onChange={(event) => {
          setUser({
            ...user,
            age: event.target.value,
          });
        }}
      />
    </>
  );
}

export default UseEffectDemo;
