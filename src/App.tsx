import { createSignal } from "solid-js"
import heart from "./assets/heart.svg"
import mayaAndSamual from "./assets/maya-and-samual.webp"

const Width = 32
const [ page, setPage ] = createSignal(0)

export default () => {
	return <>{
		page() == 0 ?
			<div
				style={{
					width: `${Width}rem`,
					height: `${Math.sqrt(2) * Width}rem`,
					background: `oklch(89.2% 0.058 10.001)`,
					"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
					"border-top-right-radius": `.5rem`,
					"border-bottom-right-radius": `.5rem`,
					"margin-top": `2rem`,
					display: `flex`,
					// "justify-content": `center`,
					"flex-direction": `column`,
					"align-items": `center`,
					"cursor": `pointer`,
					"font-family": `Pacifico, cursive`
				}}
				onClick={() => setPage(1)}
			>
				<p style={{ "font-size": `2rem`, "margin-top": `4rem` }}>
				My Beloved Maya
				</p>
				<img src={heart} style={{
					width: `10rem`,
					"margin-top": `4rem`
				}}/>
			</div>
		: page() == 1 ?
			<>
				<div
					style={{
						width: `${Width}rem`,
						height: `${Math.sqrt(2) * Width}rem`,
						background: `oklch(96.9% 0.015 12.422)`,
						"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
						"border-top-left-radius": `.5rem`,
						"border-bottom-left-radius": `.5rem`,
						"margin-top": `2rem`,
						display: `flex`,
						"justify-content": `center`,
						"flex-direction": `column`,
						"align-items": `center`,
						"cursor": `pointer`
					}}
					onClick={() => setPage(0)}
				>
					<img src={mayaAndSamual} style={{ width: `24rem` }}/>
				</div>
				<div
					style={{
						width: `${Width}rem`,
						height: `${Math.sqrt(2) * Width}rem`,
						background: `oklch(96.9% 0.015 12.422)`,
						"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
						"border-top-right-radius": `.5rem`,
						"border-bottom-right-radius": `.5rem`,
						"margin-top": `2rem`,
						display: `flex`,
						"justify-content": `space-around`,
						"flex-direction": `column`,
						"align-items": `center`,
						"cursor": `pointer`,
						"font-family": `sans-serif`,
						"font-size": `1.5rem`,
						"padding-left": `2rem`,
						"padding-right": `2rem`,
						"text-align": `center`
					}}
					onClick={() => setPage(2)}
				>
					<p>Dear Maya,</p>
					<p>Happy Valentines Day!</p>
					<p>You are so special to me, I love you so much.</p>
					<p>I'm excited about spending the rest of my life with you officially beginning.</p>
					<p>I promise to cherish you forever.</p>
					<p>Love Samual. {`<3`}</p>
				</div>
			</>
		: <div
				style={{
					width: `${Width}rem`,
					height: `${Math.sqrt(2) * Width}rem`,
					background: `oklch(89.2% 0.058 10.001)`,
					"box-shadow": `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
					"border-top-left-radius": `.5rem`,
					"border-bottom-left-radius": `.5rem`,
					"margin-top": `2rem`,
					display: `flex`,
					"justify-content": `end`,
					"flex-direction": `column`,
					"align-items": `center`,
					"cursor": `pointer`,
					"font-family": `sans-serif`,
				}}
				onClick={() => setPage(1)}
			>
				<p>Made with {`<3`} by Samual.</p>
			</div>
	}</>
}
