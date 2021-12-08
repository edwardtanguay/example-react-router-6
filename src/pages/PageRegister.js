import { useContext } from 'react';
import AppContext from '../AppContext';

const PageRegister = () => {
	const { siteStatus} = useContext(AppContext);
	return (
		<>
		<p>This is the register page.</p>
		<p>STATUS: <span className="highlight">{siteStatus.toUpperCase()}</span></p>
		</>
	)
}

export default PageRegister;