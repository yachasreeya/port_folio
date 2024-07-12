// App.js
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import './hero-main.css'
import MyComponents from "./MyComponent";

export default function App() {
	return (
		<>
			<Navbar />
			<div className="main-hero">
			<Hero />
			<div>
				<img src='https://lh3.googleusercontent.com/pw/AP1GczMtLmTbeUzrDn79r9r3tuJ0WeL434bGmVtjK5euhMEV7NPX8qjwLGBRZY0R36XCrmVWK7Z7Cv0WIwCj6tnskDoL2umK1W-Jt6w6TWzV8aW4nSVvhSIiIqKqG0m2xQOnA2z1sjzmpWFTw_S7kdXMR_sgUgmNBSSNDB4n1u6Gj98N3mneAIYGqj0f-OPp37xR-7naraXl04pmKdjaxW-4iPAmicHctgAeNG2LjeQz1P-dramstB5Dg8xzpcsflUCz-6yhJueCo75xVi6_8kldTDARO0tP2FdurnPIQtpTjWeiGJoguiGn4RajV61d7TuuKWYsdS8Fb92fAIwJs0vuVYrPBKPeeMEfcGql5FCOHn84RiHWtPCFlbRjGam6vfgoNzt-J2mtwo5PDwuIQ2UQWgjafSfJJBG4ZwNThKm38Iq7WptmAgjpTB4gXfYC2SFIV6vRz0JtfMxvuRmh1gA3RU0ubuhRPHrgM-NKimWIzGQ4hls9x23QFrnzXHFA8j5fZn9kSbIOPq8esBqpPpk7thKBAYZyJIyz8SwyPcruXRMa6rxeDiHkv-KrBQpVtq8r9CGkiwQoR2HhMGtlk3h_2K_glQ977zcliBuNKVynqtpZz4GjQc1n-rGQlYl3UMmNRU6TSQHF1wo7J7dzxpa3aYcndDHlMY5VI7-Z8RKJOsG_c92Thrf2oa4RS8tSi8z8pMuBkjCBo97m8OsbkzE2qy-pcQ6oqlGOxTLCgOHXjQ_3u4-5GFsOnFdjjFWP_6tQXYeKHMlTkDsM5jThh__q7wMrlacHGYUK8UMg7ZrmXFaCAwXw9qO9ODVvTPDt7a4OjgGs3a2vGP1h4-5833_oGR2zfcfK4ehw07nyAwGg2y3QRpA-9c4THPJf8hQet9YZ2N0V3hZUgfkMh-vaikYQLRfiZs0=w361-h641-s-no-gm?authuser=0'/>
			</div>
				</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
			<MyComponents/>
			<Footer />
		</>
	);
}
