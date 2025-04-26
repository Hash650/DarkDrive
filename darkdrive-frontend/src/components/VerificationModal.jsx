import { Link } from "react-router-dom";

const VerificationModal = ({ onClick }) => {
	return (
		<div className='absolute bg-primary flex flex-col items-center justify-center p-12 rounded-lg gap-8'>
			<h1>Please Verify Your Email</h1>
			<p>A verification link has been sent to your email.</p>
			<button onClick={onClick}>Login</button>
		</div>
	);
};

export default VerificationModal;
