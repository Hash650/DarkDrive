import { Link } from "react-router-dom";
import LandingImage from "/LandingImage.jpg";
import Mockup from "/DarkDriveMockup.png";
import Card from "../components/Card";

const Home = () => {
	return (
		<>
			<span className='grid lg:grid-cols-[60%_40%] bg-primary items-center mt-22'>
				<div className='flex flex-col items-center justify-center gap-8 backdrop-blur-sm p-8 sm:p-16 text-center rounded-lg'>
					<h1 className='font-display text-white/90'>Welcome To DarkDrive</h1>
					<h2 className='text-white/90'>
						Your Files. Your Rules. With end-to-end encryption built in, your files are locked
						down—only you hold the key. Whether you're storing personal documents or sensitive data,
						DarkDrive keeps it private, secure, and accessible only to you.
					</h2>
					<Link to='/user'>
						<button>Secure Your Files Now</button>
					</Link>
				</div>
				<div
					style={{
						backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${LandingImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
					className='flex items-center justify-center'
				>
					<img src={Mockup} className='hidden sm:block max-w-[70%]' />
				</div>
			</span>
			<section className='grid lg:grid-cols-2 items-center justify-center gap-8 py-8'>
				<aside className='flex flex-col items-center justify-center p-8'>
					<div className='flex flex-col gap-8 rounded-3xl p-4 backdrop-blur-sm'>
						<h1 className='text-accent'>What is DarkDrive?</h1>
						<p className='text-sm md:text-base lg:text-lg'>
							At DarkDrive, we believe secure file sharing should be simple, fast, and truly
							private. Your files are encrypted on your device before they ever reach our servers —
							meaning even though we store them, we can never read, access, or expose your data.
							Only you and the people you choose have the keys to decrypt your files.
							<br />
							<br />
							Create an account to manage your uploads, track your file history, and customize
							security settings like passwords or file expiration times.
							<br />
							We don’t collect sensitive information, and we never compromise on encryption — your
							privacy stays fully under your control.
							<br />
							<br />
							Whether you're sharing important documents, creative projects, or personal files,
							DarkDrive keeps your data safe, private, and in your hands.
						</p>
					</div>
				</aside>
				<aside className='flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 items-center justify-center w-full'>
					<Card
						icon='fa-solid fa-upload'
						heading='Seamless Secure Upload'
						paragraph='Easily upload files through a secure, user-friendly interface with a focus on data integrity.'
					/>
					<Card
						icon='fa-solid fa-lock'
						heading='Redundant Encryption'
						paragraph='Files can be encrypted with a password, ensuring maximum security and smooth user experience.'
					/>
					<Card
						icon='fa-solid fa-database'
						heading='Secure Storage'
						paragraph='Encrypted files are safely stored, with content visible only to the user.'
					/>
					<Card
						icon='fa-solid fa-key'
						heading='Full Access Control'
						paragraph='Users decide a password per file, maintaining full control over their files.'
					/>
				</aside>
			</section>
		</>
	);
};

export default Home;
