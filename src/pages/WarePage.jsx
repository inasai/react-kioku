import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';


const WarePage = () => {
	const { id } = useParams();
	const { fetchDevice } = useActions();
	const { ware } = useSelector((state) => state.wares);
	const [isLoad, setIsLoad] = React.useState([true]);


	useEffect(() => {
		setIsLoad(true);
		fetchDevice(id).then(() => {
      setIsLoad(false);
      window.scrollTo(0, 0);
    })
	}, [id])

	if(isLoad) {
		return <div className="loading">Loading...</div>
	}

	return <div className="ware" id="ware">
		<div className="ware__img">
			<img src={ware.image} alt="ware-img" />
			<p className="ware__rating">{ware.rating}</p>
		</div>
		<div className="ware__info">
			<p className="ware__info-title">{ware.title}</p>
			<p className="ware__info-price">{ware.price}</p>
		</div>
	</div>;
}

export default WarePage;
