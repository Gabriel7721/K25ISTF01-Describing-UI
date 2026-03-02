import Recipe from "./Recipe";

const MilkTea = () => {
  return (
    <section>
      <h1>Milk tea recipe</h1>
      <h2>Cho 2 người uống</h2>
      <Recipe drinkers={2} />
      <h2>Cho 1 nhóm người uống</h2>
      <Recipe drinkers={10} />
    </section>
  );
};

export default MilkTea;
