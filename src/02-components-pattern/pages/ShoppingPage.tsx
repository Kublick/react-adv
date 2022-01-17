import {
	ProductButtons,
	ProductCard,
	ProductImage,
	ProductTitle,
} from '../componens';
import '../styles/customStyles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

export const ShoppingPage = () => {
	const { onProductCountChange, shoppingCart } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage img={product.img} />
						<ProductTitle title={product.title} />
						<ProductButtons />
					</ProductCard>
				))}
			</div>
			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						style={{ width: '100px' }}
						value={product.count}
						onChange={onProductCountChange}
					>
						<ProductImage />
						<ProductButtons
							style={{ display: 'flex', justifyContent: 'center' }}
						/>
					</ProductCard>
				))}
			</div>
			{JSON.stringify(shoppingCart, null, 4)}
		</div>
	);
};
