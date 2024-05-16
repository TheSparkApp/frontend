"use client";
import { ThemeContext } from "@/components/ThemeProvider";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect } from "react";
import "../util.css";
import { NavBar } from "./components/NavBar";

function Search() {
	const searchParams = useSearchParams();
	const event = searchParams.get("event");
	let resp = null;
	if (event === "test") {
		resp = <div>TEST</div>;
	}

	return resp;
}
//! AB HIER SCHAUEN OB EINGELOGGT
export default function MainApp() {
	const theme = React.useContext(ThemeContext);

	return (
		<div
			style={{ background: theme?.theme.colors.background }}
			className="overflow-hidden h-full w-full absolute">
			<Suspense fallback={<div></div>}>
				<NavBar />
				<Search />
				<main
					style={{ background: theme?.theme.colors.background }}
					className="w-full h-full flex flex-col mt-2 overflow-x-hidden justify-center items-center transition-all ease-in duration-75">
					<main className="bg-blue-600 max-w-[1800px] w-full h-full flex flex-row items-center justify-center overflow-hidden">
						<div className="bg-red-600 min-w-[200px] w-[300px] max-w-[400px] h-full hide-home-bars2"></div>
						<div className="bg-green-600 min-w-[600px] w-full max-w-[800px] h-full full-home overflow-y-scroll">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Cupiditate suscipit maiores dolorem aliquid
							dolores, distinctio nam sint earum placeat,
							assumenda natus doloribus ducimus impedit accusamus
							quibusdam. Quasi omnis aliquam asperiores numquam
							cum id! Iusto maxime rem exercitationem cumque
							aperiam ea ut commodi, libero dolor, sapiente
							dolores at quam officiis delectus neque sint, nam
							laudantium nostrum eos quibusdam temporibus voluptas
							deleniti suscipit. Nobis odit hic ut sequi quaerat
							dolorem itaque, consectetur consequuntur maxime quos
							molestiae error optio reiciendis. Est similique
							accusantium repellat quia hic quod fugit odio cumque
							nobis incidunt inventore delectus asperiores itaque
							corporis, natus recusandae a nisi quis doloribus
							facere placeat laborum. Quis magnam beatae error
							voluptatibus asperiores est eligendi minus
							reiciendis sed enim? Incidunt minima ullam
							assumenda, voluptatum dolorem, earum fuga nisi vero
							laudantium mollitia cupiditate, quae fugit! Iste
							aperiam, deleniti enim voluptate architecto omnis ea
							sit aut natus, vel nihil distinctio tempore, dolores
							iusto minima. Quaerat aliquam dolor voluptatum, illo
							sunt vel asperiores expedita fugiat! Minima neque
							aut magnam explicabo ex odio possimus maiores quia a
							suscipit. Pariatur earum quae quidem eaque illum
							tenetur distinctio, sit iusto nostrum expedita quam
							officiis eligendi facere obcaecati similique nam
							repellendus? Consequuntur dolorem ipsam accusantium
							repellendus quae mollitia aperiam iure, odit eaque
							quasi amet cumque quibusdam ipsum doloribus sunt
							iusto porro facilis, nostrum accusamus fuga saepe
							commodi! Expedita similique velit maiores quae error
							earum reiciendis ad pariatur quasi eveniet impedit
							veniam molestiae, voluptatum voluptate. Asperiores
							nesciunt earum cum. Ipsa, quisquam aut maiores
							suscipit distinctio tenetur impedit odio quia ut
							inventore accusamus consequatur dolorum itaque id
							sapiente, iusto blanditiis. Eum, minima nisi
							assumenda iusto et laboriosam at temporibus,
							perferendis odio asperiores nihil modi laudantium
							adipisci doloribus quas alias provident eius dolorem
							qui ex sit animi voluptates! Quas unde eos assumenda
							quaerat, voluptate nam vitae excepturi dolorum
							temporibus ut maxime. Esse, mollitia odit ipsa
							magnam eum facere laudantium dignissimos! Tempore
							expedita dolor eaque ipsam impedit facilis sed,
							veritatis amet nihil minima blanditiis rerum qui
							nisi molestias. Itaque, nostrum magnam! Temporibus
							qui adipisci, cumque exercitationem excepturi illo
							illum perferendis et error deleniti dolorum alias
							hic id maiores nostrum nemo! Quas praesentium
							repudiandae voluptate beatae nemo officiis
							cupiditate! Tenetur incidunt possimus, maxime ea
							consectetur numquam officia quo saepe eaque
							mollitia, nesciunt magnam distinctio aut reiciendis
							ab fuga modi deleniti asperiores. Voluptatibus,
							doloremque recusandae obcaecati odio magnam numquam
							sequi quisquam eos? Molestias eius perspiciatis illo
							voluptatem vel nulla quibusdam laudantium at sint
							itaque aliquid quaerat reiciendis alias cumque hic
							officiis vero recusandae, similique non. Nemo animi,
							dignissimos nesciunt, quia, expedita voluptates
							maiores ipsam delectus autem numquam eum dolore
							quaerat beatae optio iste amet ipsum sit qui!
							Voluptatum excepturi itaque sapiente minima iste
							odit iusto quo tempora id veritatis modi deleniti
							quas quaerat, nam reiciendis. Illo vero impedit
							facilis excepturi distinctio, rerum officia debitis
							facere porro architecto quisquam recusandae expedita
							unde doloremque voluptatibus beatae quas omnis
							velit, nam odio delectus culpa? Debitis non minima
							quaerat nam voluptate cumque cupiditate sit
							necessitatibus fuga sapiente quibusdam, iste
							laudantium voluptas officiis praesentium temporibus
							voluptatum accusamus? Deleniti sunt aliquam dolor
							voluptas dignissimos velit facilis voluptatem dicta?
							Minima alias id adipisci cupiditate fuga beatae
							reiciendis debitis aspernatur quo, nulla distinctio
							repudiandae tempore aut aperiam doloribus ipsum nam
							nesciunt voluptatibus ex harum temporibus
							consequatur iure, placeat sed. Facere aut
							consequatur dolorum consectetur sed fugiat nisi
							repudiandae ullam tempora, explicabo voluptates a
							ipsam hic cumque nihil est ducimus beatae
							perspiciatis cum libero saepe reprehenderit, eum
							delectus. Tenetur maiores sunt vero facilis saepe
							earum ducimus non quibusdam, dolorum impedit
							exercitationem iusto nam similique vitae nostrum
							ratione assumenda illo minima magni accusantium ipsa
							maxime odio iure omnis. Excepturi placeat dicta
							cumque iste ducimus! Quaerat porro impedit beatae!
							Quos assumenda labore inventore porro autem magnam
							veritatis commodi voluptas voluptate. Nobis possimus
							et libero dolor laboriosam repellat autem vel, nihil
							molestiae debitis consequuntur, beatae accusamus
							dolore nisi vitae? Voluptates aut repellendus, odit
							ea pariatur velit dolorem totam maxime voluptatum
							molestiae earum, aperiam minus ut recusandae, atque
							dolores ipsa nulla tenetur non dolor provident
							debitis molestias error? Ut nihil corporis tempora
							hic sequi, quidem voluptatibus tenetur facere dolor
							possimus id repellendus eveniet deleniti vitae
							accusamus sit saepe veritatis molestiae in
							voluptatem recusandae minus eum provident aliquam.
							Deserunt eveniet optio autem, doloribus perspiciatis
							voluptatibus consequatur harum perferendis?
							Consequuntur fugiat odit facere. Eum a ratione
							molestiae suscipit sapiente voluptate nihil iste nam
							autem delectus. Optio dignissimos atque, molestias
							vel earum quisquam iusto aspernatur odio saepe, cum
							veniam? Deleniti saepe, quia libero, deserunt dicta
							dolore fugit, ea beatae recusandae similique quam
							asperiores! Nisi, commodi eligendi, illo quia
							consequatur architecto optio aspernatur voluptas
							deserunt dolor, magni aliquid accusamus. Eveniet
							libero aperiam dicta saepe voluptate perferendis
							quasi quo incidunt nulla architecto perspiciatis,
							rem numquam facilis esse ex sit officia? Nisi
							possimus iste voluptate quaerat optio, impedit nam
							numquam nesciunt! Cum quia quisquam deleniti. Iusto
							voluptatem pariatur perferendis nisi incidunt,
							laudantium similique deleniti aperiam hic! Labore
							suscipit magnam similique ipsum quia deserunt alias,
							minima beatae nulla. Accusamus voluptate quia magnam
							illum omnis esse voluptatum. Laborum esse autem
							accusantium, deserunt animi aperiam nulla! Animi
							perspiciatis rerum eum sunt nostrum perferendis sint
							deserunt numquam id! Rem, praesentium est?
							Consequuntur mollitia earum illum fugiat nobis eos,
							aspernatur sint assumenda! Odio dignissimos aut
							pariatur aliquam dolorum alias vero error provident
							voluptatibus. Tempora cum, sit vel odit, impedit
							commodi minima optio, eaque tenetur voluptatibus
							fuga! Atque qui illum sit debitis blanditiis
							temporibus minima optio praesentium inventore ea?
							Repudiandae tempore quaerat veniam iste fuga hic
							laborum voluptatibus consectetur nihil omnis
							deleniti iusto inventore accusamus voluptatum
							cupiditate, eos quo sint corporis cum veritatis
							similique minima odit! Dicta labore vel ex possimus
							dolor dolore minus numquam rem fuga quisquam quia
							esse explicabo, magni voluptatem enim. Aliquid
							impedit error sint in, dolore asperiores nihil
							veniam unde quas reiciendis repudiandae suscipit
							iste iusto esse quos vel tempore dicta ratione
							voluptatem fugit alias? Veniam quaerat iusto, sunt
							perferendis nisi ipsa modi voluptate, aut a, ad
							facilis veritatis natus. Excepturi, hic unde vitae
							eveniet dolorem sapiente repellendus ratione, vero
							voluptates nobis beatae error. Inventore placeat
							enim ea consequatur debitis? Numquam iusto harum
							exercitationem officiis impedit eos totam!
						</div>
						<div className="bg-orange-600 min-w-[200px] w-[300px] max-w-[400px] h-full hide-home-bars"></div>
					</main>
				</main>
			</Suspense>
		</div>
	);
}
