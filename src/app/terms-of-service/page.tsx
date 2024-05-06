"use client";
import { NavBar } from "@/components/homepage/NavBar";
import React from "react";
import { ThemeContext } from "../../components/ThemeProvider";
import "../util.css";
import { LOGO } from "@/components/LOGO";
import { useRouter } from "next/navigation";
import Footer from "@/components/homepage/Footer";

export default function TOS() {
	const theme = React.useContext(ThemeContext);
	const router = useRouter();

	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-hidden">
			<main className="w-full h-screen flex flex-col overflow-x-hidden overflow-y-auto justify-start items-center transition-all ease-in duration-75" style={{ background: theme?.theme.colors.background }}>
				<NavBar />
				<br></br>
				<br></br>
				<div className="w-11/12 max-w-[900px] items-start justify-center flex flex-col mb-10">
					<div className="w-full items-center justify-center flex flex-col">
						<LOGO width="320px" height="120px" white={!theme?.theme.colors.logo_white} />
						<h1 style={{ color: theme?.theme.colors.text }} className="text-5xl font-black italic">SPARK&apos;S TERMS OF SERVICE</h1>
						<div className="flex flex-row justify-center items-center gap-5 opacity-75">
							<span style={{ color: theme?.theme.colors.text }} className="text-xl font-normal">Effective from: May 6 2024</span>
							<span style={{ color: theme?.theme.colors.text }} className="text-xl font-normal">Last updated: May 6 2024</span>
						</div>
					</div>
					<h1 style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Table of contents</h1>
					<div className="flex flex-col justify-center">
						<ol style={{ color: theme?.theme.colors.text_link }} className="">
							<Item id="whoarewe" content="Who are we"/>
							<Item id="software" content="Software in Spark&apos;s services" />
							<Item id="account" content="Your Spark&apos; account" />
							<Item id="ageRequirements" content="Age limits and duties of parents and guardians" />
							<Item id="copyright" content="Copyright" />
							<Item id="security" content="Security" />
							<Item id="content" content="Your content, our content, other content" />
							<Item id="servicesAsIs" content="Services &apos;AS IS&apos;" />
							<Item id="whatToExpect" content="What can you expect from us" />
							<Item id="restrictions" content="Restrictions on your use of Spark&apos;s services" />
							<Item id="limitationOfLiability" content="Limitation of liability" />
							<Item id="moreImportantStuff" content="More important stuff" />
							<Item id="finalwords" content="Final words" />
						</ol>
					</div>

					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>Welcome to SPARK, a platform to get closer together! In order for this to work legally and well, you must read this when you are on our platform. Welcome!</span>
						<span className="font-bold">These terms outline our mutual legal obligations. They apply to your use of our services.</span>
						<span>When we use the word &apos;you&apos;, we mean YOU, the user / reader.</span>
						<span>With words such as &apos;Our&apos;, &apos;We&apos; and &apos;Us&apos; we mean US, THE SPARK APP.</span>
						<span>YOU MUST <a style={{ color: theme?.theme.colors.text_link}} className="font-bold cursor-pointer">report a user</a> if you see someone violating the TOS.</span>
					</div>

					<h1 id="whoarewe" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Who we are</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>Spark is an online platform that allows users to create groups, share their interests and meet new people or grow closer together.</span>
						<span>Here you can create your profile and show what you want to show others.</span>
						<span>If you want you can <a style={{ color: theme?.theme.colors.text_link}} className="font-bold cursor-pointer">contact us</a> here.</span>
					</div>

					<h1 id="software" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Software in Spark&apos;s services</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>You can download and use our client software for accessing our services under a worldwide, personal, non-exclusive, non-assignable license, as long as you follow our terms.</span>
						<span>You may not copy, modify, distribute, sell, lease, sublicense, reverse engineer, or decompile our software without our consent or unless allowed by law.</span>
						<span>Despite this license, we maintain our intellectual property rights in our software and services.</span>
					</div>

					<h1 id="account" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Your Spark account</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>You need an account to use our services. We store data such as username and password or contact data such as email. YOU are responsible for keeping your account secure, which means for example a secure password! We also recommend 2 factor authentication to make your account EVEN MORE SECURE.
						You must always keep your information/contact details up to date on your account if you continue to use our service.
						If your email / phone number does not work or is not provided, there is little we can do to save your account in a case.
						Your SPARK account is your property, it is not allowed to transfer, sell or lend your account.</span>
					</div>

					<h1 id="ageRequirements" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Age limits and duties of parents and guardians</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>By using our services, you confirm that you meet the minimum age requirements set by your country&apos;s laws and are at least 13 years old. If you are a parent or legal guardian allowing your child to use our services, you accept responsibility for their actions and must review and agree to our terms on their behalf.</span>
					</div>

					<h1 id="copyright" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Copyright</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>We value others&apos; intellectual property and expect users to as well. Refer to our Copyright & IP Policy for filing copyright complaints.</span>
					</div>

					<h1 id="copyright" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Security</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span className="font-bold">To ensure that your account is and remains secure, you should do and observe the following:</span>
						<span>- Only use the official SPARK website and check the URL carefully.</span>
						<span>- SPARK will never ask for your password by e-mail or message. Never share your password in this way.</span>
						<span>- Keep your password secure and do not share it with others.</span>
						<span>- Use a strong, unique password for your SPARK account.</span>
						<span>- Be wary of suspicious links or attachments in messages.</span>
						<span>- Activate two-factor authentication to further protect your account.</span>
						<span>- Keep your contact details and security questions up to date.</span>
						<span>- Monitor your account activity regularly and report any unusual activity immediately.</span>
						<span className="font-bold">Keep this in mind so that your account remains secure.</span>
					</div>

					<h1 id="content" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Your / Our and Other content</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span className="font-bold">YOUR CONTENT</span>
						<span>This is about YOUR content, i.e. what you share, upload, show, etc. This means everything you upload/post/share on this service, everything you can &quot;add&quot; to SPARK. First of all, you don&apos;t HAVE to share anything, it&apos;s all optional to add content to SPARK. If you add something, you are responsible for what you add. That means: You need the license if there is one, you need to respect copyright, you need to see if it violates our TOS / Law. We have NO RESPONSIBILITY over your content or the content of others, or others who use your content.</span>
						<span>SPARK offers users groups, or even direct messages, and of course a MAIN feed with lots of content. Some groups are private, which means that you can only join with an invitation link. Groups have certain functions, which you must adhere to, as well as the rules of the group admins. Only join the groups you want to be a part of.</span>
						<span>The content you post belongs to you, of course, but you grant us a license when you use SPARK, and your content may be copyrighted and we have no ownership rights in it. However, when you use our services, you grant us a license to use your content for the operation, development and improvement of our services in accordance with applicable laws. These services are:</span>
						<span>- Use, store, copies</span>
						<span>- Publish and display in groups</span>
						<span>- Modify and reformat</span>
						<span>- Sublicense it to store your content</span>
						<span>This license is worldwide, non-exclusive (you can continue to license your content to others), royalty-free, transferable and perpetual.</span>
						<span>We may block, remove or permanently delete your content if it violates our rules or laws or negatively affects other users.</span>
						<span className="font-bold">OUR CONTENT</span>
						<span>Our Services contain our own content, including app and website designs, graphics, images and text. You may use our software in accordance with these Terms. All intellectual property rights in our content remain with us.</span>
						<span className="font-bold">OTHER CONTENT</span>
						<span>Our services may provide you with access to other people&apos;s content. You may only use this content with that person&apos;s permission or as permitted by law. The content of others belongs to them and does not necessarily represent our views.</span>
						<span>We do not verify or endorse the accuracy of User Content and strive to provide a safe, positive environment. However, you may encounter objectionable content. We accept no liability for any harm caused by such content. You can report content that violates our policies. We have the right, but not the obligation, to review such reports and remove content at our discretion.</span>
						<span>Our Services may also provide you with access to third-party content such as websites, features and applications. These access points are provided as a convenience to you and we are not liable for their content or services.</span>
					</div>

					<h1 id="serviceAsIs" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Services &apos;AS IS&apos;</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>SPARK provides its services "as is" without specific warranties. We disclaim any express or implied warranties, including warranties of merchantability, fitness for a particular purpose or non-infringement, to the extent permitted by law. We do everything we can to make it better. This means that we do not guarantee that our services will always work perfectly or meet your expectations. However, we always strive to provide a high quality user experience.</span>
					</div>

					<h1 id="whatToExpect" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">What can you expect from us</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>SPARK is the best place to chat online, socialize and post your own stuff. We offer different groups for your own interests. Users have a feed, but also groups that are more interest-oriented. Users can also communicate directly with each other or exchange messages in groups.</span>
						<span>Users create content on the feed or create and manage groups, choose which ones they join, and who their "friends" are. All users must adhere to our guidelines, but group owners set additional rules and permissions, including member requirements.</span>
						<span>SPARK is designed to bring the latest information to people and expand interests. Posts appear on the feed. We are developing features to facilitate the creation of content.</span>
						<span>Our services are personalized to help you discover new interests that may be of interest to you. You can adjust the personalization in your settings.</span>
						<span>We are continuously developing new features to improve SPARK. This may include adding or removing features and services if they no longer provide value or pose risks to SPARK or others. We try to avoid disruption, but we cannot guarantee that there will be no outages or changes that may affect your content. We are not liable for such outages or service changes.</span>
					</div>

					<h1 id="restrictions" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Restrictions on your use of Spark&apos;s services</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>Compliance with Laws and Policies: You must comply with all applicable laws and our policies when using SPARK&apos;s services.</span>
						<span>Prohibited Content: Do not post or share any illegal, offensive, or harmful content, including hate speech, harassment, or explicit material.</span>
						<span>No Impersonation: Do not impersonate others or create misleading profiles.</span>
						<span>No Unauthorized Access: Do not attempt to access accounts or data that do not belong to you.</span>
						<span>Respect Intellectual Property: Do not infringe on the intellectual property rights of others, including copyrights and trademarks.</span>
						<span>No Malicious Activities: Avoid using SPARK for any harmful or malicious purposes, such as distributing malware or spamming.</span>
						<span>No Commercial Exploitation: Do not use SPARK for unauthorized commercial purposes or advertising without our consent.</span>
						<span>Follow the TOS: Adhere to our TOS to maintain a respectful and safe environment for all users.</span>
					</div>

					<h1 id="limitationOfLiability" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Limitation of liability</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>SPARK is not liable for damages, losses, or injuries resulting from the use of our platform, to the extent permitted by law. This includes, but is not limited to, direct or indirect damages, consequential damages, lost profits, or data loss.</span>
						<span>We are not responsible for the content, actions, or omissions of third parties on our platform, including other users or third-party providers. Use of third-party services or content is at your own risk.</span>
						<span>Our platform is provided &quot;as is&quot; and &quot;as available.&quot; We make no warranties or representations regarding the performance, safety, availability, or reliability of our services.</span>
						<span>In cases where we may be held liable, our liability is limited to the maximum amount you paid for the use of our services in the last twelve months, or a lesser amount if required by applicable laws.</span>
						<span>We recommend taking precautions and following our safety guidelines to protect your account and personal data.</span>
					</div>

					<h1 id="moreImportantStuff" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">More important stuff</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>We reserve the right to change our TOS or privacy policies at any time, we will make you aware of this and whoever uses our service accepts the TOS or privacy policies.</span>
					</div>

					<h1 id="finalwords" style={{ color: theme?.theme.colors.text }} className="font-black text-3xl mt-10">Final words</h1>
					<div className="mt-5 flex flex-col gap-2" style={{ color: theme?.theme.colors.text }}>
						<span>Thanks for reading and remember to follow these rules or your account will be deleted.</span>
					</div>



				</div>
				<Footer/>
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
		<li onClick={() => router.push("#"+id)} className="cursor-pointer hover:font-semibold mt-1 underline hover:no-underline">{content}</li>
	);
};