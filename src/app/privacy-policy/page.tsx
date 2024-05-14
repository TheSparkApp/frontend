"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import "../util.css";
import { ThemeContext } from "../../components/ThemeProvider";
import { useRouter } from "next/navigation";
import { LOGO } from "@/components/LOGO";
import Footer from "@/components/homepage/Footer";
import { main, privacy } from "@/util/emails";

export default function PrivacyPolicies() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main
				className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start items-center transition-all ease-in duration-75"
				style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div className="w-11/12 max-w-[900px] items-start justify-center flex flex-col mb-10">
					<div className="w-full items-center justify-center flex flex-col">
						<LOGO
							width="320px"
							height="120px"
							white={!theme?.theme.colors.logo_white}
						/>
						<h1
							style={{ color: theme?.theme.colors.text }}
							className="text-5xl font-black italic text-center">
							SPARK&apos;S PRIVACY POLICY
						</h1>
						<div className="flex flex-row justify-center items-center gap-5 opacity-75">
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Effective from: May 13 2024
							</span>
							<span
								style={{ color: theme?.theme.colors.text }}
								className="text-xl font-normal">
								Last updated: May 13 2024
							</span>
						</div>
					</div>
					<h1
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Table of contents
					</h1>
					<div className="flex flex-col justify-center">
						<ol
							style={{ color: theme?.theme.colors.text_link }}
							className="">
							<Item id="whatsthis" content="What&apos;s this?" />
							<Item
								id="whatwecollect"
								content="What do we collect from you?"
							/>
							<Item
								id="howweuseyourdata"
								content="How we use your data"
							/>
							<Item
								id="howweshareyourdata"
								content="How we share your data"
							/>
							<Item
								id="savingyourdata"
								content="Saving your data"
							/>
							<Item
								id="protectyourdata"
								content="How we protect your data"
							/>
							<Item id="privacy" content="Manage your privacy" />
							<Item
								id="locallaws"
								content="Information on local data protection laws"
							/>
							<Item
								id="important"
								content="More important stuff"
							/>
							<Item id="finalwords" content="Final words" />
						</ol>
					</div>

					<h1
						id="whatsthis"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						What&apos;s this?
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							SPARK is the best platform to share your day and
							meet new people, find interests and meet people with
							the same interests. To keep it that way, and to let
							you know what we do behind the door, we have this
							privacy policy.
						</span>
					</div>

					<h1
						id="whatwecollect"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						What do we collect from you?
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							It&apos;s no secret that we store data, but why
							exactly? In order for users to be able to log in,
							share content or view other content, we need to
							store data.
						</span>
						<span className="font-bold">
							What exactly do we store?
						</span>

						<div className="flex flex-row w-full justify-start">
							<span>
								We store all the data that you share with us, be
								it when you create a post, write a message or
								upload content. In addition, we collect
								automatically generated data that is used, for
								example, to optimise the feed algorithm,
								although this data may change over time. In
								addition to the information you provide, we also
								store user data such as your e-mail address or
								user name. To ensure the security of your data,
								we use encryption technologies to ensure that
								your personal information is protected and does
								not fall into the wrong hands. Our aim is to
								provide you with a secure and trustworthy
								platform on which you can freely exchange and
								interact. By storing and processing this data,
								we can offer you personalised services and
								functions that meet your individual needs and
								preferences. We take great care to ensure that
								your data is safe and secure and utilise
								advanced security measures to ensure this. In
								addition, we offer you the opportunity to
								customise your privacy settings and retain
								control over what data you do and do not want to
								share. Your privacy is important to us and we
								respect your choices regarding the use of your
								personal information. We also make it possible
								for you to
								<a
									className="ml-1 opacity-100 cursor-pointer font-bold"
									style={{
										color: theme?.theme.colors.text_link,
									}}
									onClick={() =>
										router.push(
											"/privacy-policy/request-data"
										)
									}>
									request your data.
								</a>
							</span>
						</div>
					</div>

					<h1
						id="howweuseyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we use your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span className="font-bold">
							Under certain data protection laws such as the GDPR,
							companies must have a ‘legal basis’ - a valid reason
							- to process personal data.
						</span>
						<span>
							Our data processing practices are based on legal
							principles, which form the basis for processing your
							data in accordance with this Privacy Policy. Within
							this structure, we use various information,
							including account information, content generated by
							you, direct information, information about your
							device, your website usage, automatically collected
							data and external sources to pursue defined
							purposes. Each of these purposes is explained in
							detail to give you an understanding of why and how
							we process your data to achieve each purpose.
						</span>
						<span className="font-bold text-xl">
							To fulfil our contract with you, we now explain why
							we collect this data
						</span>
						<span className="font-bold">
							- So you can use SPARK
						</span>
						<span>
							For example, if you create a post, it is important
							to understand that we store it on our servers.
							Without information about you, we can&apos;t publish
							anything about you or show you (or anyone else)
							anything about you. Our storage of your posts allows
							us to present content according to your preferences
							and provide you with a personalised experience. This
							helps to ensure that you receive relevant
							information and interactions on our platform that
							are tailored to your individual needs.
						</span>
						<span className="font-bold">
							- So that SPARK remains safe
						</span>
						<span>
							We collect data for security reasons to ensure that
							our platform is protected and the integrity of our
							services is maintained. This data enables us to
							identify and further investigate cases of violations
							of our{" "}
							<a
								className="opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								onClick={() =>
									router.push("/terms-of-service")
								}>
								terms of service
							</a>
							. By analysing information, we can identify
							potential risks at an early stage and take
							appropriate measures to ensure the safety of our
							users and our platform as a whole. In addition, we
							use automated processes to respond quickly to
							suspicious behaviour and take appropriate action to
							enforce compliance with our policies. This proactive
							approach allows us to create a secure and trusted
							environment for all users.
						</span>
						<span className="font-bold">
							- Customer service and contact
						</span>
						<span>
							By collecting data, we can offer a variety of
							services and support options aimed at improving your
							experience and assisting you with any problems or
							queries you may have. For example, by collecting
							information about your use of our platform, we can
							better understand how you use our services and what
							difficulties you may be experiencing. This enables
							us to offer targeted support and process your
							enquiries more efficiently. In addition, the
							collection of data allows us to proactively provide
							you with assistance by identifying potential
							problems before they occur and suggesting
							appropriate solutions. For example, we can make
							personalised recommendations based on your usage
							patterns and preferences or give you tips on how to
							get the most out of our services. The collection of
							data also enables us to contact you directly if
							necessary to share important information or clarify
							questions. This can be particularly useful when it
							comes to urgent matters or changes to our services.
							Through effective communication, we can ensure that
							you are always informed of relevant developments and
							receive support quickly when you need it.
						</span>
						<span className="font-bold">
							- For protection and to prevent imminent risks
						</span>
						<span>
							The collection and disclosure of personal data is
							justified in some cases, particularly when the
							safety and well-being of individuals is at stake.
							Such a case arises, for example, if we believe that
							a person&apos;s life is in danger and rapid
							intervention is required to resolve an urgent
							medical situation, but also if there is a danger to
							several people.
							<br></br>
							<br></br>
							We also intend to act accordingly on our plaform.
							See
							<a
								className="opacity-100 cursor-pointer font-bold ml-1"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								onClick={() => router.push("/rules")}>
								Rules of use and interaction
							</a>
						</span>
					</div>

					<h1
						id="howweshareyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we share your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							Our top priority is the protection of your privacy
							and compliance with applicable data protection laws.
							First and foremost, we do not share data without
							your consent. However, there are situations in which
							we may be required to disclose personal data, in
							particular if this is necessary to prevent,
							investigate or sanction legal offences or to comply
							with the legal requirements of a country. In such
							cases, we reserve the right to disclose personal
							data if required to do so by law or if we believe
							disclosure is necessary to protect our rights,
							ensure your safety or the safety of others, or to
							respond to legal requests from public authorities.
							However, it is important to emphasise that we are
							always careful to disclose your data only in
							accordance with the law and with the greatest
							possible care. We take reasonable steps to ensure
							that disclosures are made lawfully and in accordance
							with our privacy policy and we endeavour to maintain
							transparency and inform you of such disclosures
							where permitted by law. Our commitment to your
							privacy is always at the forefront of our actions
							and decisions.
						</span>
						<span className="font-bold">
							As we said: Unless in serious cases, see:{" "}
							<a
								className="ml-1 opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								onClick={() =>
									router.push(
										"/privacy-policy/#howweuseyourdata"
									)
								}>
								How we use your data
							</a>
						</span>
					</div>

					<h1
						id="savingyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Data retention
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							Our practice in retaining personal data is to keep
							it only for as long as it is relevant to the
							purposes for which it was collected. We regularly
							delete or anonymise obsolete or no longer required
							data to protect your privacy and comply with legal
							requirements. Our data management strategy aims to
							be efficient while respecting your privacy rights.
							You have control over how your data is used and
							stored.
						</span>
					</div>

					<h1
						id="protectyourdata"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						How we protect your data
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							We use various security measures to protect your
							data. All information transmitted via our services
							is encrypted both in transit and at rest. Our
							priority is to protect your privacy and ensure the
							security of your data. Our encryption technologies
							help to ensure that your personal information is
							protected from unauthorised access.
						</span>
					</div>

					<h1
						id="privacy"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Manage your privacy
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							On our platform, you have the ability to select
							which groups you want to join. This flexibility
							allows you to engage in communities that match your
							interests and preferences and personalise your
							online experience. Our comprehensive privacy
							settings give you full control over the visibility
							of your personal information and allow you to define
							exactly who can access what data. Whether you want
							to customise your presence on the platform or delete
							your account, we give you the tools to manage your
							privacy preferences. Deleting or deactivating your
							account effectively stops the processing of your
							data by our platform, which means that your personal
							information will no longer be used in our data
							processing operations.<br></br>
							<br></br> In addition to this, you can edit or
							delete posts, which gives you the ability to manage
							your content and control your online presence. Of
							course, you can also edit or delete the content you
							have created. This function allows you to adjust or
							remove your posts if your opinion changes or you
							want to correct errors. By being able to manage your
							own content, you have full control over your online
							presence and can ensure that only the information
							you want is published on the platform.<br></br>
							<br></br>In addition, we offer you the option to
							download your collected data to ensure full
							transparency about the information we store and give
							you the option to store or use your data outside of
							the platform. Our platform is designed not only to
							provide you with a positive user experience, but
							also to ensure that you have full control over your
							data and that your privacy is protected.
						</span>
					</div>

					<h1
						id="locallaws"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Information on local data protection laws
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							Under the laws of some countries, services are
							required to provide their users with information
							about the data they collect, the purposes for which
							it is used and the legal basis for processing it.
							This transparency approach is designed to ensure
							that users understand what data is collected about
							them and how that data is used. Nevertheless, it is
							important to emphasize that because we want to
							operate a trustworthy platform, we are not only
							compliant with legal requirements, but also
							concerned about meeting your concerns and rights in
							relation to your data. As a user of our platform,
							you have certain rights in relation to your data.
							These include the right to access your stored
							information, the right to rectify inaccurate data,
							the right to erasure of your data and the right to
							restrict the processing of your data in certain
							circumstances. For these requests or other inquiries
							about the subject matter please{" "}
							<a
								className="ml-1 opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								href={`mailto:${privacy}`}>
								contact us
							</a>
							, but you can also download your data without
							requesting it via the website.<br></br>
							<br></br>
							Under the laws of some countries, services are
							required to provide their users with information
							about the data they collect, the purposes for which
							it is used and the legal basis for processing it.
							This transparency approach is designed to ensure
							that users understand what data is collected about
							them and how that data is used. Nevertheless, it is
							important to emphasize that because we want to
							operate a trustworthy platform, we are not only
							compliant with legal requirements, but also
							concerned about meeting your concerns and rights in
							relation to your data. As a user of our platform,
							you have certain rights in relation to your data.
							These include the right to access your stored
							information, the right to rectify inaccurate data,
							the right to erasure of your data and the right to
							restrict the processing of your data in certain
							circumstances. We are committed to respecting these
							rights and giving you the opportunity to retain
							control over your personal information. By providing
							clear and comprehensive privacy policies and easy
							access mechanisms to your privacy settings, we want
							to ensure that you feel comfortable using our
							services and can be confident that your privacy is
							protected.
						</span>
					</div>

					<h1
						id="important"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						More important stuff
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							We reserve the right to update this privacy policy
							from time to time. We will indicate the date of the
							last update. In the event of significant changes, we
							will notify you more clearly in accordance with the
							statutory provisions. This can be done, for example,
							by notifying you by e-mail or by highlighting the
							changes within our services.
							<br></br>
							<br></br>
							<a
								className="ml-1 opacity-100 cursor-pointer font-bold"
								style={{
									color: theme?.theme.colors.text_link,
								}}
								href={`mailto:${main}`}>
								Contact us
							</a>
						</span>
					</div>
					<h1
						id="finalwords"
						style={{ color: theme?.theme.colors.text }}
						className="font-black text-3xl mt-10">
						Final words
					</h1>
					<div
						className="mt-5 flex flex-col gap-2"
						style={{ color: theme?.theme.colors.text }}>
						<span>
							Thanks for reading and remember to check this page
							regularly for changes :)
						</span>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}

interface ItemProps {
	id: string;
	content: string;
}
const Item: React.FC<ItemProps> = ({ id, content }) => {
	const router = useRouter();
	return (
		<li
			onClick={() => router.push("#" + id)}
			className="cursor-pointer hover:font-semibold mt-1 underline hover:no-underline">
			{content}
		</li>
	);
};
