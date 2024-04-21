const Footer = () => {
	return (
		<div className="w-full h-full text-black-200 bg-gray-500 shadow-lg p-[15px] z-20 text-white">
			<div className="w-full flex flex-col items-center justify-center">
			<p className="text-[15px] italic font-semibold">Made by Stein & Rafa</p>
			<div className="flex flex-row flex-wrap max-w-[500px] w-11/12 gap-10 gap-y-2 justify-center items-start">
				<a href="#">Privacy Policies</a>
				<a href="#">Imprint</a>
			</div>
			<a href='mailto:spark-org@dxby.dev' className="text-lg font-semibold opacity-100">spark-org@dxby.dev</a>
			</div>
		</div>
	);
};

export default Footer;
