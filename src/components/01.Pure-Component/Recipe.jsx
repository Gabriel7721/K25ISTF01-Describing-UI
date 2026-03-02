const Recipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Đun sôi {drinkers} cốc nước.</li>
      <li>
        Thêm vào {drinkers} muỗng trà và {drinkers * 0.5} muỗng đường
      </li>
      <li>Thêm vào {drinkers * 0.5} muỗng sữa, sau đó khoáy đều.</li>
    </ol>
  );
};

export default Recipe;
