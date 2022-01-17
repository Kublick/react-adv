import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../componens';
import '../styles/customStyles.css';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
	// const { onProductCountChange, shoppingCart } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />

			<ProductCard
				product={product}
				key={product.id}
				className="bg-dark text-white"
				initialValues={{
					count: 0,
					maxCount: 10,
				}}
			>
				{({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
					<>
						<ProductImage className="custom-image" />
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />

						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{isMaxCountReached ? null : (
							<button onClick={() => increaseBy(2)}>+2</button>
						)}
						<span>
							{count} - {maxCount}
						</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};
