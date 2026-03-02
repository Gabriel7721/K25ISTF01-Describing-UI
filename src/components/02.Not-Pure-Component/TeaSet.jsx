let guest = 0;

const Cup = ({ guest }) => {
  guest = guest + 1;
  return <div>Tea cup for guest #{guest}</div>;
};

const TeaSet = () => {
  const cups = [];
  for (let i = 0; i <= 12; i++) {
    cups.push(<Cup guest={i} key={i} />);
  }
  return <>{cups}</>;
};

export default TeaSet;
