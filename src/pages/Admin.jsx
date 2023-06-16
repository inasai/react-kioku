import React, { useEffect, useState } from 'react';
import { Input } from '../components/ui/Inputs';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import Pagination from '../components/pagination';
import { getLimitedText } from '../helpers';

const Admin = () => {
	const { fetchDevices } = useActions();
	const { categories, sort } = useSelector((state) => state.filter);
  const { wares } = useSelector((state) => state.wares);
	const [currentPage, setCurrentPage] = React.useState(1);

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [rating, setRating] = useState('');
	const [types, setTypes] = useState('');
	const [image, setImage] = useState('');

	console.log(wares)

	const { addDevice, deleteDevice } = useActions();

	const handleAddDevice = (e) => {
		e.preventDefault();
		addDevice(image, title, types, price, category, rating);
	}

	const handleDeleteWare = (id) => {
		deleteDevice(id)
	}

	useEffect(() => {
		const category = categories > 0 ? `category=${categories}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

		fetchDevices(currentPage, category, sortBy, order).then(() => {
      window.scrollTo(0, 0);
    })
	}, [currentPage])

	return <div className='admin' id='admin'>
		<div className="admin__inner">
			<div className="admin__container container">
				<form className="admin__form" onSubmit={handleAddDevice}>
					<div className="admin__form-fields">	
						<div className="admin__form-field">
							<div className="admin__form-field__title">Image</div>
							<Input placeholder='Хуй' name="image" value={image} onChange={value => setImage(value)} />
						</div>
						<div className="admin__form-field">
							<div className="admin__form-field__title">Title</div>
							<Input name="name" value={title} onChange={value => setTitle(value)}  />
						</div>
						<div className="admin__form-field">
							<div className="admin__form-field__title">Price</div>
							<Input name="price" value={price} onChange={value => setPrice(value)}  />
						</div>
						<div className="admin__form-field">
							<div className="admin__form-field__title">Category</div>
							<Input name="category" value={category} onChange={value => setCategory(value)}  />
						</div>
						<div className="admin__form-field">
							<div className="admin__form-field__title">Types</div>
							<Input name="types" value={types} onChange={value => setTypes(value)}  />
						</div>
						<div className="admin__form-field">
							<div className="admin__form-field__title">Rating</div>
							<Input name="types" value={rating} onChange={value => setRating(value)}  />
						</div>
					</div>
					<div className="admin__form-btn">
						<button type='submit'>Створити</button>
					</div>
				</form>
				<div className="admin__wares">
				<div className="admin__wares-blocks">
					{
						wares.map(ware => {
							return <div key={ware.id} className="admin__wares-block">
								<div className="admin__wares-block__img">
									<img src={ware.image} alt="ware-image" />
								</div>
								<div className="admin__wares-block__info">
									<h4>{getLimitedText(ware.title)}</h4>
									<button onClick={() => handleDeleteWare(ware.id)}>Видалити</button>
								</div>
							</div>
						})
					}
				</div>
				<Pagination onChangePage={(number) => setCurrentPage(number)} />
				</div>
			</div>
		</div>
	</div>;
}

export default Admin;
