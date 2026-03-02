let guest = 0;
const Cup = () => {
  guest = guest + 1;
  return <div>Tea cup for guest #{guest}</div>;
};

const TeaSet = () => {
  return (
    <>
      <Cup /> 1
      <Cup />
      <Cup />
    </>
  );
};

export default TeaSet;
