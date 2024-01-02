function FoodComponent(props) {
  const { food } = props;
  return (
    <div>
      따뜻한 <span className="food">{food}</span>
    </div>
  );
}

FoodComponent.defaultProps = {
  food: '밥',
};

export default FoodComponent;
